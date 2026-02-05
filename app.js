// Multiplication Practice App

// Translations / Traductions
const translations = {
    fr: {
        // Menu
        title: "🎯 Pratique des Multiplications",
        subtitle: "Choisis un mode de pratique !",
        quizMode: "Mode Quiz",
        quizDesc: "Questions aléatoires",
        timedMode: "Défi Chronométré",
        timedDesc: "Course contre la montre !",
        practiceMode: "Pratique par Table",
        practiceDesc: "Concentre-toi sur une table",
        viewStats: "Voir les Statistiques",
        settings: "Paramètres",
        about: "À propos",

        // Settings
        settingsTitle: "⚙️ Paramètres",
        settingsSubtitle: "Choisis les tables à pratiquer",
        selectAll: "Tout Sélectionner",
        deselectAll: "Tout Désélectionner",
        table: "Table",
        backToMenu: "← Retour au Menu",
        language: "Langue",

        // Practice by Table
        practiceTableTitle: "🎓 Pratique par Table",
        practiceTableSubtitle: "Choisis une table à pratiquer",

        // Game
        score: "Score",
        checkAnswer: "Vérifier la Réponse",
        nextQuestion: "Question Suivante →",
        correctFeedback: "✓ Correct ! Bien joué !",
        incorrectFeedback: "✗ Incorrect. La réponse est",

        // Timed Challenge
        timeUp: "⏱️ Temps Écoulé !",
        questionsAnswered: "Questions Répondues",
        highScore: "Meilleur Score",
        playAgain: "Rejouer",

        // Results
        quizComplete: "🎯 Quiz Terminé !",
        practiceComplete: "🎓 Pratique Terminée !",
        correctAnswers: "Bonnes Réponses",

        // Encouragement messages
        amazing: "Incroyable ! Tu es un maître de la multiplication ! 🌟",
        excellent: "Excellent travail ! Continue comme ça ! 🎉",
        goodJob: "Bon travail ! La pratique rend parfait ! 👍",
        greatEffort: "Bel effort !",
        outstanding: "Remarquable ! Tu as maîtrisé cette table ! 🌟",
        greatWork: "Super travail ! Tu te débrouilles très bien ! 🎉",
        niceJob: "Bien joué ! Continue à pratiquer ! 👍",
        goodEffort: "Bon effort !",

        // Stats
        statsTitle: "📊 Ta Progression",
        totalQuestions: "Total de Questions",
        correctAnswersCount: "Bonnes Réponses",
        accuracy: "Précision",
        timedHighScore: "Meilleur Score Chronométré",
        statsByTable: "Statistiques par Table",
        resetStats: "Réinitialiser les Statistiques",
        noStatsYet: "Pas encore de statistiques. Commence à pratiquer !",

        // Alerts
        enterNumber: "Veuillez entrer un nombre !",
        selectOneTable: "Veuillez sélectionner au moins une table dans les paramètres !",
        confirmReset: "Es-tu sûr de vouloir réinitialiser toutes les statistiques ? Cette action est irréversible.",
        statsReset: "Les statistiques ont été réinitialisées !",

        // Progress
        of: "de",

        // About
        aboutTitle: "À propos",
        aboutText: `Bonjour à vous cher parents et/ou élève,

J'ai créé cette application afin de permettre à mon enfant de pratiquer ses tables de multiplication de façon simple avec un petit côté ludique. L'offre d'application sur les App Stores est considérable, mais je n'y trouvais pas mon compte, certaines applications étant devenues payantes, ou nécessitant une inscription.

Bref, celle-ci est disponible en mode hors-ligne, 100% open-source, mais comme nous disons en bon québécois: elle fait la job !

Bonne étude`
    },
    en: {
        // Menu
        title: "🎯 Multiplication Practice",
        subtitle: "Choose a practice mode!",
        quizMode: "Quiz Mode",
        quizDesc: "Random questions",
        timedMode: "Timed Challenge",
        timedDesc: "Race the clock!",
        practiceMode: "Practice by Table",
        practiceDesc: "Focus on one table",
        viewStats: "View Stats",
        settings: "Settings",
        about: "About",

        // Settings
        settingsTitle: "⚙️ Settings",
        settingsSubtitle: "Choose which tables to practice",
        selectAll: "Select All",
        deselectAll: "Deselect All",
        table: "Table",
        backToMenu: "← Back to Menu",
        language: "Language",

        // Practice by Table
        practiceTableTitle: "🎓 Practice by Table",
        practiceTableSubtitle: "Choose a table to practice",

        // Game
        score: "Score",
        checkAnswer: "Check Answer",
        nextQuestion: "Next Question →",
        correctFeedback: "✓ Correct! Well done!",
        incorrectFeedback: "✗ Incorrect. The answer is",

        // Timed Challenge
        timeUp: "⏱️ Time's Up!",
        questionsAnswered: "Questions Answered",
        highScore: "High Score",
        playAgain: "Play Again",

        // Results
        quizComplete: "🎯 Quiz Complete!",
        practiceComplete: "🎓 Practice Complete!",
        correctAnswers: "Correct Answers",

        // Encouragement messages
        amazing: "Amazing! You're a multiplication master! 🌟",
        excellent: "Excellent work! Keep it up! 🎉",
        goodJob: "Good job! Practice makes perfect! 👍",
        greatEffort: "Great effort!",
        outstanding: "Outstanding! You've mastered this table! 🌟",
        greatWork: "Great work! You're doing really well! 🎉",
        niceJob: "Nice job! Keep practicing! 👍",
        goodEffort: "Good effort!",

        // Stats
        statsTitle: "📊 Your Progress",
        totalQuestions: "Total Questions",
        correctAnswersCount: "Correct Answers",
        accuracy: "Accuracy",
        timedHighScore: "Timed High Score",
        statsByTable: "Stats by Table",
        resetStats: "Reset All Stats",
        noStatsYet: "No stats yet. Start practicing!",

        // Alerts
        enterNumber: "Please enter a number!",
        selectOneTable: "Please select at least one table in settings!",
        confirmReset: "Are you sure you want to reset all stats? This cannot be undone.",
        statsReset: "Stats have been reset!",

        // Progress
        of: "of",

        // About
        aboutTitle: "About",
        aboutText: `Hello dear parents and/or students,

I created this application to allow my child to practice their multiplication tables in a simple way with a fun touch. The selection of applications on App Stores is considerable, but I couldn't find what I was looking for - some applications have become paid, or require registration.

In short, this one is available offline, 100% open-source, and as we say in good Quebec French: it does the job!

Happy studying`
    }
};

// Current language (default: French)
let currentLang = 'fr';

// Translation helper function
function t(key) {
    return translations[currentLang][key] || key;
}

const app = {
    // ============================================
    // ⚙️ SETTINGS - Adjust these values as needed
    // ============================================
    settings: {
        // Delay before auto-advancing to next question after CORRECT answer (in milliseconds)
        // 1000 = 1 second, 2000 = 2 seconds, etc.
        correctAnswerDelay: 500,  // 0.5 seconds

        // Delay before auto-advancing in timed mode (applies to both correct and incorrect)
        timedModeDelay: 500,  // 0.5 seconds

        // Number of questions in Quiz mode before showing results
        // Change this to any number you want (10, 15, 20, 30, etc.)
        quizQuestionsLimit: 20  // 20 questions per quiz
    },

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
        quizProgress: 0,
        timerInterval: null,
        timeLeft: 60
    },

    // Initialize app
    init() {
        this.loadLanguage();
        this.loadSettings();
        this.loadStats();
        this.renderTableCheckboxes();
        this.renderPracticeTableButtons();
        this.updateAllText();
        this.showMenu();
    },

    // Language Management
    loadLanguage() {
        const saved = localStorage.getItem('multiplyLanguage');
        if (saved) {
            currentLang = saved;
        }

        // Set initial active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.getElementById(`lang-${currentLang}`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    },

    setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('multiplyLanguage', lang);

        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');

        this.updateAllText();
    },

    updateAllText() {
        // Helper function to safely update text content
        const safeUpdate = (selector, textOrHtml, isHtml = false) => {
            const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
            if (el) {
                if (isHtml) {
                    el.innerHTML = textOrHtml;
                } else {
                    el.textContent = textOrHtml;
                }
            }
        };

        // Update menu screen
        safeUpdate('#menu-screen h1', t('title'));
        safeUpdate('#menu-screen .subtitle', t('subtitle'));
        safeUpdate('.quiz-btn .label', t('quizMode'));
        safeUpdate('.quiz-btn .description', t('quizDesc'));
        safeUpdate('.timed-btn .label', t('timedMode'));
        safeUpdate('.timed-btn .description', t('timedDesc'));
        safeUpdate('.practice-btn .label', t('practiceMode'));
        safeUpdate('.practice-btn .description', t('practiceDesc'));

        const statsBtn = document.querySelectorAll('.bottom-buttons .secondary-btn')[0];
        const settingsBtn = document.querySelectorAll('.bottom-buttons .secondary-btn')[1];
        const aboutBtn = document.querySelectorAll('.bottom-buttons .secondary-btn')[2];
        if (statsBtn) statsBtn.innerHTML = `<span class="icon">📊</span> ${t('viewStats')}`;
        if (settingsBtn) settingsBtn.innerHTML = `<span class="icon">⚙️</span> ${t('settings')}`;
        if (aboutBtn) aboutBtn.innerHTML = `<span class="icon">ℹ️</span> ${t('about')}`;

        // Update settings screen
        safeUpdate('#settings-screen h2', t('settingsTitle'));
        safeUpdate('#settings-screen .subtitle', t('settingsSubtitle'));
        const selectAllBtn = document.querySelectorAll('#settings-screen .select-all-row button')[0];
        const deselectAllBtn = document.querySelectorAll('#settings-screen .select-all-row button')[1];
        if (selectAllBtn) selectAllBtn.textContent = t('selectAll');
        if (deselectAllBtn) deselectAllBtn.textContent = t('deselectAll');
        safeUpdate('#settings-screen .back-btn', t('backToMenu'));

        // Update table selection screen
        safeUpdate('#table-select-screen h2', t('practiceTableTitle'));
        safeUpdate('#table-select-screen .subtitle', t('practiceTableSubtitle'));
        safeUpdate('#table-select-screen .back-btn', t('backToMenu'));

        // Update game screen buttons (but NOT questions or scores during gameplay)
        safeUpdate('#quiz-submit', t('checkAnswer'));
        safeUpdate('#quiz-next', t('nextQuestion'));
        safeUpdate('#timed-submit', t('checkAnswer'));
        safeUpdate('#practice-submit', t('checkAnswer'));
        safeUpdate('#practice-next', t('nextQuestion'));

        // Update results screens
        safeUpdate('#timed-results-screen h2', t('timeUp'));
        safeUpdate('#timed-results-screen .results-label', t('questionsAnswered'));
        const timedPlayBtn = document.querySelectorAll('#timed-results-screen .bottom-buttons button')[0];
        const timedMenuBtn = document.querySelectorAll('#timed-results-screen .bottom-buttons button')[1];
        if (timedPlayBtn) timedPlayBtn.textContent = t('playAgain');
        if (timedMenuBtn) timedMenuBtn.textContent = t('backToMenu');

        safeUpdate('#quiz-results-screen h2', t('quizComplete'));
        const quizResultLabel = document.querySelectorAll('#quiz-results-screen .results-label')[0];
        if (quizResultLabel) quizResultLabel.textContent = t('correctAnswers');
        const quizPlayBtn = document.querySelectorAll('#quiz-results-screen .bottom-buttons button')[0];
        const quizMenuBtn = document.querySelectorAll('#quiz-results-screen .bottom-buttons button')[1];
        if (quizPlayBtn) quizPlayBtn.textContent = t('playAgain');
        if (quizMenuBtn) quizMenuBtn.textContent = t('backToMenu');

        safeUpdate('#practice-results-screen h2', t('practiceComplete'));
        const pracResultLabel = document.querySelectorAll('#practice-results-screen .results-label')[1];
        if (pracResultLabel) pracResultLabel.textContent = t('correctAnswers');
        const pracPlayBtn = document.querySelectorAll('#practice-results-screen .bottom-buttons button')[0];
        const pracMenuBtn = document.querySelectorAll('#practice-results-screen .bottom-buttons button')[1];
        if (pracPlayBtn) pracPlayBtn.textContent = t('practiceTableTitle').replace('🎓 ', '');
        if (pracMenuBtn) pracMenuBtn.textContent = t('backToMenu');

        // Update about screen
        safeUpdate('#about-screen h2', `ℹ️ ${t('aboutTitle')}`);
        safeUpdate('#about-text', t('aboutText'));
        const aboutBackBtn = document.querySelector('#about-screen .back-btn');
        if (aboutBackBtn) aboutBackBtn.textContent = t('backToMenu');

        // Update stats screen
        safeUpdate('#stats-screen h2', t('statsTitle'));
        const statLabels = document.querySelectorAll('#stats-screen .stat-label');
        if (statLabels[0]) statLabels[0].textContent = t('totalQuestions');
        if (statLabels[1]) statLabels[1].textContent = t('correctAnswersCount');
        if (statLabels[2]) statLabels[2].textContent = t('accuracy');
        if (statLabels[3]) statLabels[3].textContent = t('timedHighScore');
        safeUpdate('#stats-screen h3', t('statsByTable'));
        safeUpdate('#stats-screen .danger-btn', t('resetStats'));
        safeUpdate('#stats-screen .back-btn', t('backToMenu'));

        // Update table checkboxes labels
        this.updateTableCheckboxes();
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
        if (confirm(t('confirmReset'))) {
            this.stats = {
                totalQuestions: 0,
                correctAnswers: 0,
                byTable: {},
                highScores: { timed: 0 }
            };
            this.saveStats();
            this.displayStats();
            alert(t('statsReset'));
        }
    },

    // Screen Navigation
    showScreen(screenId) {
        console.log('Showing screen:', screenId);

        // Remove active from ALL screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
            console.log('Hiding:', screen.id);
        });

        // Add active to target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log('Activated:', screenId);
        } else {
            console.error('Screen not found:', screenId);
        }
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

    showAbout() {
        this.showScreen('about-screen');
        document.getElementById('about-text').textContent = t('aboutText');
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
        // Ensure tableNum is a number
        tableNum = Number(tableNum);
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

            const multiplier = Number(this.state.practiceQuestions[this.state.practiceProgress]);
            const table = Number(this.state.practiceTable);

            return {
                question: `${table} × ${multiplier}`,
                answer: table * multiplier,
                table: table
            };
        } else {
            // Quiz or Timed mode
            if (this.state.selectedTables.length === 0) {
                alert(t('selectOneTable'));
                this.showMenu();
                return null;
            }

            const table = Number(this.state.selectedTables[
                Math.floor(Math.random() * this.state.selectedTables.length)
            ]);
            const multiplier = Math.floor(Math.random() * 12) + 1;
            const answer = table * multiplier;

            // Debug logging
            console.log(`Question: ${table} × ${multiplier} = ${answer}`);

            return {
                question: `${table} × ${multiplier}`,
                answer: answer,
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
            this.state.quizProgress = 0;
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
        // Check if quiz mode has reached the question limit
        if (mode === 'quiz' && this.state.score.total >= this.settings.quizQuestionsLimit) {
            this.showQuizResults();
            return;
        }

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
            this.state.quizProgress++;
            document.getElementById('quiz-progress').textContent =
                `${this.state.quizProgress}/${this.settings.quizQuestionsLimit}`;
            document.getElementById('quiz-score').textContent =
                this.state.score.correct;
        } else if (mode === 'timed') {
            document.getElementById('timed-score').textContent = this.state.score.correct;
        } else if (mode === 'practice') {
            this.state.practiceProgress++;
            document.getElementById('practice-progress').textContent =
                `${this.state.practiceProgress} ${t('of')} ${this.state.practiceQuestions.length}`;
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
            alert(t('enterNumber'));
            return;
        }

        // Ensure both values are numbers for comparison
        const correct = userAnswer === Number(this.state.currentQuestion.answer);
        this.state.score.total++;
        if (correct) {
            this.state.score.correct++;
        }

        // Update stats
        this.updateStats(this.state.currentQuestion.table, correct);

        // Show feedback
        const feedback = document.getElementById(`${mode}-feedback`);
        if (correct) {
            feedback.textContent = t('correctFeedback');
            feedback.className = 'feedback correct';
            this.createConfetti();
        } else {
            feedback.textContent = `${t('incorrectFeedback')} ${this.state.currentQuestion.answer}`;
            feedback.className = 'feedback incorrect';
        }

        // Update UI buttons
        document.getElementById(`${mode}-submit`).classList.add('hidden');

        if (mode === 'timed') {
            // Auto-advance in timed mode (uses timedModeDelay setting)
            setTimeout(() => {
                this.nextQuestion(mode);
            }, this.settings.timedModeDelay);
        } else {
            // For quiz and practice modes
            const nextBtn = document.getElementById(`${mode}-next`);

            if (correct) {
                // Auto-advance after correct answer (uses correctAnswerDelay setting)
                setTimeout(() => {
                    this.nextQuestion(mode);
                }, this.settings.correctAnswerDelay);
            } else {
                // Show Next button for incorrect answers so user can review
                if (nextBtn) {
                    nextBtn.classList.remove('hidden');
                }
            }
        }

        // Update score
        if (mode === 'quiz') {
            document.getElementById('quiz-score').textContent = this.state.score.correct;
        } else if (mode === 'timed') {
            document.getElementById('timed-score').textContent = this.state.score.correct;
        }
    },

    // Timer Management (Timed Challenge)
    startTimer() {
        // Update display immediately
        const timerEl = document.getElementById('timer');
        timerEl.textContent = this.state.timeLeft;

        // Start countdown - decrement after 1 second
        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft--;
            timerEl.textContent = this.state.timeLeft;

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
        let message = t('greatEffort');
        if (score >= 30) message = t('amazing');
        else if (score >= 20) message = t('excellent');
        else if (score >= 10) message = t('goodJob');

        document.getElementById('encouragement-message').textContent = message;
    },

    // Quiz Mode Results
    showQuizResults() {
        this.showScreen('quiz-results-screen');

        const score = `${this.state.score.correct}/${this.state.score.total}`;
        const percentage = Math.round((this.state.score.correct / this.state.score.total) * 100);

        document.getElementById('quiz-final-score').textContent = score;

        // Encouragement message
        let message = t('goodEffort');
        if (percentage >= 90) message = t('outstanding');
        else if (percentage >= 75) message = t('greatWork');
        else if (percentage >= 60) message = t('niceJob');

        document.getElementById('quiz-encouragement').textContent = message;
    },

    // Practice Mode Results
    showPracticeResults() {
        this.showScreen('practice-results-screen');

        const score = `${this.state.score.correct}/${this.state.score.total}`;
        const percentage = Math.round((this.state.score.correct / this.state.score.total) * 100);

        document.getElementById('completed-table').textContent = this.state.practiceTable;
        document.getElementById('practice-final-score').textContent = score;

        // Encouragement
        let message = t('goodEffort');
        if (percentage >= 90) message = t('outstanding');
        else if (percentage >= 75) message = t('greatWork');
        else if (percentage >= 60) message = t('niceJob');

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
                    <span class="table-stat-label">${t('table')} ${i}</span>
                    <span class="table-stat-value">${tableStats.correct}/${tableStats.total} (${accuracy}%)</span>
                `;
                container.appendChild(row);
            }
        }

        if (container.children.length === 0) {
            container.innerHTML = `<p style="text-align: center; color: #999;">${t('noStatsYet')}</p>`;
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
