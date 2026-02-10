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

Bonne étude
Jean-François`,

        // Quiz Count Selection
        quizCountTitle: "📝 Mode Quiz",
        quizCountSubtitle: "Combien de questions ?",
        questions: "Questions",

        // Quiz Time
        totalTime: "Temps Total",
        avgPerQuestion: "Moy. par Question",

        // Stats Tabs
        statsDay: "Jour",
        statsWeek: "Semaine",
        statsMonth: "Mois",
        statsAllTime: "Tout",

        // Progress
        progressTitle: "Progression",
        avgTimePerQuestion: "Moy. Temps/Question",
        accuracyTrend: "Tendance Précision",
        noDataYet: "Pas encore de données pour cette période.",

        // Tips
        tip: "Astuce",
        tipsUsed: "Astuces Utilisées",
        showTipsInQuiz: "Afficher les astuces en mode Quiz",

        // Profiles
        profiles: "Profils",
        currentProfile: "Profil actuel",
        manageProfiles: "Gérer les Profils",
        profilesTitle: "👤 Gestion des Profils",
        profilesSubtitle: "Créer et gérer les profils d'utilisateurs",
        createNewProfile: "Créer un Nouveau Profil",
        profileName: "Nom du profil",
        create: "Créer",
        cancel: "Annuler",
        switchProfile: "Changer",
        deleteProfile: "Supprimer",
        confirmDeleteProfile: "Es-tu sûr de vouloir supprimer ce profil ? Toutes les statistiques seront perdues.",
        profileDeleted: "Profil supprimé !",
        enterProfileName: "Veuillez entrer un nom de profil !",
        profileCreated: "Profil créé !",
        defaultProfile: "Anonyme",
        cannotDeleteDefault: "Impossible de supprimer le profil par défaut !",
        helloAnonymous: "Bonjour utilisateur Anonyme !",
        helloUser: "Bonjour",

        // Operations
        multiplication: "Multiplication",
        division: "Division",
        timedConfigTitle: "⏱️ Défi Chronométré",
        timedConfigSubtitle: "60 secondes - réponds au maximum de questions !",
        start: "Commencer !",

        // Export/Import
        exportData: "Exporter les données",
        importData: "Importer les données",
        dataManagement: "Gestion des données",
        importInvalidFile: "Fichier invalide. Veuillez sélectionner un fichier d'exportation valide.",
        importMergeOrReplace: "Voulez-vous fusionner les données importées avec vos données actuelles ?\n\nOK = Fusionner\nAnnuler = Tout remplacer",
        importSuccess: "Données importées avec succès !",
        importError: "Erreur lors de l'importation. Vérifiez que le fichier est valide.",

        // Install Banner
        installBannerText: "Installez l'application pour ne pas perdre vos données !",
        installBannerIOS: "Ajoutez cette app à l'écran d'accueil : appuyez sur Partager puis \"Sur l'écran d'accueil\"",
        install: "Installer"
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

Happy studying
Jean-François`,

        // Quiz Count Selection
        quizCountTitle: "📝 Quiz Mode",
        quizCountSubtitle: "How many questions?",
        questions: "Questions",

        // Quiz Time
        totalTime: "Total Time",
        avgPerQuestion: "Avg per Question",

        // Stats Tabs
        statsDay: "Day",
        statsWeek: "Week",
        statsMonth: "Month",
        statsAllTime: "All Time",

        // Progress
        progressTitle: "Progress",
        avgTimePerQuestion: "Avg Time/Question",
        accuracyTrend: "Accuracy Trend",
        noDataYet: "No data yet for this period.",

        // Tips
        tip: "Tip",
        tipsUsed: "Tips Used",
        showTipsInQuiz: "Show tips in Quiz mode",

        // Profiles
        profiles: "Profiles",
        currentProfile: "Current Profile",
        manageProfiles: "Manage Profiles",
        profilesTitle: "👤 Profile Management",
        profilesSubtitle: "Create and manage user profiles",
        createNewProfile: "Create New Profile",
        profileName: "Profile name",
        create: "Create",
        cancel: "Cancel",
        switchProfile: "Switch",
        deleteProfile: "Delete",
        confirmDeleteProfile: "Are you sure you want to delete this profile? All stats will be lost.",
        profileDeleted: "Profile deleted!",
        enterProfileName: "Please enter a profile name!",
        profileCreated: "Profile created!",
        defaultProfile: "Anonymous",
        cannotDeleteDefault: "Cannot delete the default profile!",
        helloAnonymous: "Hello Anonymous User!",
        helloUser: "Hello",

        // Operations
        multiplication: "Multiplication",
        division: "Division",
        timedConfigTitle: "⏱️ Timed Challenge",
        timedConfigSubtitle: "60 seconds - answer as many as you can!",
        start: "Start!",

        // Export/Import
        exportData: "Export Data",
        importData: "Import Data",
        dataManagement: "Data Management",
        importInvalidFile: "Invalid file. Please select a valid export file.",
        importMergeOrReplace: "Do you want to merge imported data with your current data?\n\nOK = Merge\nCancel = Replace all",
        importSuccess: "Data imported successfully!",
        importError: "Import failed. Please check that the file is valid.",

        // Install Banner
        installBannerText: "Install the app to keep your data safe!",
        installBannerIOS: "Add to Home Screen: tap Share then \"Add to Home Screen\"",
        install: "Install"
    }
};

// Multiplication Tips Data
const multiplicationTips = {
    11: {
        applicableMultipliers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        getExamples(currentMultiplier) {
            const available = this.applicableMultipliers.filter(m => m !== currentMultiplier);
            const shuffled = [...available].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, 2).map(m => ({ multiplier: m, result: 11 * m }));
        },
        getTip(currentMultiplier, lang) {
            const examples = this.getExamples(currentMultiplier);
            const pattern = lang === 'fr'
                ? "Pour multiplier par 11 (de 1 à 9), double le chiffre !"
                : "To multiply by 11 (1 to 9), double the digit!";
            const exText = examples.map(e => `11 × ${e.multiplier} = ${e.result}`).join(', ');
            return `${pattern}\n${exText}, 11 × ${currentMultiplier} = ...?`;
        }
    },
    10: {
        applicableMultipliers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        getExamples(currentMultiplier) {
            const available = this.applicableMultipliers.filter(m => m !== currentMultiplier);
            const shuffled = [...available].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, 2).map(m => ({ multiplier: m, result: 10 * m }));
        },
        getTip(currentMultiplier, lang) {
            const examples = this.getExamples(currentMultiplier);
            const pattern = lang === 'fr'
                ? "Pour multiplier par 10, ajoute un zéro !"
                : "To multiply by 10, just add a zero!";
            const exText = examples.map(e => `10 × ${e.multiplier} = ${e.result}`).join(', ');
            return `${pattern}\n${exText}, 10 × ${currentMultiplier} = ...?`;
        }
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
        quizQuestionsLimit: 20,  // 20 questions per quiz

        // Show tip/astuce button in Quiz and Timed modes (always shown in Practice mode)
        showTipsInQuiz: true
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
        quizStartTime: null,
        timerInterval: null,
        timeLeft: 60,
        statsActivePeriod: 'all',
        selectedOperations: ['multiplication']
    },

    // Profiles
    profiles: {
        currentProfile: 'default',
        list: {}
    },

    // Initialize app
    init() {
        this.loadLanguage();
        this.migrateOldStatsToProfiles(); // Migrate old stats before loading profiles
        this.loadProfiles();
        this.migrateStatsToV2(); // Migrate to timestamped stats format
        this.loadSettings();
        this.loadStats();
        this.renderTableCheckboxes();
        this.renderPracticeTableButtons();
        this.updateAllText();
        this.updateProfileDisplay();
        this.setupMobileKeyboardFix();
        this.setupInstallPrompt();
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
        safeUpdate('#settings-screen .toggle-text', t('showTipsInQuiz'));

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

        // Update quiz count screen
        safeUpdate('#quiz-count-screen h2', t('quizCountTitle'));
        safeUpdate('#quiz-count-screen .subtitle', t('quizCountSubtitle'));
        document.querySelectorAll('.quiz-count-btn .count-label').forEach(el => {
            el.textContent = t('questions');
        });
        safeUpdate('#quiz-count-screen .back-btn', t('backToMenu'));

        // Update timed config screen
        safeUpdate('#timed-config-screen h2', t('timedConfigTitle'));
        safeUpdate('#timed-config-screen .subtitle', t('timedConfigSubtitle'));
        safeUpdate('#timed-config-screen .primary-btn', t('start'));
        safeUpdate('#timed-config-screen .back-btn', t('backToMenu'));

        // Update operation toggle labels
        document.querySelectorAll('.operation-btn[data-op="multiplication"] .op-label').forEach(el => {
            el.textContent = t('multiplication');
        });
        document.querySelectorAll('.operation-btn[data-op="division"] .op-label').forEach(el => {
            el.textContent = t('division');
        });

        // Update quiz results time labels
        const timeLabels = document.querySelectorAll('#quiz-results-screen .time-stat-label');
        if (timeLabels[0]) timeLabels[0].textContent = t('totalTime');
        if (timeLabels[1]) timeLabels[1].textContent = t('avgPerQuestion');

        // Update tip button labels
        document.querySelectorAll('.tip-btn-label').forEach(el => {
            el.textContent = t('tip');
        });

        // Update stats screen
        safeUpdate('#stats-screen h2', t('statsTitle'));
        // Update stats tabs
        document.querySelectorAll('.stats-tab').forEach(tab => {
            const keys = { day: 'statsDay', week: 'statsWeek', month: 'statsMonth', all: 'statsAllTime' };
            tab.textContent = t(keys[tab.dataset.period]);
        });
        const statLabels = document.querySelectorAll('#stats-screen .stat-label');
        if (statLabels[0]) statLabels[0].textContent = t('totalQuestions');
        if (statLabels[1]) statLabels[1].textContent = t('correctAnswersCount');
        if (statLabels[2]) statLabels[2].textContent = t('accuracy');
        if (statLabels[3]) statLabels[3].textContent = t('timedHighScore');
        if (statLabels[4]) statLabels[4].textContent = t('tipsUsed');
        safeUpdate('#stats-screen .table-stats-container h3', t('statsByTable'));
        safeUpdate('#stats-screen .progress-section h3', t('progressTitle'));
        safeUpdate('#stats-screen .danger-btn', t('resetStats'));
        safeUpdate('#stats-screen .back-btn', t('backToMenu'));

        // Update profiles screen
        safeUpdate('#profiles-screen h2', t('profilesTitle'));
        safeUpdate('#profiles-screen .subtitle', t('profilesSubtitle'));
        safeUpdate('#profiles-screen .back-btn', t('backToMenu'));
        const createProfileBtn = document.querySelector('#profiles-screen .primary-btn');
        if (createProfileBtn) createProfileBtn.textContent = t('createNewProfile');

        // Update data management section
        safeUpdate('.data-management-section h3', t('dataManagement'));
        safeUpdate('.export-label', t('exportData'));
        safeUpdate('.import-label', t('importData'));

        // Update install banner
        const installBanner = document.getElementById('install-banner');
        if (installBanner && !installBanner.classList.contains('hidden')) {
            safeUpdate('.install-banner-text', t('installBannerText'));
            safeUpdate('.install-banner-btn', t('install'));
        }

        // Update profile display on menu
        this.updateProfileDisplay();

        // Update table checkboxes labels
        this.updateTableCheckboxes();
    },

    // LocalStorage Management
    loadSettings() {
        const saved = localStorage.getItem('multiplySettings');
        if (saved) {
            const settings = JSON.parse(saved);
            this.state.selectedTables = settings.selectedTables || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.settings.showTipsInQuiz = settings.showTipsInQuiz !== undefined ? settings.showTipsInQuiz : true;
            this.state.selectedOperations = settings.selectedOperations || ['multiplication'];
        }
    },

    saveSettings() {
        localStorage.setItem('multiplySettings', JSON.stringify({
            selectedTables: this.state.selectedTables,
            showTipsInQuiz: this.settings.showTipsInQuiz,
            selectedOperations: this.state.selectedOperations
        }));
    },

    // Migrate stats to V2 format (timestamped records)
    migrateStatsToV2() {
        let changed = false;
        Object.values(this.profiles.list).forEach(profile => {
            if (!profile.stats || !Array.isArray(profile.stats.answerRecords)) {
                profile.stats = {
                    answerRecords: [],
                    quizHistory: [],
                    highScores: (profile.stats && profile.stats.highScores) ? profile.stats.highScores : { timed: 0 },
                    tipUsageCount: 0
                };
                changed = true;
            }
        });
        if (changed) {
            this.saveProfiles();
            console.log('Migrated stats to V2 format');
        }
    },

    // Profile Management
    migrateOldStatsToProfiles() {
        // Check if we need to migrate old stats to profile system
        const oldStats = localStorage.getItem('multiplyStats');
        const profiles = localStorage.getItem('multiplyProfiles');

        if (oldStats && !profiles) {
            // Migrate old stats to default profile
            const stats = JSON.parse(oldStats);
            const defaultProfileName = currentLang === 'fr' ? 'Anonyme' : 'Anonymous';

            this.profiles = {
                currentProfile: 'default',
                list: {
                    'default': {
                        id: 'default',
                        name: defaultProfileName,
                        stats: stats
                    }
                }
            };

            this.saveProfiles();
            // Remove old stats key
            localStorage.removeItem('multiplyStats');
            console.log('Migrated old stats to profile system');
        }
    },

    loadProfiles() {
        const saved = localStorage.getItem('multiplyProfiles');
        if (saved) {
            this.profiles = JSON.parse(saved);
        } else {
            // Create default profile
            const defaultProfileName = currentLang === 'fr' ? 'Anonyme' : 'Anonymous';
            this.profiles = {
                currentProfile: 'default',
                list: {
                    'default': {
                        id: 'default',
                        name: defaultProfileName,
                        stats: {
                            answerRecords: [],
                            quizHistory: [],
                            highScores: { timed: 0 },
                            tipUsageCount: 0
                        }
                    }
                }
            };
            this.saveProfiles();
        }
    },

    saveProfiles() {
        localStorage.setItem('multiplyProfiles', JSON.stringify(this.profiles));
    },

    getCurrentProfile() {
        return this.profiles.list[this.profiles.currentProfile];
    },

    createProfile(name) {
        if (!name || name.trim() === '') {
            alert(t('enterProfileName'));
            return;
        }

        const id = 'profile_' + Date.now();
        this.profiles.list[id] = {
            id: id,
            name: name.trim(),
            stats: {
                answerRecords: [],
                quizHistory: [],
                highScores: { timed: 0 },
                tipUsageCount: 0
            }
        };

        this.saveProfiles();
        alert(t('profileCreated'));
        this.renderProfileList();
    },

    switchProfile(profileId) {
        if (this.profiles.list[profileId]) {
            this.profiles.currentProfile = profileId;
            this.saveProfiles();
            this.loadStats(); // Reload stats for new profile
            this.updateProfileDisplay();
            this.showMenu();
        }
    },

    deleteProfile(profileId) {
        if (profileId === 'default') {
            alert(t('cannotDeleteDefault'));
            return;
        }

        if (confirm(t('confirmDeleteProfile'))) {
            delete this.profiles.list[profileId];

            // If we deleted the current profile, switch to default
            if (this.profiles.currentProfile === profileId) {
                this.profiles.currentProfile = 'default';
                this.loadStats();
            }

            this.saveProfiles();
            alert(t('profileDeleted'));
            this.updateProfileDisplay();
            this.renderProfileList();
        }
    },

    updateProfileDisplay() {
        const profile = this.getCurrentProfile();
        const displayEl = document.getElementById('current-profile-name');
        if (displayEl && profile) {
            // Check if it's the default anonymous profile
            if (profile.id === 'default') {
                displayEl.textContent = t('helloAnonymous');
            } else {
                displayEl.textContent = `${t('helloUser')} ${profile.name}`;
            }
        }
    },

    showProfileManager() {
        this.showScreen('profiles-screen');
        this.renderProfileList();
    },

    renderProfileList() {
        const container = document.getElementById('profile-list');
        if (!container) return;

        container.innerHTML = '';

        Object.values(this.profiles.list).forEach(profile => {
            const isActive = profile.id === this.profiles.currentProfile;

            const div = document.createElement('div');
            div.className = 'profile-item' + (isActive ? ' active' : ' clickable');

            // Make the entire div clickable for inactive profiles
            if (!isActive) {
                div.onclick = () => this.switchProfile(profile.id);
            }

            div.innerHTML = `
                <div class="profile-info">
                    <span class="profile-name">${profile.name}</span>
                    ${isActive ? '<span class="profile-badge">✓</span>' : ''}
                </div>
                <div class="profile-actions">
                    ${profile.id !== 'default' ? `<button class="danger-btn small" onclick="event.stopPropagation(); app.deleteProfile('${profile.id}')">${t('deleteProfile')}</button>` : ''}
                </div>
            `;

            container.appendChild(div);
        });
    },

    // Export / Import
    exportProfiles() {
        const data = {
            version: 1,
            exportDate: new Date().toISOString(),
            profiles: this.profiles,
            settings: {
                selectedTables: this.state.selectedTables,
                showTipsInQuiz: this.settings.showTipsInQuiz,
                selectedOperations: this.state.selectedOperations
            },
            language: currentLang
        };

        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `multiplication-data-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    triggerImport() {
        document.getElementById('import-file-input').click();
    },

    importProfiles(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);

                if (!data.profiles || !data.profiles.list) {
                    alert(t('importInvalidFile'));
                    return;
                }

                const merge = confirm(t('importMergeOrReplace'));

                if (merge) {
                    const existingNames = new Set(
                        Object.values(this.profiles.list).map(p => p.name.toLowerCase())
                    );

                    Object.entries(data.profiles.list).forEach(([id, profile]) => {
                        if (id === 'default') {
                            const existing = this.profiles.list['default'];
                            if (existing && profile.stats) {
                                existing.stats.answerRecords = [
                                    ...existing.stats.answerRecords,
                                    ...profile.stats.answerRecords
                                ];
                                existing.stats.quizHistory = [
                                    ...existing.stats.quizHistory,
                                    ...profile.stats.quizHistory
                                ];
                                if (profile.stats.highScores && profile.stats.highScores.timed > (existing.stats.highScores.timed || 0)) {
                                    existing.stats.highScores.timed = profile.stats.highScores.timed;
                                }
                            }
                        } else if (!existingNames.has(profile.name.toLowerCase())) {
                            const newId = 'profile_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
                            this.profiles.list[newId] = { ...profile, id: newId };
                        }
                    });
                } else {
                    this.profiles = data.profiles;
                }

                if (data.settings) {
                    this.state.selectedTables = data.settings.selectedTables || this.state.selectedTables;
                    this.settings.showTipsInQuiz = data.settings.showTipsInQuiz !== undefined
                        ? data.settings.showTipsInQuiz : this.settings.showTipsInQuiz;
                    if (data.settings.selectedOperations) {
                        this.state.selectedOperations = data.settings.selectedOperations;
                    }
                    this.saveSettings();
                }

                if (data.language) {
                    this.setLanguage(data.language);
                }

                this.saveProfiles();
                this.loadStats();
                this.updateProfileDisplay();
                this.renderProfileList();
                alert(t('importSuccess'));
            } catch (err) {
                console.error('Import failed:', err);
                alert(t('importError'));
            }
        };

        reader.readAsText(file);
        event.target.value = '';
    },

    showCreateProfileDialog() {
        const modal = document.getElementById('create-profile-modal');
        const input = document.getElementById('profile-name-input');

        // Update modal text based on current language
        document.getElementById('modal-title').textContent = t('createNewProfile');
        input.placeholder = t('profileName');

        // Clear previous input and show modal
        input.value = '';
        modal.classList.remove('hidden');

        // Focus on input
        setTimeout(() => input.focus(), 100);

        // Allow Enter key to submit
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                this.confirmCreateProfile();
            }
        };
    },

    confirmCreateProfile() {
        const input = document.getElementById('profile-name-input');
        const name = input.value.trim();

        if (name) {
            this.createProfile(name);
            this.hideCreateProfileModal();
        } else {
            alert(t('enterProfileName'));
        }
    },

    cancelCreateProfile() {
        this.hideCreateProfileModal();
    },

    hideCreateProfileModal() {
        const modal = document.getElementById('create-profile-modal');
        modal.classList.add('hidden');
    },

    loadStats() {
        const profile = this.getCurrentProfile();
        if (profile && profile.stats) {
            this.stats = profile.stats;
        } else {
            this.stats = {
                answerRecords: [],
                quizHistory: [],
                highScores: { timed: 0 },
                tipUsageCount: 0
            };
        }
        // Ensure all fields exist
        if (!this.stats.answerRecords) this.stats.answerRecords = [];
        if (!this.stats.quizHistory) this.stats.quizHistory = [];
        if (!this.stats.highScores) this.stats.highScores = { timed: 0 };
        if (this.stats.tipUsageCount === undefined) this.stats.tipUsageCount = 0;
    },

    saveStats() {
        const profile = this.getCurrentProfile();
        if (profile) {
            profile.stats = this.stats;
            this.saveProfiles();
        }
    },

    updateStats(table, correct) {
        this.stats.answerRecords.push({
            date: new Date().toISOString(),
            table: table,
            multiplier: this.state.currentQuestion ? this.state.currentQuestion.multiplier : null,
            correct: correct,
            mode: this.state.currentMode,
            operation: this.state.currentQuestion ? this.state.currentQuestion.operation : 'multiplication'
        });
        this.saveStats();
    },

    resetStats() {
        if (confirm(t('confirmReset'))) {
            this.stats = {
                answerRecords: [],
                quizHistory: [],
                highScores: { timed: 0 },
                tipUsageCount: 0
            };
            this.saveStats();
            this.displayStats(this.state.statsActivePeriod);
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
        // Sync toggle state
        const toggle = document.getElementById('quiz-tips-toggle');
        if (toggle) toggle.checked = this.settings.showTipsInQuiz;
    },

    showStats() {
        this.showScreen('stats-screen');
        this.filterStats('all');
    },

    showAbout() {
        this.showScreen('about-screen');
        document.getElementById('about-text').textContent = t('aboutText');
    },

    showTableSelection() {
        this.showScreen('table-select-screen');
        this.updateOperationToggles();
    },

    // Operation Toggle (Multiplication / Division)
    toggleOperation(op) {
        const idx = this.state.selectedOperations.indexOf(op);
        if (idx > -1) {
            if (this.state.selectedOperations.length <= 1) return;
            this.state.selectedOperations.splice(idx, 1);
        } else {
            this.state.selectedOperations.push(op);
        }
        this.updateOperationToggles();
        this.saveSettings();
    },

    updateOperationToggles() {
        document.querySelectorAll('.operation-btn').forEach(btn => {
            const op = btn.dataset.op;
            btn.classList.toggle('active', this.state.selectedOperations.includes(op));
        });
    },

    pickOperation() {
        const ops = this.state.selectedOperations;
        return ops[Math.floor(Math.random() * ops.length)];
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
        let table, multiplier;

        if (mode === 'practice') {
            if (this.state.practiceProgress >= this.state.practiceQuestions.length) {
                this.showPracticeResults();
                return null;
            }
            multiplier = Number(this.state.practiceQuestions[this.state.practiceProgress]);
            table = Number(this.state.practiceTable);
        } else {
            // Quiz or Timed mode
            if (this.state.selectedTables.length === 0) {
                alert(t('selectOneTable'));
                this.showMenu();
                return null;
            }
            table = Number(this.state.selectedTables[
                Math.floor(Math.random() * this.state.selectedTables.length)
            ]);
            multiplier = Math.floor(Math.random() * 12) + 1;
        }

        const product = table * multiplier;
        const operation = this.pickOperation();

        if (operation === 'division') {
            const divideByTable = Math.random() < 0.5;
            const divisor = divideByTable ? table : multiplier;
            const answer = divideByTable ? multiplier : table;
            return {
                question: `${product} ÷ ${divisor}`,
                answer: answer,
                table: table,
                multiplier: multiplier,
                operation: 'division'
            };
        }

        return {
            question: `${table} × ${multiplier}`,
            answer: product,
            table: table,
            multiplier: multiplier,
            operation: 'multiplication'
        };
    },

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    // Game Mode Management
    startMode(mode) {
        if (mode === 'quiz') {
            this.showScreen('quiz-count-screen');
            this.updateOperationToggles();
            return;
        }

        if (mode === 'timed') {
            this.showScreen('timed-config-screen');
            this.updateOperationToggles();
            return;
        }

        this.state.currentMode = mode;
        this.state.score = { correct: 0, total: 0 };

        if (mode === 'practice') {
            this.showScreen('practice-screen');
            document.getElementById('practice-table').textContent = this.state.practiceTable;
            this.nextQuestion('practice');
        }
    },

    startQuizWithCount(count) {
        this.settings.quizQuestionsLimit = count;
        this.state.currentMode = 'quiz';
        this.state.quizProgress = 0;
        this.state.score = { correct: 0, total: 0 };
        this.state.quizStartTime = Date.now();
        this.showScreen('quiz-screen');
        this.nextQuestion('quiz');
    },

    startTimedFromConfig() {
        this.state.currentMode = 'timed';
        this.state.score = { correct: 0, total: 0 };
        this.showScreen('timed-screen');
        this.state.timeLeft = 60;
        this.startTimer();
        this.nextQuestion('timed');
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

        // Show/hide tip button and reset tip display
        this.showTipButton(mode);

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
        // Compute and store timing data
        const endTime = Date.now();
        const totalTime = endTime - (this.state.quizStartTime || endTime);
        const questionCount = this.state.score.total || 1;
        const avgTime = Math.round(totalTime / questionCount);

        // Store quiz session in history
        this.stats.quizHistory.push({
            date: new Date().toISOString(),
            questionCount: this.settings.quizQuestionsLimit,
            correctAnswers: this.state.score.correct,
            totalTime: totalTime,
            avgTimePerQuestion: avgTime
        });
        this.saveStats();

        this.showScreen('quiz-results-screen');

        const score = `${this.state.score.correct}/${this.state.score.total}`;
        const percentage = Math.round((this.state.score.correct / this.state.score.total) * 100);

        document.getElementById('quiz-final-score').textContent = score;

        // Display time information
        const minutes = Math.floor(totalTime / 60000);
        const seconds = Math.floor((totalTime % 60000) / 1000);
        document.getElementById('quiz-time-display').textContent =
            minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
        document.getElementById('quiz-avg-time').textContent =
            `${(avgTime / 1000).toFixed(1)}s`;

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

    // Compute stats from answerRecords filtered by period
    computeStats(period) {
        const now = new Date();
        let cutoff = null;

        if (period === 'day') {
            cutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        } else if (period === 'week') {
            cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        } else if (period === 'month') {
            cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        }

        const records = cutoff
            ? this.stats.answerRecords.filter(r => new Date(r.date) >= cutoff)
            : this.stats.answerRecords;

        const totalQuestions = records.length;
        const correctAnswers = records.filter(r => r.correct).length;
        const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

        const byTable = {};
        records.forEach(r => {
            if (!byTable[r.table]) byTable[r.table] = { correct: 0, total: 0 };
            byTable[r.table].total++;
            if (r.correct) byTable[r.table].correct++;
        });

        return { totalQuestions, correctAnswers, accuracy, byTable };
    },

    // Filter stats by period (tab click handler)
    filterStats(period) {
        this.state.statsActivePeriod = period;
        document.querySelectorAll('.stats-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.period === period);
        });
        this.displayStats(period);
    },

    // Stats Display
    displayStats(period) {
        period = period || 'all';
        const computed = this.computeStats(period);

        document.getElementById('total-questions').textContent = computed.totalQuestions;
        document.getElementById('total-correct').textContent = computed.correctAnswers;
        document.getElementById('accuracy').textContent = computed.accuracy + '%';
        document.getElementById('timed-high-score').textContent = this.stats.highScores.timed || 0;
        document.getElementById('tip-usage-count').textContent = this.stats.tipUsageCount || 0;

        // Table stats
        const container = document.getElementById('table-stats');
        container.innerHTML = '';

        for (let i = 1; i <= 12; i++) {
            const tableStats = computed.byTable[i];
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

        // Render progress section
        this.renderProgress(period);
    },

    // Render progress trends
    renderProgress(period) {
        const container = document.getElementById('progress-content');
        if (!container) return;
        container.innerHTML = '';

        const now = new Date();
        let periodMs = null;
        if (period === 'day') periodMs = 24 * 60 * 60 * 1000;
        else if (period === 'week') periodMs = 7 * 24 * 60 * 60 * 1000;
        else if (period === 'month') periodMs = 30 * 24 * 60 * 60 * 1000;

        // Average time per question from quizHistory
        const quizRecords = periodMs
            ? this.stats.quizHistory.filter(q => new Date(q.date) >= new Date(now.getTime() - periodMs))
            : this.stats.quizHistory;

        if (quizRecords.length > 0) {
            const totalAvg = quizRecords.reduce((sum, q) => sum + q.avgTimePerQuestion, 0) / quizRecords.length;
            container.innerHTML += `
                <div class="progress-item">
                    <span class="progress-item-label">${t('avgTimePerQuestion')}</span>
                    <span class="progress-item-value">${(totalAvg / 1000).toFixed(1)}s</span>
                </div>`;
        }

        // Accuracy trend: compare current period vs previous period
        if (periodMs) {
            const currentCutoff = new Date(now.getTime() - periodMs);
            const prevCutoff = new Date(now.getTime() - 2 * periodMs);

            const currentRecords = this.stats.answerRecords.filter(r => new Date(r.date) >= currentCutoff);
            const prevRecords = this.stats.answerRecords.filter(r => {
                const d = new Date(r.date);
                return d >= prevCutoff && d < currentCutoff;
            });

            if (currentRecords.length > 0) {
                const currentAcc = Math.round((currentRecords.filter(r => r.correct).length / currentRecords.length) * 100);
                let trendHtml = `${currentAcc}%`;

                if (prevRecords.length > 0) {
                    const prevAcc = Math.round((prevRecords.filter(r => r.correct).length / prevRecords.length) * 100);
                    const diff = currentAcc - prevAcc;
                    if (diff > 0) {
                        trendHtml = `<span class="trend-up">${currentAcc}% (+${diff}%)</span>`;
                    } else if (diff < 0) {
                        trendHtml = `<span class="trend-down">${currentAcc}% (${diff}%)</span>`;
                    } else {
                        trendHtml = `<span class="trend-neutral">${currentAcc}% (=)</span>`;
                    }
                }

                container.innerHTML += `
                    <div class="progress-item">
                        <span class="progress-item-label">${t('accuracyTrend')}</span>
                        <span class="progress-item-value">${trendHtml}</span>
                    </div>`;
            }
        }

        if (container.innerHTML === '') {
            container.innerHTML = `<p style="text-align: center; color: #999;">${t('noDataYet')}</p>`;
        }
    },

    // Tips System
    showTipButton(mode) {
        const tipBtn = document.getElementById(`${mode}-tip-btn`);
        const tipDisplay = document.getElementById(`${mode}-tip-display`);
        if (!tipBtn) return;

        // Hide previous tip display
        if (tipDisplay) tipDisplay.classList.add('hidden');

        // Respect setting for quiz/timed modes (always available in practice)
        if ((mode === 'quiz' || mode === 'timed') && !this.settings.showTipsInQuiz) {
            tipBtn.classList.add('hidden');
            return;
        }

        const question = this.state.currentQuestion;
        if (!question) {
            tipBtn.classList.add('hidden');
            return;
        }

        const tipData = multiplicationTips[question.table];
        if (tipData && tipData.applicableMultipliers.includes(question.multiplier)) {
            tipBtn.classList.remove('hidden');
        } else {
            tipBtn.classList.add('hidden');
        }
    },

    showTip(mode) {
        const question = this.state.currentQuestion;
        if (!question) return;

        const tipData = multiplicationTips[question.table];
        if (!tipData) return;

        const tipText = tipData.getTip(question.multiplier, currentLang);
        const tipDisplay = document.getElementById(`${mode}-tip-display`);
        if (tipDisplay) {
            tipDisplay.textContent = tipText;
            tipDisplay.classList.remove('hidden');
        }

        // Track tip usage
        this.stats.tipUsageCount = (this.stats.tipUsageCount || 0) + 1;
        this.saveStats();
    },

    toggleQuizTips() {
        this.settings.showTipsInQuiz = !this.settings.showTipsInQuiz;
        document.getElementById('quiz-tips-toggle').checked = this.settings.showTipsInQuiz;
        this.saveSettings();
    },

    // Mobile Keyboard Fix
    setupMobileKeyboardFix() {
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', () => {
                const activeEl = document.activeElement;
                if (activeEl && activeEl.classList.contains('answer-input')) {
                    setTimeout(() => {
                        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 100);
                }
            });
        }

        document.querySelectorAll('.answer-input').forEach(input => {
            input.addEventListener('focus', () => {
                setTimeout(() => {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            });
        });
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
    },

    // PWA Install Prompt
    setupInstallPrompt() {
        this.deferredInstallPrompt = null;

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredInstallPrompt = e;
            this.showInstallBanner();
        });

        if (window.matchMedia('(display-mode: standalone)').matches ||
            window.navigator.standalone === true) {
            return;
        }

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            const dismissed = localStorage.getItem('installBannerDismissed');
            if (!dismissed) {
                this.showInstallBanner(true);
            }
        }
    },

    showInstallBanner(isIOS = false) {
        const dismissed = localStorage.getItem('installBannerDismissed');
        if (dismissed) return;

        const banner = document.getElementById('install-banner');
        if (!banner) return;
        const textEl = banner.querySelector('.install-banner-text');
        const installBtn = banner.querySelector('.install-banner-btn');

        if (isIOS) {
            textEl.textContent = t('installBannerIOS');
            installBtn.classList.add('hidden');
        } else {
            textEl.textContent = t('installBannerText');
            installBtn.classList.remove('hidden');
        }

        banner.classList.remove('hidden');
    },

    installPWA() {
        if (this.deferredInstallPrompt) {
            this.deferredInstallPrompt.prompt();
            this.deferredInstallPrompt.userChoice.then(() => {
                this.deferredInstallPrompt = null;
                document.getElementById('install-banner').classList.add('hidden');
            });
        }
    },

    dismissInstallBanner() {
        document.getElementById('install-banner').classList.add('hidden');
        localStorage.setItem('installBannerDismissed', 'true');
    }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
