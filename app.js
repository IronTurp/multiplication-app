// Multiplication Practice App
const app = {
    // State
    state: {
        currentMode: null,
        currentQuestion: null,
        currentAnswer: null,
        score: { correct: 0, total: 0 },
        selectedTables: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        practiceTable: null,
        practiceProgress: 0,
        practiceQuestions: [],
        timerInterval: null,
        timeLeft: 60
    },

    // Initialize app
    init() {
        this.loadSettings();
        this.loadStats();
        this.renderTableCheckboxes();
        this.renderPracticeTableButtons();
        this.showMenu();
    },

    // LocalStorage Management
    loadSettings() {
        const saved = localStorage.getItem('multiplySettings');
        if (saved) {
            const settings = JSON.parse(saved);
            this.state.selectedTables = settings.selectedTables || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
    },

    saveSettings() {
        localStorage.setItem('multiplySettings', JSON.stringify({
            selectedTables: this.state.selectedTables
        }));
    },

    loadStats() {
        const saved = localStorage.getItem('multiplyStats');
        if (saved) {
            this.stats = JSON.parse(saved);
        } else {
            this.stats = {
                totalQuestions: 0,
                correctAnswers: 0,
                byTable: {},
                highScores: { timed: 0 }
            };
        }
    },

    saveStats() {
        localStorage.setItem('multiplyStats', JSON.stringify(this.stats));
    },

    updateStats(table, correct) {
        this.stats.totalQuestions++;
        if (correct) {
            this.stats.correctAnswers++;
        }

        if (!this.stats.byTable[table]) {
            this.stats.byTable[table] = { correct: 0, total: 0 };
        }
        this.stats.byTable[table].total++;
        if (correct) {
            this.stats.byTable[table].correct++;
        }

        this.saveStats();
    },

    resetStats() {
        if (confirm('Are you sure you want to reset all stats? This cannot be undone.')) {
            this.stats = {
                totalQuestions: 0,
                correctAnswers: 0,
                byTable: {},
                highScores: { timed: 0 }
            };
            this.saveStats();
            this.displayStats();
            alert('Stats have been reset!');
        }
    },

    // Screen Navigation
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    },

    showMenu() {
        this.showScreen('menu-screen');
        this.resetGameState();
    },

    showSettings() {
        this.showScreen('settings-screen');
        this.updateTableCheckboxes();
    },

    showStats() {
        this.showScreen('stats-screen');
        this.displayStats();
    },

    showTableSelection() {
        this.showScreen('table-select-screen');
    },

    exitGame() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }
        this.showMenu();
    },

    resetGameState() {
        this.state.currentMode = null;
        this.state.currentQuestion = null;
        this.state.currentAnswer = null;
        this.state.score = { correct: 0, total: 0 };
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }
    },

    // Settings/Configuration
    renderTableCheckboxes() {
        const container = document.getElementById('table-checkboxes');
        container.innerHTML = '';

        for (let i = 1; i <= 12; i++) {
            const div = document.createElement('div');
            div.className = 'table-checkbox';
            div.innerHTML = `
                <input type="checkbox" id="table-${i}" value="${i}">
                <label for="table-${i}">Table ${i}</label>
            `;

            const checkbox = div.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                this.toggleTable(parseInt(e.target.value));
            });

            container.appendChild(div);
        }
    },

    updateTableCheckboxes() {
        for (let i = 1; i <= 12; i++) {
            const checkbox = document.getElementById(`table-${i}`);
            const container = checkbox.parentElement;
            checkbox.checked = this.state.selectedTables.includes(i);

            if (checkbox.checked) {
                container.classList.add('checked');
            } else {
                container.classList.remove('checked');
            }
        }
    },

    toggleTable(tableNum) {
        const index = this.state.selectedTables.indexOf(tableNum);
        if (index > -1) {
            this.state.selectedTables.splice(index, 1);
        } else {
            this.state.selectedTables.push(tableNum);
        }
        this.state.selectedTables.sort((a, b) => a - b);
        this.updateTableCheckboxes();
        this.saveSettings();
    },

    selectAllTables() {
        this.state.selectedTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.updateTableCheckboxes();
        this.saveSettings();
    },

    deselectAllTables() {
        this.state.selectedTables = [];
        this.updateTableCheckboxes();
        this.saveSettings();
    },

    // Practice by Table Mode
    renderPracticeTableButtons() {
        const container = document.getElementById('practice-table-buttons');
        container.innerHTML = '';

        for (let i = 1; i <= 12; i++) {
            const button = document.createElement('button');
            button.className = 'table-select-btn';
            button.textContent = i;
            button.onclick = () => this.startPracticeTable(i);
            container.appendChild(button);
        }
    },

    startPracticeTable(tableNum) {
        this.state.practiceTable = tableNum;
        this.state.practiceProgress = 0;
        this.state.score = { correct: 0, total: 0 };

        // Generate all questions for this table (1-12, shuffled)
        this.state.practiceQuestions = [];
        for (let i = 1; i <= 12; i++) {
            this.state.practiceQuestions.push(i);
        }
        this.shuffleArray(this.state.practiceQuestions);

        this.startMode('practice');
    },

    // Question Generation
    generateQuestion(mode) {
        if (mode === 'practice') {
            if (this.state.practiceProgress >= this.state.practiceQuestions.length) {
                this.showPracticeResults();
                return null;
            }

            const multiplier = this.state.practiceQuestions[this.state.practiceProgress];
            const table = this.state.practiceTable;

            return {
                question: `${table} × ${multiplier}`,
                answer: table * multiplier,
                table: table
            };
        } else {
            // Quiz or Timed mode
            if (this.state.selectedTables.length === 0) {
                alert('Please select at least one table in settings!');
                this.showMenu();
                return null;
            }

            const table = this.state.selectedTables[
                Math.floor(Math.random() * this.state.selectedTables.length)
            ];
            const multiplier = Math.floor(Math.random() * 12) + 1;

            return {
                question: `${table} × ${multiplier}`,
                answer: table * multiplier,
                table: table
            };
        }
    },

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    // Game Mode Management
    startMode(mode) {
        this.state.currentMode = mode;
        this.state.score = { correct: 0, total: 0 };

        if (mode === 'quiz') {
            this.showScreen('quiz-screen');
            this.nextQuestion('quiz');
        } else if (mode === 'timed') {
            this.showScreen('timed-screen');
            this.state.timeLeft = 60;
            this.startTimer();
            this.nextQuestion('timed');
        } else if (mode === 'practice') {
            this.showScreen('practice-screen');
            document.getElementById('practice-table').textContent = this.state.practiceTable;
            this.nextQuestion('practice');
        }
    },

    nextQuestion(mode) {
        const question = this.generateQuestion(mode);
        if (!question) return;

        this.state.currentQuestion = question;
        this.state.currentAnswer = null;

        // Update UI
        document.getElementById(`${mode}-question`).textContent = question.question + ' = ?';
        document.getElementById(`${mode}-answer`).value = '';
        document.getElementById(`${mode}-feedback`).textContent = '';
        document.getElementById(`${mode}-feedback`).className = 'feedback';

        // Show/hide buttons
        document.getElementById(`${mode}-submit`).classList.remove('hidden');
        const nextBtn = document.getElementById(`${mode}-next`);
        if (nextBtn) {
            nextBtn.classList.add('hidden');
        }

        // Update score display
        if (mode === 'quiz') {
            document.getElementById('quiz-score').textContent =
                `${this.state.score.correct}/${this.state.score.total}`;
        } else if (mode === 'timed') {
            document.getElementById('timed-score').textContent = this.state.score.correct;
        } else if (mode === 'practice') {
            this.state.practiceProgress++;
            document.getElementById('practice-progress').textContent =
                `${this.state.practiceProgress} / ${this.state.practiceQuestions.length}`;
        }

        // Focus on input
        document.getElementById(`${mode}-answer`).focus();

        // Add Enter key listener
        const input = document.getElementById(`${mode}-answer`);
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                const submitBtn = document.getElementById(`${mode}-submit`);
                const nextBtn = document.getElementById(`${mode}-next`);

                if (!submitBtn.classList.contains('hidden')) {
                    this.submitAnswer(mode);
                } else if (nextBtn && !nextBtn.classList.contains('hidden')) {
                    this.nextQuestion(mode);
                }
            }
        };
    },

    submitAnswer(mode) {
        const input = document.getElementById(`${mode}-answer`);
        const userAnswer = parseInt(input.value);

        if (isNaN(userAnswer)) {
            alert('Please enter a number!');
            return;
        }

        const correct = userAnswer === this.state.currentQuestion.answer;
        this.state.score.total++;
        if (correct) {
            this.state.score.correct++;
        }

        // Update stats
        this.updateStats(this.state.currentQuestion.table, correct);

        // Show feedback
        const feedback = document.getElementById(`${mode}-feedback`);
        if (correct) {
            feedback.textContent = '✓ Correct! Well done!';
            feedback.className = 'feedback correct';
            this.createConfetti();
        } else {
            feedback.textContent = `✗ Incorrect. The answer is ${this.state.currentQuestion.answer}`;
            feedback.className = 'feedback incorrect';
        }

        // Update UI buttons
        document.getElementById(`${mode}-submit`).classList.add('hidden');

        if (mode === 'timed') {
            // Auto-advance in timed mode
            setTimeout(() => {
                this.nextQuestion(mode);
            }, 1000);
        } else {
            const nextBtn = document.getElementById(`${mode}-next`);
            if (nextBtn) {
                nextBtn.classList.remove('hidden');
            }
        }

        // Update score
        if (mode === 'quiz') {
            document.getElementById('quiz-score').textContent =
                `${this.state.score.correct}/${this.state.score.total}`;
        } else if (mode === 'timed') {
            document.getElementById('timed-score').textContent = this.state.score.correct;
        }
    },

    // Timer Management (Timed Challenge)
    startTimer() {
        document.getElementById('timer').textContent = this.state.timeLeft;

        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft--;
            document.getElementById('timer').textContent = this.state.timeLeft;

            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timerInterval);
                this.showTimedResults();
            }
        }, 1000);
    },

    showTimedResults() {
        const score = this.state.score.correct;

        // Update high score
        if (score > this.stats.highScores.timed) {
            this.stats.highScores.timed = score;
            this.saveStats();
        }

        // Show results screen
        this.showScreen('timed-results-screen');
        document.getElementById('final-score').textContent = score;
        document.getElementById('high-score').textContent = this.stats.highScores.timed;

        // Encouragement message
        let message = 'Great effort!';
        if (score >= 30) message = 'Amazing! You\'re a multiplication master! 🌟';
        else if (score >= 20) message = 'Excellent work! Keep it up! 🎉';
        else if (score >= 10) message = 'Good job! Practice makes perfect! 👍';

        document.getElementById('encouragement-message').textContent = message;
    },

    // Practice Mode Results
    showPracticeResults() {
        this.showScreen('practice-results-screen');

        const score = `${this.state.score.correct}/${this.state.score.total}`;
        const percentage = Math.round((this.state.score.correct / this.state.score.total) * 100);

        document.getElementById('completed-table').textContent = this.state.practiceTable;
        document.getElementById('practice-final-score').textContent = score;

        // Encouragement
        let message = 'Good effort!';
        if (percentage >= 90) message = 'Outstanding! You\'ve mastered this table! 🌟';
        else if (percentage >= 75) message = 'Great work! You\'re doing really well! 🎉';
        else if (percentage >= 60) message = 'Nice job! Keep practicing! 👍';

        document.getElementById('practice-encouragement').textContent = message;
    },

    // Stats Display
    displayStats() {
        const accuracy = this.stats.totalQuestions > 0
            ? Math.round((this.stats.correctAnswers / this.stats.totalQuestions) * 100)
            : 0;

        document.getElementById('total-questions').textContent = this.stats.totalQuestions;
        document.getElementById('total-correct').textContent = this.stats.correctAnswers;
        document.getElementById('accuracy').textContent = accuracy + '%';
        document.getElementById('timed-high-score').textContent = this.stats.highScores.timed || 0;

        // Table stats
        const container = document.getElementById('table-stats');
        container.innerHTML = '';

        for (let i = 1; i <= 12; i++) {
            const tableStats = this.stats.byTable[i];
            if (tableStats && tableStats.total > 0) {
                const accuracy = Math.round((tableStats.correct / tableStats.total) * 100);

                const row = document.createElement('div');
                row.className = 'table-stat-row';
                row.innerHTML = `
                    <span class="table-stat-label">Table ${i}</span>
                    <span class="table-stat-value">${tableStats.correct}/${tableStats.total} (${accuracy}%)</span>
                `;
                container.appendChild(row);
            }
        }

        if (container.children.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #999;">No stats yet. Start practicing!</p>';
        }
    },

    // Confetti Animation
    createConfetti() {
        const container = document.getElementById('confetti-container');
        const colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#FFC107'];

        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                container.appendChild(confetti);

                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
