// ============================================
// LIS Learn - App Funzionante
// ============================================

// Dati dei segni LIS
const signsData = [
    { id: 'a', name: 'A', category: 'alphabet', icon: 'fa-a', desc: 'Pugno chiuso, pollice sul lato' },
    { id: 'b', name: 'B', category: 'alphabet', icon: 'fa-b', desc: 'Mano aperta, dita verso l\'alto' },
    { id: 'c', name: 'C', category: 'alphabet', icon: 'fa-c', desc: 'Forma una C con le dita' },
    { id: 'd', name: 'D', category: 'alphabet', icon: 'fa-d', desc: 'Indice in su, altre dita chiuse' },
    { id: 'e', name: 'E', category: 'alphabet', icon: 'fa-e', desc: 'Pugno chiuso, dita toccano il pollice' },
    { id: 'f', name: 'F', category: 'alphabet', icon: 'fa-f', desc: 'Indice e pollice aperti a cerchio' },
    { id: 'g', name: 'G', category: 'alphabet', icon: 'fa-g', desc: 'Indice puntato, pollice in alto' },
    { id: 'h', name: 'H', category: 'alphabet', icon: 'fa-h', desc: 'Due dita estese in avanti' },
    { id: 'i', name: 'I', category: 'alphabet', icon: 'fa-i', desc: 'Mignolo in alto' },
    { id: 'l', name: 'L', category: 'alphabet', icon: 'fa-l', desc: 'Pollice e indice a L' },
    { id: 'm', name: 'M', category: 'alphabet', icon: 'fa-m', desc: 'Tre dita su pollice' },
    { id: 'n', name: 'N', category: 'alphabet', icon: 'fa-n', desc: 'Due dita su pollice' },
    { id: 'o', name: 'O', category: 'alphabet', icon: 'fa-o', desc: 'Forma una O' },
    { id: 'p', name: 'P', category: 'alphabet', icon: 'fa-p', desc: 'Indice puntato giÃ¹' },
    { id: 'q', name: 'Q', category: 'alphabet', icon: 'fa-q', desc: 'Indice puntato giÃ¹, pollice laterale' },
    { id: 'r', name: 'R', category: 'alphabet', icon: 'fa-r', desc: 'Indice e medio incrociati' },
    { id: 's', name: 'S', category: 'alphabet', icon: 'fa-s', desc: 'Pugno chiuso' },
    { id: 't', name: 'T', category: 'alphabet', icon: 'fa-t', desc: 'Pollice tra indice e medio' },
    { id: 'u', name: 'U', category: 'alphabet', icon: 'fa-u', desc: 'Indice e medio in su, separati' },
    { id: 'v', name: 'V', category: 'alphabet', icon: 'fa-v', desc: 'Indice e medio a V' },
    { id: 'w', name: 'W', category: 'alphabet', icon: 'fa-w', desc: 'Tre dita in su separate' },
    { id: 'x', name: 'X', category: 'alphabet', icon: 'fa-x', desc: 'Indice a uncino' },
    { id: 'y', name: 'Y', category: 'alphabet', icon: 'fa-y', desc: 'Pollice e mignolo estesi' },
    { id: 'z', name: 'Z', category: 'alphabet', icon: 'fa-z', desc: 'Indice disegna Z nell\'aria' },
    { id: 'num0', name: '0', category: 'numbers', icon: 'fa-0', desc: 'Forma una O' },
    { id: 'num1', name: '1', category: 'numbers', icon: 'fa-1', desc: 'Indice in su' },
    { id: 'num2', name: '2', category: 'numbers', icon: 'fa-2', desc: 'Indice e medio in su' },
    { id: 'num3', name: '3', category: 'numbers', icon: 'fa-3', desc: 'Tre dita in su' },
    { id: 'num4', name: '4', category: 'numbers', icon: 'fa-4', desc: 'Quattro dita in su' },
    { id: 'num5', name: '5', category: 'numbers', icon: 'fa-5', desc: 'Mano aperta' },
    { id: 'ciao', name: 'Ciao', category: 'greetings', icon: 'fa-hand', desc: 'Mano aperta dal mento all\'esterno' },
    { id: 'grazie', name: 'Grazie', category: 'greetings', icon: 'fa-heart', desc: 'Mano dalla bocca in avanti' },
    { id: 'prego', name: 'Prego', category: 'greetings', icon: 'fa-face-smile', desc: 'Mano verso il petto' },
    { id: 'si', name: 'SÃ¬', category: 'greetings', icon: 'fa-check', desc: 'Pugno che annuisce' },
    { id: 'no', name: 'No', category: 'greetings', icon: 'fa-xmark', desc: 'Indici incrociati' },
    { id: 'mamma', name: 'Mamma', category: 'family', icon: 'fa-person-dress', desc: 'Pollice sul mento' },
    { id: 'papa', name: 'PapÃ ', category: 'family', icon: 'fa-person', desc: 'Pollice sulla fronte' },
    { id: 'fratello', name: 'Fratello', category: 'family', icon: 'fa-user-group', desc: 'Due dita sul petto' },
    { id: 'sorella', name: 'Sorella', category: 'family', icon: 'fa-users', desc: 'Mano sul petto, movimento circolare' }
];

// Moduli e lezioni
const modulesData = [
    {
        id: 'mod1',
        chapter: 1,
        chapterTitle: 'Capitolo 1',
        chapterSubtitle: 'Alfabeto di base',
        name: 'Alfabeto LIS',
        description: 'Impara le lettere A-Z',
        lessons: 6,
        progress: 65,
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        icon: 'fa-a'
    },
    {
        id: 'mod2',
        chapter: 2,
        chapterTitle: 'Capitolo 2',
        chapterSubtitle: 'Saluti quotidiani',
        name: 'Saluti di Base',
        description: 'Ciao, grazie, sÃ¬ e no',
        lessons: 4,
        progress: 30,
        color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        icon: 'fa-comments'
    },
    {
        id: 'mod3',
        chapter: 3,
        chapterTitle: 'Capitolo 3',
        chapterSubtitle: 'Numeri e conteggio',
        name: 'Numeri 0-5',
        description: 'Contare in LIS',
        lessons: 3,
        progress: 0,
        color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        icon: 'fa-3'
    },
    {
        id: 'mod4',
        chapter: 4,
        chapterTitle: 'Capitolo 4',
        chapterSubtitle: 'Persone e famiglia',
        name: 'Famiglia',
        description: 'Termini familiari',
        lessons: 3,
        progress: 0,
        color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        icon: 'fa-users'
    }
];

// Lezioni dettagliate
const lessonsData = {
    'mod1': [
        { id: 'l1', title: 'Lettere A-E', duration: '2 min', xp: 40, completed: true, signs: ['a', 'b', 'c', 'd', 'e'] },
        { id: 'l2', title: 'Lettere F-J', duration: '2 min', xp: 40, completed: true, signs: ['f', 'g', 'h', 'i', 'l'] },
        { id: 'l2q', title: 'Ripasso A-J', duration: '4 min', xp: 25, completed: false, isTest: true, quiz: [
            { question: 'Quale lettera si fa con mano aperta e dita verso l\'alto?', options: ['B', 'F', 'L'], correct: 0, icon: 'fa-b' },
            { question: 'Quale segno usa il mignolo in alto?', options: ['I', 'C', 'T'], correct: 0, icon: 'fa-i' },
            { question: 'Quale lettera forma una L con pollice e indice?', options: ['D', 'L', 'R'], correct: 1, icon: 'fa-l' }
        ] },
        { id: 'l3', title: 'Lettere K-O', duration: '2 min', xp: 40, completed: false, current: true, signs: ['m', 'n', 'o', 'p', 'q'] },
        { id: 'l4', title: 'Lettere P-T', duration: '2 min', xp: 40, completed: false, signs: ['r', 's', 't', 'u', 'v'] },
        { id: 'l4q', title: 'Ripasso K-T', duration: '4 min', xp: 25, completed: false, isTest: true, quiz: [
            { question: 'Quale lettera si fa con tre dita sul pollice?', options: ['M', 'N', 'S'], correct: 0, icon: 'fa-m' },
            { question: 'Quale lettera è un pugno chiuso semplice?', options: ['S', 'Q', 'U'], correct: 0, icon: 'fa-s' },
            { question: 'Quale lettera usa pollice tra indice e medio?', options: ['R', 'T', 'V'], correct: 1, icon: 'fa-t' }
        ] },
        { id: 'l5', title: 'Lettere U-Z', duration: '2 min', xp: 40, completed: false, signs: ['w', 'x', 'y', 'z'] },
        { id: 'l6', title: 'Test Finale', duration: '4 min', xp: 100, completed: false, isTest: true, quiz: [
            { question: 'Quale lettera mostra tre dita in su separate?', options: ['W', 'V', 'Y'], correct: 0, icon: 'fa-w' },
            { question: 'Quale lettera ha l\'indice a uncino?', options: ['X', 'Z', 'G'], correct: 0, icon: 'fa-x' },
            { question: 'Quale lettera estende pollice e mignolo?', options: ['Y', 'L', 'O'], correct: 0, icon: 'fa-y' },
            { question: 'Quale lettera disegna una Z nell\'aria?', options: ['N', 'Z', 'C'], correct: 1, icon: 'fa-z' }
        ] }
    ],
    'mod2': [
        { id: 'l7', title: 'Ciao e Arrivederci', duration: '1 min', xp: 30, completed: true, signs: ['ciao'] },
        { id: 'l8', title: 'Grazie e Prego', duration: '1 min', xp: 25, completed: false, current: true, signs: ['grazie', 'prego'] },
        { id: 'l8q', title: 'Ripasso saluti', duration: '2 min', xp: 20, completed: false, isTest: true, quiz: [
            { question: 'Quale gesto significa "Ciao"?', options: ['Mano dal mento', 'Pollice sulla fronte', 'Due dita sul petto'], correct: 0, icon: 'fa-hand' },
            { question: 'Quale gesto significa "Grazie"?', options: ['Dalla bocca in avanti', 'Dal petto verso fuori', 'Indice in alto'], correct: 0, icon: 'fa-heart' }
        ] },
        { id: 'l9', title: 'SÃ¬ e No', duration: '1 min', xp: 25, completed: false, signs: ['si', 'no'] },
        { id: 'l10', title: 'Come stai?', duration: '1 min', xp: 40, completed: false, signs: ['ciao', 'grazie', 'si', 'no'] },
        { id: 'l10q', title: 'Test Finale Saluti', duration: '2 min', xp: 50, completed: false, isTest: true, quiz: [
            { question: 'Quale segno indica "Sì"?', options: ['Pugno che annuisce', 'Indici incrociati', 'Mano dal mento'], correct: 0, icon: 'fa-check' },
            { question: 'Quale segno indica "No"?', options: ['Pugno chiuso', 'Indici incrociati', 'Pollice sul mento'], correct: 1, icon: 'fa-xmark' },
            { question: 'Quale coppia appartiene ai saluti di base?', options: ['Mamma e Papà', 'Grazie e Prego', 'Zero e Uno'], correct: 1, icon: 'fa-comments' }
        ] }
    ],
    'mod3': [
        { id: 'l11', title: 'Numeri 0-2', duration: '2 min', xp: 25, completed: false, signs: ['num0', 'num1', 'num2'] },
        { id: 'l12', title: 'Numeri 3-5', duration: '2 min', xp: 25, completed: false, signs: ['num3', 'num4', 'num5'] },
        { id: 'l13', title: 'Test Numeri', duration: '4 min', xp: 50, completed: false, isTest: true, quiz: [
            { question: 'Quale numero forma una O?', options: ['0', '3', '5'], correct: 0, icon: 'fa-0' },
            { question: 'Quale numero usa indice e medio in su?', options: ['1', '2', '4'], correct: 1, icon: 'fa-2' },
            { question: 'Quale numero mostra mano aperta?', options: ['3', '4', '5'], correct: 2, icon: 'fa-5' }
        ] }
    ],
    'mod4': [
        { id: 'l14', title: 'Famiglia I', duration: '2 min', xp: 30, completed: false, signs: ['mamma', 'papa'] },
        { id: 'l15', title: 'Famiglia II', duration: '2 min', xp: 30, completed: false, signs: ['fratello', 'sorella'] },
        { id: 'l16', title: 'Test Famiglia', duration: '4 min', xp: 50, completed: false, isTest: true, quiz: [
            { question: 'Quale gesto indica "Mamma"?', options: ['Pollice sul mento', 'Pollice sulla fronte', 'Due dita sul petto'], correct: 0, icon: 'fa-person-dress' },
            { question: 'Quale gesto indica "Papà"?', options: ['Pollice sulla fronte', 'Mano sul petto', 'Cerchio con le dita'], correct: 0, icon: 'fa-person' },
            { question: 'Quale coppia appartiene al modulo famiglia?', options: ['Fratello e Sorella', 'Ciao e Grazie', 'Uno e Due'], correct: 0, icon: 'fa-users' }
        ] }
    ]
};

// Quiz questions
const quizSets = {
    'multiple-choice': [
        { question: 'Quale segno significa "Ciao"?', options: ['Pollice sul mento', 'Mano dal mento', 'Pugno chiuso'], correct: 1, sign: 'fa-hand' },
        { question: 'Come si fa la lettera B?', options: ['Pugno', 'Mano aperta in alto', 'Due dita'], correct: 1, sign: 'fa-b' },
        { question: 'Il numero 1 come si forma?', options: ['Mignolo', 'Indice in su', 'Pollice'], correct: 1, sign: 'fa-1' },
        { question: 'Quale segno corrisponde alla lettera L?', options: ['Cerchio', 'Angolo retto', 'Linea retta'], correct: 1, sign: 'fa-l' },
        { question: 'Come si dice "Grazie"?', options: ['Dalla bocca', 'Dalla fronte', 'Dal petto'], correct: 0, sign: 'fa-heart' }
    ],
    'memory': [
        { question: 'Quale coppia devi ricordare per "Mamma"?', options: ['Pollice sul mento', 'Indice in alto', 'Mano aperta'], correct: 0, sign: 'fa-person-dress' },
        { question: 'Quale gesto richiama "Papà"?', options: ['Pollice sulla fronte', 'Due dita sul petto', 'Cerchio con la mano'], correct: 0, sign: 'fa-person' },
        { question: 'Quale segno ricordi per "No"?', options: ['Indici incrociati', 'Pugno che annuisce', 'Mano dal mento'], correct: 0, sign: 'fa-xmark' },
        { question: 'Quale combinazione rappresenta il numero 3?', options: ['Tre dita in su', 'Pugno chiuso', 'Indice e medio'], correct: 0, sign: 'fa-3' },
        { question: 'Quale lettera usa indice e pollice aperti a cerchio?', options: ['F', 'L', 'Y'], correct: 0, sign: 'fa-f' }
    ],
    'spelling': [
        { question: 'Per iniziare a compitare "LIS", quale lettera viene per prima?', options: ['L', 'I', 'S'], correct: 0, sign: 'fa-l' },
        { question: 'Nella parola "CIAO", quale lettera viene dopo la C?', options: ['A', 'I', 'O'], correct: 1, sign: 'fa-i' },
        { question: 'Quale lettera completa la sequenza A, B, C, _ ?', options: ['E', 'D', 'F'], correct: 1, sign: 'fa-d' },
        { question: 'Se stai compitando "UNO", quale lettera viene al centro?', options: ['N', 'U', 'O'], correct: 0, sign: 'fa-n' },
        { question: 'Quale ultima lettera chiude la parola "GRAZIE"?', options: ['A', 'E', 'I'], correct: 1, sign: 'fa-e' }
    ]
};

// Stato app
let currentCategory = 'all';
let currentLesson = null;
let currentStep = 0;
let quizIndex = 0;
let quizScore = 0;
let currentQuizType = 'multiple-choice';
let userXP = 0;
let completedLessons = [];
let currentLessonModule = null;
let currentLessonIndex = 0;
let resizeTimer = null;
let currentLessonAnswers = [];
let sectionTransitionTimer = null;
let pathRevealObserver = null;
let pathHighlightScrollHandler = null;
let activeCompletedPathNode = null;
let audioContext = null;
let onboardingDraft = null;
let onboardingStepIndex = 0;
let onboardingPositionTimer = null;
let totalAppTimeMs = 0;
let appSessionStartedAt = null;
let appTimeInterval = null;
let profileSettings = {
    name: 'Studente',
    avatarStyle: 'green',
    soundEnabled: true
};
let profileDraft = null;

// Carica dati salvati o inizializza
function loadUserData() {
    const saved = localStorage.getItem('lisLearnData');
    const savedMemberYear = localStorage.getItem('lisLearnMemberSince');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            userXP = data.xp || 0;
            completedLessons = data.completedLessons || [];
            currentLessonModule = data.currentLessonModule || null;
            currentLessonIndex = data.currentLessonIndex || 0;
            totalAppTimeMs = data.totalAppTimeMs || 0;
        } catch (error) {
            userXP = 0;
            completedLessons = [];
            currentLessonModule = 'mod1';
            currentLessonIndex = 0;
            totalAppTimeMs = 0;
        }
    } else {
        currentLessonModule = 'mod1';
        currentLessonIndex = 0;
        totalAppTimeMs = 0;
    }
    if (!savedMemberYear) {
        localStorage.setItem('lisLearnMemberSince', String(new Date().getFullYear()));
    }
    updateUI();
}

function loadProfileSettings() {
    var savedProfile = localStorage.getItem('lisLearnProfile');
    if (savedProfile) {
        try {
            var parsed = JSON.parse(savedProfile);
            profileSettings.name = parsed.name || profileSettings.name;
            profileSettings.avatarStyle = parsed.avatarStyle || profileSettings.avatarStyle;
            profileSettings.soundEnabled = parsed.soundEnabled !== false;
        } catch (error) {}
    } else {
        localStorage.setItem('lisLearnProfile', JSON.stringify(profileSettings));
    }
}

function needsOnboarding() {
    return localStorage.getItem('duolisOnboardingDone') !== 'true';
}

function resetProfileSettingsToDefault() {
    profileSettings = {
        name: 'Studente',
        avatarStyle: 'green',
        soundEnabled: true
    };
}

function saveUserData() {
    const data = {
        xp: userXP,
        completedLessons: completedLessons,
        currentLessonModule: currentLessonModule,
        currentLessonIndex: currentLessonIndex,
        totalAppTimeMs: totalAppTimeMs
    };
    localStorage.setItem('lisLearnData', JSON.stringify(data));
}

function updateUI() {
    document.getElementById('points-count').textContent = userXP.toLocaleString();
    renderLeaderboard();
    updateStats();
    updateMemberSince();
    applyProfileSettings();
}

function updateMemberSince() {
    var memberSince = document.getElementById('member-since');
    if (!memberSince) return;
    var year = localStorage.getItem('lisLearnMemberSince') || String(new Date().getFullYear());
    memberSince.textContent = 'Membro dal ' + year;
}

function getCurrentTrackedAppTimeMs() {
    if (!appSessionStartedAt) return totalAppTimeMs;
    return totalAppTimeMs + (Date.now() - appSessionStartedAt);
}

function formatTrackedTime(totalMs) {
    var totalMinutes = Math.max(0, Math.floor(totalMs / 60000));
    if (totalMinutes >= 60) {
        return Math.floor(totalMinutes / 60) + 'h ' + (totalMinutes % 60) + 'm';
    }
    return totalMinutes + ' min';
}

function pauseAppTimeTracking() {
    if (appSessionStartedAt) {
        totalAppTimeMs += Date.now() - appSessionStartedAt;
        appSessionStartedAt = null;
        saveUserData();
    }
    if (appTimeInterval) {
        clearInterval(appTimeInterval);
        appTimeInterval = null;
    }
    updateStats();
}

function startAppTimeTracking() {
    if (document.hidden || appSessionStartedAt) return;
    appSessionStartedAt = Date.now();
    if (appTimeInterval) {
        clearInterval(appTimeInterval);
    }
    appTimeInterval = setInterval(function() {
        updateStats();
    }, 30000);
}

function registerAppTimeTracking() {
    startAppTimeTracking();
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAppTimeTracking();
        } else {
            startAppTimeTracking();
        }
    });
    window.addEventListener('pagehide', pauseAppTimeTracking);
    window.addEventListener('beforeunload', pauseAppTimeTracking);
}

function registerPWA() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js').catch(function(error) {
            console.warn('Service worker non registrato:', error);
        });
    });
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('app').classList.remove('hidden');
            if (needsOnboarding()) {
                openOnboarding();
            } else {
                centerCurrentPathNode(false);
            }
        }, 500);
    }, 2000);

    loadProfileSettings();
    loadUserData();
    loadUserName();
    renderLearningPath();
    renderDictionary();
    renderLeaderboard();
    updateStats();
    registerAppTimeTracking();
    registerPWA();
});

window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        var homeSection = document.getElementById('home');
        if (homeSection && homeSection.classList.contains('active')) {
            renderLearningPath();
            centerCurrentPathNode(false);
        }
        if (!document.getElementById('onboarding-screen').classList.contains('hidden')) {
            scheduleOnboardingHighlight();
        }
    }, 120);
});

window.addEventListener('scroll', function() {
    var onboarding = document.getElementById('onboarding-screen');
    if (onboarding && !onboarding.classList.contains('hidden')) {
        scheduleOnboardingHighlight();
    }
}, { passive: true });

// Navigazione
function toggleMenu() {
    playUISound('tap');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function prepareSection(sectionId) {
    document.body.classList.toggle('lesson-player-open', sectionId === 'lesson-player');
    if (sectionId === 'home') {
        renderLearningPath();
    }
    if (sectionId === 'lessons') {
        renderModules();
        renderLessonsList();
    }
    if (sectionId === 'progress') {
        updateStats();
    }
    if (sectionId === 'profile-customize') {
        populateProfileEditor();
    }
}

function finalizeSection(sectionId) {
    if (sectionId === 'home') {
        centerCurrentPathNode(false);
        return;
    }
    window.scrollTo(0, 0);
}

function activateSection(target, sectionId, sections) {
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active', 'section-leaving', 'section-entering', 'section-entering-active');
    }
    document.body.classList.toggle('lesson-player-open', sectionId === 'lesson-player');
    target.classList.add('active');
    if (typeof target.animate === 'function') {
        target.animate([
            { opacity: 0, transform: 'translateY(20px) scale(1.04)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' }
        ], {
            duration: 280,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'both'
        });
    }
    finalizeSection(sectionId);
}

function setupPathScrollAnimations() {
    var animatedItems = document.querySelectorAll('.chapter-card, .path-node');
    if (!animatedItems.length) return;

    if (pathRevealObserver) {
        pathRevealObserver.disconnect();
    }

    if (typeof window.IntersectionObserver !== 'function') {
        for (var i = 0; i < animatedItems.length; i++) {
            animatedItems[i].classList.add('path-visible');
        }
        return;
    }

    pathRevealObserver = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.remove('path-exiting');
                entries[i].target.classList.add('path-visible');
            } else {
                if (entries[i].target.classList.contains('path-visible')) {
                    entries[i].target.classList.add('path-exiting');
                    setTimeout((function(target) {
                        return function() {
                            target.classList.remove('path-visible', 'path-exiting');
                        };
                    })(entries[i].target), 120);
                } else {
                    entries[i].target.classList.remove('path-visible', 'path-exiting');
                }
            }
        }
    }, {
        root: null,
        threshold: 0.28,
        rootMargin: '-4% 0px -14% 0px'
    });

    for (var j = 0; j < animatedItems.length; j++) {
        pathRevealObserver.observe(animatedItems[j]);
    }

    setupCompletedNodeHighlight();
}

function updateCompletedNodeHighlight() {
    var completedNodes = document.querySelectorAll('.path-node.completed');
    for (var i = 0; i < completedNodes.length; i++) {
        completedNodes[i].classList.remove('path-highlighted', 'path-fading');
    }
    activeCompletedPathNode = null;
}

function setupCompletedNodeHighlight() {
    if (pathHighlightScrollHandler) {
        window.removeEventListener('scroll', pathHighlightScrollHandler);
    }

    pathHighlightScrollHandler = function() {
        updateCompletedNodeHighlight();
    };

    window.addEventListener('scroll', pathHighlightScrollHandler, { passive: true });
    updateCompletedNodeHighlight();
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    var target = document.getElementById(sectionId);
    var current = document.querySelector('.section.active');
    if (!target) return;

    var sectionLinks = document.querySelectorAll('.nav-item, .menu-item');
    for (var j = 0; j < sectionLinks.length; j++) {
        sectionLinks[j].classList.remove('active');
        var handler = sectionLinks[j].getAttribute('onclick') || '';
        if (handler.indexOf("showSection('" + sectionId + "')") !== -1) {
            sectionLinks[j].classList.add('active');
        }
    }
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');

    if (current === target) {
        prepareSection(sectionId);
        finalizeSection(sectionId);
        return;
    }

    clearTimeout(sectionTransitionTimer);
    prepareSection(sectionId);

    if (current && typeof current.animate === 'function') {
        current.animate([
            { opacity: 1, transform: 'translateY(0) scale(1)' },
            { opacity: 0, transform: 'translateY(12px) scale(0.95)' }
        ], {
            duration: 180,
            easing: 'cubic-bezier(0.4, 0, 1, 1)',
            fill: 'forwards'
        });
    }

    sectionTransitionTimer = setTimeout(function() {
        activateSection(target, sectionId, sections);
    }, current ? 170 : 0);
}

function getAllLessons() {
    var allLessons = [];
    for (var modId in lessonsData) {
        var mod = modulesData.find(function(m) { return m.id === modId; });
        var lessons = lessonsData[modId];
        for (var i = 0; i < lessons.length; i++) {
            allLessons.push({
                mod: mod,
                lesson: lessons[i],
                modId: modId,
                idx: i
            });
        }
    }
    return allLessons;
}
function getPathMetrics() {
    var isMobile = window.innerWidth <= 767;
    return {
        width: isMobile ? 210 : 260,
        stepY: isMobile ? 126 : 138,
        startY: isMobile ? 54 : 62,
        amplitude: isMobile ? 46 : 72,
        nodeOffset: isMobile ? 44 : 72,
        chapterGap: isMobile ? 118 : 134
    };
}

function buildPathLinesMarkup(allLessons, progressPercent) {
    var metrics = getPathMetrics();
    var width = metrics.width;
    var centerX = width / 2;
    var chapterOffset = metrics.chapterGap;
    var points = [];
    var d = '';

    for (var i = 0; i < allLessons.length; i++) {
        if (i > 0 && allLessons[i].modId !== allLessons[i - 1].modId) {
            chapterOffset += metrics.chapterGap;
        }

        var y = metrics.startY + (i * metrics.stepY) + chapterOffset;
        var direction = i % 2 === 0 ? -1 : 1;
        var x = centerX + (direction * metrics.amplitude);
        points.push({ x: x, y: y });
    }

    for (var j = 0; j < points.length; j++) {
        var point = points[j];
        if (j === 0) {
            d += 'M ' + point.x + ' ' + point.y + ' ';
        }
        if (j < points.length - 1) {
            var nextPoint = points[j + 1];
            var controlY = point.y + ((nextPoint.y - point.y) / 2);
            d += 'C ' + point.x + ' ' + controlY + ', ' + nextPoint.x + ' ' + controlY + ', ' + nextPoint.x + ' ' + nextPoint.y + ' ';
        }
    }

    var totalHeight = points.length ? points[points.length - 1].y + 90 : metrics.startY + metrics.chapterGap;

    return '<svg viewBox="0 0 ' + width + ' ' + totalHeight + '" preserveAspectRatio="none">' +
        '<path class="path-track" d="' + d + '" pathLength="100"></path>' +
        '<path class="path-progress" d="' + d + '" pathLength="100" style="stroke-dasharray: ' + progressPercent + ' 100;"></path>' +
        '</svg>';
}
function renderLearningPath() {
    var container = document.getElementById('learning-path-container');
    if (!container) return;
    var html = '';
    var allLessons = getAllLessons();
    var currentLessonGlobal = findCurrentLesson();
    var pathLines = document.getElementById('path-lines');
    var metrics = getPathMetrics();
    var progressPercent = 100;

    if (allLessons.length > 1) {
        if (currentLessonGlobal) {
            var currentIndex = allLessons.findIndex(function(item) {
                return item.modId === currentLessonGlobal.modId && item.idx === currentLessonGlobal.idx;
            });
            progressPercent = currentIndex <= 0 ? 0 : (currentIndex / (allLessons.length - 1)) * 100;
        }
    } else if (currentLessonGlobal) {
        progressPercent = 0;
    }

    if (pathLines) {
        pathLines.innerHTML = buildPathLinesMarkup(allLessons, progressPercent);
    }
    var lastModuleId = null;
    for (var i = 0; i < allLessons.length; i++) {
        var item = allLessons[i];
        if (item.modId !== lastModuleId) {
            html += '<div class="chapter-card">';
            html += '<div class="chapter-card-copy">';
            html += '<span class="chapter-kicker">Sezione ' + item.mod.chapter + '</span>';
            html += '<h3>' + item.mod.chapterTitle + '</h3>';
            html += '<p>' + item.mod.chapterSubtitle + '</p>';
            html += '</div>';
            html += '<div class="chapter-card-badge"><i class="fas ' + item.mod.icon + '"></i></div>';
            html += '</div>';
            lastModuleId = item.modId;
        }
        var isCompleted = completedLessons.indexOf(item.lesson.id) !== -1;
        var isCurrent = currentLessonGlobal && currentLessonGlobal.modId === item.modId && currentLessonGlobal.idx === item.idx;
        var isLocked = !isCompleted && !isCurrent;
        var xOffset = i % 2 === 0 ? -metrics.nodeOffset : metrics.nodeOffset;
        var nodeClass = isCompleted ? 'completed' : isCurrent ? 'current' : 'locked';
        html += '<div class="path-node ' + nodeClass + '" data-node-index="' + i + '" style="--path-node-transform: translateX(' + xOffset + 'px);">';
        html += '<button class="node-btn" aria-label="' + item.lesson.title + '" ' + (isLocked ? 'disabled' : 'onclick="startLesson(\'' + item.modId + '\', ' + item.idx + ')"') + '>';
        html += '<i class="fas ' + (isCompleted ? 'fa-check' : isCurrent ? 'fa-play' : 'fa-lock') + '"></i>';
        if (isCompleted) {
            html += '<div class="crown-badge"></div>';
        }
        html += '</button>';
        html += '<div class="node-label">' + item.lesson.title + '</div>';
        html += '<div class="node-xp">+' + item.lesson.xp + ' XP</div>';
        html += '</div>';
    }
    container.innerHTML = html;
    setupPathScrollAnimations();
}
function findCurrentLesson() {
    // Trova la prima lezione non completata
    for (var modId in lessonsData) {
        var mod = modulesData.find(function(m) { return m.id === modId; });
        var lessons = lessonsData[modId];
        for (var i = 0; i < lessons.length; i++) {
            if (completedLessons.indexOf(lessons[i].id) === -1) {
                return { modId: modId, idx: i, mod: mod, lesson: lessons[i] };
            }
        }
    }
    return null; // Tutte completate
}

function centerCurrentPathNode(smooth) {
    var currentNode = document.querySelector('.path-node.current');
    if (!currentNode) return;

    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
        var homeSection = document.getElementById('home');
        if (!homeSection || !homeSection.classList.contains('active')) return;

        var rect = currentNode.getBoundingClientRect();
        var absoluteTop = rect.top + window.scrollY;
        var targetTop = Math.max(0, absoluteTop - ((window.innerHeight - rect.height) / 2) - 20);

        window.scrollTo({
            top: targetTop,
            behavior: smooth ? 'smooth' : 'auto'
        });
        });
    });
}

// Render lista lezioni
function renderLessonsList() {
    var container = document.getElementById('lessons-list');
    if (!container) return;

    var html = '';
    var currentGlobal = findCurrentLesson();

    for (var modId in lessonsData) {
        var module = modulesData.find(function(m) { return m.id === modId; });
        if (!module) continue;

        var moduleLessons = lessonsData[modId] || [];
        var completedCount = moduleLessons.filter(function(lessonItem) {
            return completedLessons.indexOf(lessonItem.id) !== -1;
        }).length;
        var modulePercent = moduleLessons.length ? Math.round((completedCount / moduleLessons.length) * 100) : 0;
        var moduleStatus = completedCount === moduleLessons.length ? 'Completato' : currentGlobal && currentGlobal.modId === modId ? 'In corso' : 'Da iniziare';

        html += '<div class="module-lesson-card">';
        html += '<div class="module-header" onclick="toggleLessons(this)">';
        html += '<div class="module-info">';
        html += '<div class="module-number">' + modId.replace('mod', '') + '</div>';
        html += '<div class="module-details">';
        html += '<h4>' + module.name + '</h4>';
        html += '<span>' + moduleLessons.length + ' lezioni · ' + modulePercent + '%</span>';
        html += '</div></div>';
        html += '<div class="module-status-pill ' + (modulePercent === 100 ? 'done' : currentGlobal && currentGlobal.modId === modId ? 'current' : '') + '">' + moduleStatus + '</div>';
        html += '<i class="fas fa-chevron-down"></i>';
        html += '</div>';

        html += '<div class="lessons-container" style="display: none;">';
        html += '<div class="module-progress-inline"><div class="module-progress-inline-fill" style="width:' + modulePercent + '%"></div></div>';
        var lessons = lessonsData[modId];
        for (var i = 0; i < lessons.length; i++) {
            var lesson = lessons[i];
            // Determina lo stato reale dalla lista completedLessons
            var isCompleted = completedLessons.indexOf(lesson.id) !== -1;
            var isCurrent = (currentLessonModule === modId && currentLessonIndex === i) || (!isCompleted && i === 0 && modId === 'mod1');
            var isLocked = !isCompleted && !isCurrent;

            // Controlla se il modulo precedente Ã¨ completato
            if (modId !== 'mod1') {
                var prevModId = 'mod' + (parseInt(modId.replace('mod', '')) - 1);
                var prevLessons = lessonsData[prevModId] || [];
                var prevCompleted = prevLessons.some(function(l) { return completedLessons.indexOf(l.id) !== -1; });
                if (!prevCompleted && modId !== currentLessonModule) {
                    isLocked = true;
                    isCurrent = false;
                }
            }

            var status = isCompleted ? 'completed' : isCurrent ? 'current' : 'locked';
            var statusIcon = isCompleted ? 'fa-check' : isCurrent ? 'fa-play' : 'fa-lock';
            var statusLabel = isCompleted ? 'Fatta' : isCurrent ? 'Attuale' : 'Bloccata';

            html += '<div class="lesson-item ' + status + '" ' + (status !== 'locked' ? 'onclick="startLesson(\'' + modId + '\', ' + i + ')"' : '') + '>';
            html += '<div class="lesson-status"><i class="fas ' + statusIcon + '"></i></div>';
            html += '<div class="lesson-info">';
            html += '<span class="lesson-number">Lezione ' + (i + 1) + '</span>';
            html += '<h5>' + lesson.title + '</h5>';
            html += '<div class="lesson-meta"><span>' + lesson.duration + '</span><span>+' + lesson.xp + ' XP</span><span>' + statusLabel + '</span></div>';
            html += '</div>';
            if (status !== 'locked') {
                html += '<div class="lesson-action"><i class="fas fa-chevron-right"></i></div>';
            }
            html += '</div>';
        }
        html += '</div></div>';
    }

    container.innerHTML = html;
}

function toggleLessons(header) {
    var container = header.nextElementSibling;
    var chevron = header.querySelector('.fa-chevron-down');

    if (container.style.display === 'none') {
        container.style.display = 'block';
        chevron.style.transform = 'rotate(180deg)';
    } else {
        container.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
    }
}

function openModule(modId) {
    showSection('lessons');
    setTimeout(function() {
        var headers = document.querySelectorAll('.module-header');
        for (var i = 0; i < headers.length; i++) {
            var container = headers[i].nextElementSibling;
            if (container.innerHTML.includes(modId) || i === parseInt(modId.replace('mod', '')) - 1) {
                if (container.style.display === 'none') {
                    toggleLessons(headers[i]);
                }
                headers[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                break;
            }
        }
    }, 100);
}

// Lezione
function startLesson(modId, lessonIdx) {
    var lessons = lessonsData[modId];
    if (!lessons || !lessons[lessonIdx]) return;

    currentLesson = { mod: modId, idx: lessonIdx };
    playUISound('start');
    currentStep = 0;
    currentLessonAnswers = [];
    currentLessonModule = modId;
    currentLessonIndex = lessonIdx;
    saveUserData();

    var lesson = lessons[lessonIdx];
    var totalSteps = getTotalSteps(lesson);

    document.getElementById('lesson-progress-text').textContent = '1/' + totalSteps;
    document.getElementById('lesson-progress-fill').style.width = '0%';

    // Nascondi bottom-nav
    var bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.style.display = 'none';

    showSection('lesson-player');
    renderLessonStep();
}

function getTotalSteps(lesson) {
    if (lesson.quiz && lesson.quiz.length) {
        return lesson.quiz.length + 1; // quiz + completamento
    }
    var signs = lesson.signs || [];
    return signs.length + 1; // segni + completamento
}

function isLessonQuestionAnswered(questionIndex) {
    return typeof currentLessonAnswers[questionIndex] === 'number';
}

function getLessonMistakes(lesson) {
    var mistakes = 0;
    if (!lesson || !lesson.quiz || !lesson.quiz.length) return 0;
    for (var i = 0; i < lesson.quiz.length; i++) {
        if (currentLessonAnswers[i] !== lesson.quiz[i].correct) {
            mistakes++;
        }
    }
    return mistakes;
}

function hasPassedLessonTest(lesson) {
    if (!lesson || !lesson.isTest || !lesson.quiz || !lesson.quiz.length) return true;
    return getLessonMistakes(lesson) <= 1;
}

function answerLessonQuestion(selectedIndex) {
    var lessons = lessonsData[currentLesson.mod];
    var lesson = lessons[currentLesson.idx];
    if (!lesson.quiz || currentStep >= getTotalSteps(lesson) - 1) return;

    currentLessonAnswers[currentStep] = selectedIndex;
    var lesson = lessonsData[currentLesson.mod][currentLesson.idx];
    playUISound(selectedIndex === lesson.quiz[currentStep].correct ? 'correct' : 'wrong');
    renderLessonStep();
}

function renderLessonStep() {
    var lessons = lessonsData[currentLesson.mod];
    var lesson = lessons[currentLesson.idx];
    var moduleMeta = modulesData.find(function(module) { return module.id === currentLesson.mod; });
    var signs = lesson.signs || [];
    var totalSteps = getTotalSteps(lesson);
    var sectionLabel = moduleMeta ? (moduleMeta.chapterTitle + ' • ' + moduleMeta.name) : 'Lezione DuoLIS';

    document.getElementById('lesson-progress-fill').style.width = ((currentStep / (totalSteps - 1)) * 100) + '%';
    document.getElementById('lesson-progress-text').textContent = (currentStep + 1) + '/' + totalSteps;

    var container = document.getElementById('lesson-content');
    var html = '';

    if (lesson.quiz && currentStep < totalSteps - 1) {
        var questionIndex = currentStep;
        var question = lesson.quiz[questionIndex];
        var selectedAnswer = currentLessonAnswers[questionIndex];

        html = '<div class="lesson-step lesson-quiz-step">';
        html += '<div class="lesson-shell">';
        html += '<div class="lesson-kicker-row"><span class="lesson-kicker">' + sectionLabel + '</span><span class="lesson-chip">+ ' + lesson.xp + ' XP</span></div>';
        html += '<div class="quiz-type-badge">' + (lesson.isTest ? 'Test finale' : 'Ripasso') + '</div>';
        html += '<h3>' + question.question + '</h3>';
        html += '<p class="lesson-support">' + (lesson.isTest ? 'Hai al massimo un errore: poi il test riparte.' : 'Rispondi e consolida i segni appena studiati.') + '</p>';
        html += '<div class="sign-demonstration lesson-stage-card"><i class="fas ' + (question.icon || 'fa-circle-question') + ' sign-icon"></i><div class="sign-name-display">Domanda ' + (currentStep + 1) + ' di ' + lesson.quiz.length + '</div></div>';
        html += '<div class="quiz-options">';

        for (var q = 0; q < question.options.length; q++) {
            var optionClass = 'quiz-option';
            if (typeof selectedAnswer === 'number') {
                if (q === question.correct) optionClass += ' correct';
                else if (q === selectedAnswer) optionClass += ' wrong';
            }
            html += '<button class="' + optionClass + '" onclick="answerLessonQuestion(' + q + ')" ' + (typeof selectedAnswer === 'number' ? 'disabled' : '') + '>' + question.options[q] + '</button>';
        }

        html += '</div></div></div>';
    }
    // Step intermedi: mostra i segni
    else if (currentStep < totalSteps - 1) {
        var signId = signs[currentStep];
        var sign = signsData.find(function(s) { return s.id === signId; });
        if (sign) {
            html = '<div class="lesson-step lesson-theory-step"><div class="lesson-shell">';
            html += '<div class="lesson-kicker-row"><span class="lesson-kicker">' + sectionLabel + '</span></div>';
            html += '<h3>' + sign.name + '</h3>';
            html += '<p class="lesson-support">Osserva il segno, memorizza la forma della mano e poi continua con il prossimo passaggio.</p>';
            html += '<div class="sign-demonstration lesson-stage-card"><i class="fas ' + sign.icon + ' sign-icon"></i><div class="sign-name-display">' + sign.name + '</div></div>';
            html += '<div class="sign-instructions lesson-note-card"><h4><i class="fas fa-hand-point-up"></i> Come si esegue</h4><p>' + sign.desc + '</p></div></div></div>';
        } else {
            html = '<div class="lesson-step"><h3>Step ' + currentStep + '</h3><p>Contenuto della lezione...</p></div>';
        }
    }
    // Step finale: completamento
    else {
        var resultText = '';
        var passedTest = hasPassedLessonTest(lesson);
        if (lesson.quiz && lesson.quiz.length) {
            var correctAnswers = 0;
            for (var a = 0; a < lesson.quiz.length; a++) {
                if (currentLessonAnswers[a] === lesson.quiz[a].correct) {
                    correctAnswers++;
                }
            }
            if (lesson.isTest && !passedTest) {
                resultText = '<p style="margin-top: 0.75rem; color: var(--danger); font-weight: 700;">Hai fatto piu di un errore. Devi rifare il test.</p>';
                resultText += '<p style="margin-top: 0.45rem; color: var(--text-secondary);">Risposte corrette: ' + correctAnswers + ' su ' + lesson.quiz.length + '.</p>';
            } else {
                resultText = '<p style="margin-top: 0.75rem; color: var(--text-secondary);">Hai risposto correttamente a ' + correctAnswers + ' domande su ' + lesson.quiz.length + '.</p>';
            }
        }
        html = '<div class="lesson-step lesson-complete-step"><div class="lesson-shell lesson-complete-shell">';
        html += '<div class="lesson-kicker-row"><span class="lesson-kicker">' + sectionLabel + '</span><span class="lesson-chip">' + lesson.title + '</span></div>';
        html += '<div class="lesson-complete-icon"><i class="fas ' + (lesson.isTest && !passedTest ? 'fa-rotate-left' : 'fa-trophy') + '"></i></div>';
        html += '<h3>' + (lesson.isTest && !passedTest ? 'Test da rifare' : 'Lezione completata!') + '</h3>';
        html += '<p class="lesson-support">' + (lesson.isTest && !passedTest ? 'Nei test puoi fare un solo errore massimo.' : 'Hai imparato tutti i segni di questa lezione.') + '</p>';
        html += resultText;
        if (!(lesson.isTest && !passedTest)) {
            html += '<p class="lesson-reward">+ ' + lesson.xp + ' XP</p>';
        }
        html += '</div></div>';
    }

    container.innerHTML = html;

    // Gestione bottoni navigazione
    var prevBtn = document.getElementById('prev-btn');
    var nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = currentStep === 0;
    prevBtn.style.opacity = currentStep === 0 ? '0.5' : '1';

    if (currentStep === totalSteps - 1) {
        nextBtn.innerHTML = (lesson.isTest && !hasPassedLessonTest(lesson)) ? 'Rifai test <i class="fas fa-rotate-left"></i>' : 'Completa <i class="fas fa-check"></i>';
    } else {
        nextBtn.innerHTML = 'Continua <i class="fas fa-arrow-right"></i>';
    }
    var canContinue = !(lesson.quiz && currentStep < totalSteps - 1 && !isLessonQuestionAnswered(currentStep));
    nextBtn.disabled = !canContinue;
    nextBtn.style.opacity = canContinue ? '1' : '0.55';
}

function nextStep() {
    var lessons = lessonsData[currentLesson.mod];
    var lesson = lessons[currentLesson.idx];
    var totalSteps = getTotalSteps(lesson);

    if (lesson.quiz && currentStep < totalSteps - 1 && !isLessonQuestionAnswered(currentStep)) {
        showNotification('Seleziona una risposta per continuare', 'info');
        return;
    }

    if (currentStep < totalSteps - 1) {
        currentStep++;
        renderLessonStep();
    } else {
        completeLesson();
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        renderLessonStep();
    }
}

function completeLesson() {
    var lessons = lessonsData[currentLesson.mod];
    var lesson = lessons[currentLesson.idx];

    if (lesson.isTest && !hasPassedLessonTest(lesson)) {
        currentStep = 0;
        currentLessonAnswers = [];
        playUISound('wrong');
        showNotification('Troppi errori: devi rifare il test', 'info');
        renderLessonStep();
        return;
    }

    if (completedLessons.indexOf(lesson.id) === -1) {
        completedLessons.push(lesson.id);
        userXP += lesson.xp;

        // Imposta la prossima lezione come corrente
        var nextIdx = currentLesson.idx + 1;
        if (nextIdx < lessons.length) {
            currentLessonModule = currentLesson.mod;
            currentLessonIndex = nextIdx;
        } else {
            // Cerca la prossima lezione nel modulo successivo
            var nextModFound = false;
            var modKeys = Object.keys(lessonsData);
            var currentModIndex = modKeys.indexOf(currentLesson.mod);
            if (currentModIndex < modKeys.length - 1) {
                var nextModId = modKeys[currentModIndex + 1];
                currentLessonModule = nextModId;
                currentLessonIndex = 0;
                nextModFound = true;
            }
            if (!nextModFound) {
                // Tutte le lezioni completate!
                currentLessonModule = null;
                currentLessonIndex = null;
            }
        }

        saveUserData();
        updateUI();
        playUISound('success');
        showNotification('Lezione completata! +' + lesson.xp + ' XP', 'success');
    }

    closeLesson();
}

function closeLesson() {
    // Mostra bottom-nav
    var bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.style.display = 'flex';

    showSection('home');
    currentLesson = null;
    currentStep = 0;
}

function continueLesson() {
    var current = findCurrentLesson();
    if (current) {
        startLesson(current.modId, current.idx);
    } else {
        showNotification('Hai completato tutto il percorso!', 'success');
        showSection('progress');
    }
}

function renderModules() {
    var container = document.getElementById('modules-grid');
    if (!container) return;
    var html = '';
    var current = findCurrentLesson();
    for (var i = 0; i < modulesData.length; i++) {
        var module = modulesData[i];
        var lessons = lessonsData[module.id] || [];
        var completedCount = lessons.filter(function(lesson) {
            return completedLessons.indexOf(lesson.id) !== -1;
        }).length;
        var progress = lessons.length ? Math.round((completedCount / lessons.length) * 100) : 0;
        var isCurrentModule = current && current.modId === module.id;
        var isLocked = i > 0 && completedCount === 0 && !(current && current.modId === module.id);
        html += '<div class="module-card ' + (isLocked ? 'locked' : '') + '" ' + (isLocked ? '' : 'onclick="openModule(\'' + module.id + '\')"') + '>';
        html += '<div class="module-icon" style="background: ' + module.color + ';"><i class="fas ' + module.icon + '"></i></div>';
        html += '<h4>' + module.name + '</h4>';
        html += '<p>' + completedCount + '/' + lessons.length + ' lezioni</p>';
        html += '<div class="progress-circle" style="--progress:' + progress + '"><span>' + progress + '%</span></div>';
        if (isLocked) {
            html += '<div class="lock-icon"><i class="fas fa-lock"></i></div>';
        } else if (isCurrentModule) {
            html += '<div class="module-badge">Attuale</div>';
        }
        html += '</div>';
    }
    container.innerHTML = html;
}
// Dizionario
function renderDictionary() {
    var container = document.getElementById('dictionary-grid');
    if (!container) return;

    var filtered = signsData;
    if (currentCategory !== 'all') {
        filtered = signsData.filter(function(s) { return s.category === currentCategory; });
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var sign = filtered[i];
        html += '<div class="sign-card" onclick="openSign(\'' + sign.id + '\')">';
        html += '<div class="sign-image"><i class="fas ' + sign.icon + '"></i></div>';
        html += '<div class="sign-info"><h4>' + sign.name + '</h4><p>' + getCategoryName(sign.category) + '</p></div>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function getCategoryName(cat) {
    var names = { alphabet: 'Alfabeto', numbers: 'Numeri', greetings: 'Saluti', family: 'Famiglia' };
    return names[cat] || cat;
}

function filterCategory(cat) {
    currentCategory = cat;
    var buttons = document.querySelectorAll('.category-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
        if (buttons[i].textContent.toLowerCase().indexOf(cat === 'all' ? 'tutti' : getCategoryName(cat).toLowerCase()) !== -1) {
            buttons[i].classList.add('active');
        }
    }
    renderDictionary();
}

function searchSigns() {
    var query = document.getElementById('search-input').value.toLowerCase();
    var cards = document.querySelectorAll('.sign-card');

    for (var i = 0; i < cards.length; i++) {
        var nameEl = cards[i].querySelector('h4');
        if (nameEl) {
            var name = nameEl.textContent.toLowerCase();
            cards[i].style.display = name.indexOf(query) !== -1 ? 'block' : 'none';
        }
    }
}

function openSign(signId) {
    var sign = signsData.find(function(s) { return s.id === signId; });
    if (!sign) return;

    document.getElementById('sign-name').textContent = sign.name;
    document.getElementById('sign-category').textContent = getCategoryName(sign.category);
    document.getElementById('sign-description').textContent = sign.desc;
    document.getElementById('sign-video-display').innerHTML = '<i class="fas ' + sign.icon + '"></i>';

    document.getElementById('sign-modal').classList.add('active');
}

function closeSignModal() {
    document.getElementById('sign-modal').classList.remove('active');
}

function practiceThisSign() {
    closeSignModal();
    startQuiz('multiple-choice');
}

// Quiz
function startQuiz(type) {
    currentQuizType = type || 'multiple-choice';
    quizIndex = 0;
    quizScore = 0;
    document.getElementById('quiz-modal').classList.add('active');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    var activeQuestions = quizSets[currentQuizType] || quizSets['multiple-choice'];

    if (quizIndex >= activeQuestions.length) {
        showQuizResults();
        return;
    }

    var q = activeQuestions[quizIndex];
    var progress = ((quizIndex + 1) / activeQuestions.length) * 100;

    document.getElementById('quiz-progress-fill').style.width = progress + '%';
    document.getElementById('quiz-counter').textContent = (quizIndex + 1) + '/' + activeQuestions.length;

    var html = '<div class="quiz-question"><div class="quiz-type-badge">' + getQuizTypeLabel(currentQuizType) + '</div><h3>' + q.question + '</h3>';
    html += '<div class="question-sign"><i class="fas ' + q.sign + '"></i></div></div>';
    html += '<div class="quiz-options">';

    for (var i = 0; i < q.options.length; i++) {
        html += '<button class="quiz-option" onclick="checkAnswer(this, ' + i + ', ' + q.correct + ')">' + q.options[i] + '</button>';
    }
    html += '</div>';

    document.getElementById('quiz-content-area').innerHTML = html;
}

function checkAnswer(btn, selected, correct) {
    var buttons = document.querySelectorAll('.quiz-option');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (selected === correct) {
        btn.classList.add('correct');
        quizScore++;
        playUISound('correct');
        showNotification('Corretto! +20 XP', 'success');
        userXP += 20;
        saveUserData();
        updateUI();
    } else {
        btn.classList.add('wrong');
        buttons[correct].classList.add('correct');
        playUISound('wrong');
        showNotification('Risposta corretta: ' + buttons[correct].textContent, 'info');
    }

    setTimeout(function() {
        quizIndex++;
        renderQuizQuestion();
    }, 1500);
}

function showQuizResults() {
    var activeQuestions = quizSets[currentQuizType] || quizSets['multiple-choice'];
    var percentage = Math.round((quizScore / activeQuestions.length) * 100);
    var passed = percentage >= 60;

    var html = '<div class="quiz-result" style="text-align: center; padding: 2rem;">';
    html += '<i class="fas ' + (passed ? 'fa-trophy' : 'fa-redo') + '" style="font-size: 4rem; color: ' + (passed ? 'var(--success)' : 'var(--accent)') + '; margin-bottom: 1rem;"></i>';
    html += '<h3>' + (passed ? 'Complimenti!' : 'Riprova!') + '</h3>';
    html += '<p>' + getQuizTypeLabel(currentQuizType) + ': ' + quizScore + ' risposte corrette su ' + activeQuestions.length + '</p>';
    html += '<div style="font-size: 3rem; color: ' + (passed ? 'var(--success)' : 'var(--accent)') + '; font-weight: 700; margin: 2rem 0;">' + percentage + '%</div>';
    html += '<button class="btn-primary" onclick="closeQuiz()" style="width: 100%; margin-top: 1rem;">Continua</button>';
    html += '</div>';

    document.getElementById('quiz-content-area').innerHTML = html;
}

function closeQuiz() {
    document.getElementById('quiz-modal').classList.remove('active');
}

function startQuickQuiz() {
    showSection('practice');
    setTimeout(function() {
        startQuiz('multiple-choice');
    }, 300);
}

function getQuizTypeLabel(type) {
    var labels = {
        'multiple-choice': 'Scelta multipla',
        'memory': 'Memory',
        'spelling': 'Dattilologia'
    };

    return labels[type] || 'Quiz';
}

// Leaderboard
function renderLeaderboard() {
    var container = document.getElementById('leaderboard');
    if (!container) return;

    var html = '<h3 style="margin-bottom: 1rem;"><i class="fas fa-trophy" style="color: var(--gold);"></i> Classifica</h3>';
    var users = [
        { name: 'Maria R.', score: 3450, color: 'gold' },
        { name: 'Luca C.', score: 3200, color: 'silver' },
        { name: 'Giulia B.', score: 2890, color: 'bronze' },
        { name: 'Tu', score: userXP, color: '', you: true }
    ];

    for (var i = 0; i < users.length; i++) {
        var u = users[i];
        html += '<div class="leaderboard-item ' + (u.you ? 'you' : '') + '">';
        html += '<div class="rank">' + (i + 1) + '</div>';
        html += '<div class="user-info">';
        html += '<div class="avatar ' + u.color + '">' + u.name.substring(0, 2).toUpperCase() + '</div>';
        html += '<span class="username">' + u.name + '</span></div>';
        html += '<div class="score">' + u.score.toLocaleString() + '</div></div>';
    }
    container.innerHTML = html;
}

// Stats
function updateStats() {
    var level = Math.floor(userXP / 1000) + 1;
    var signsLearned = 0;
    for (var i = 0; i < completedLessons.length; i++) {
        for (var modId in lessonsData) {
            var lessons = lessonsData[modId];
            for (var j = 0; j < lessons.length; j++) {
                if (lessons[j].id === completedLessons[i]) {
                    signsLearned += (lessons[j].signs || []).length;
                }
            }
        }
    }
    var allLessons = getAllLessons();
    var current = findCurrentLesson();
    var totalLessons = allLessons.length;
    var completionRate = totalLessons ? Math.round((completedLessons.length / totalLessons) * 100) : 0;
    var streak = calculateStreak();
    document.getElementById('stat-streak').textContent = streak;
    document.getElementById('streak-count').textContent = streak;
    document.getElementById('stat-signs').textContent = signsLearned;
    document.getElementById('stat-lessons').textContent = completedLessons.length;
    document.getElementById('stat-time').textContent = formatTrackedTime(getCurrentTrackedAppTimeMs());
    document.getElementById('user-level').textContent = level;
    document.getElementById('profile-level-stat').textContent = level;
    document.getElementById('profile-signs-stat').textContent = signsLearned;
    document.getElementById('profile-lessons-stat').textContent = completedLessons.length;
    document.getElementById('completion-rate').textContent = completionRate + '%';
    document.getElementById('completion-summary').textContent = completedLessons.length + ' di ' + totalLessons + ' lezioni completate';
    document.getElementById('current-module-name').textContent = current ? current.mod.name : 'Percorso completato';
    document.getElementById('current-lesson-name').textContent = current ? current.lesson.title : 'Non ci sono lezioni in sospeso';
    var xpForPrevLevel = (level - 1) * 1000;
    var xpInCurrentLevel = userXP - xpForPrevLevel;
    var xpPercent = (xpInCurrentLevel / 1000) * 100;
    document.getElementById('xp-fill').style.width = xpPercent + '%';
    document.getElementById('xp-text').textContent = userXP.toLocaleString() + ' / ' + (level * 1000).toLocaleString() + ' XP';
    document.getElementById('xp-remaining').textContent = 'Mancano ' + ((level * 1000) - userXP).toLocaleString() + ' XP';
    renderModuleProgressList();
    renderModules();
}

function renderModuleProgressList() {
    var container = document.getElementById('module-progress-list');
    if (!container) return;
    var html = '';
    for (var i = 0; i < modulesData.length; i++) {
        var module = modulesData[i];
        var lessons = lessonsData[module.id] || [];
        var completedCount = lessons.filter(function(lesson) {
            return completedLessons.indexOf(lesson.id) !== -1;
        }).length;
        var progress = lessons.length ? Math.round((completedCount / lessons.length) * 100) : 0;
        html += '<div class="module-progress-card">';
        html += '<div class="module-progress-head">';
        html += '<div><h4>' + module.name + '</h4><p>' + completedCount + '/' + lessons.length + ' lezioni</p></div>';
        html += '<span>' + progress + '%</span>';
        html += '</div>';
        html += '<div class="xp-bar-large"><div class="xp-fill" style="width: ' + progress + '%"></div></div>';
        html += '</div>';
    }
    container.innerHTML = html;
}
function calculateStreak() {
    var lastLogin = localStorage.getItem('lisLearnLastLogin');
    var today = new Date().toDateString();
    var streak = parseInt(localStorage.getItem('lisLearnStreak') || '0');

    if (lastLogin !== today) {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastLogin === yesterday.toDateString()) {
            streak++;
        } else if (lastLogin) {
            streak = 1;
        } else {
            streak = 1;
        }
        localStorage.setItem('lisLearnLastLogin', today);
        localStorage.setItem('lisLearnStreak', streak.toString());
    }
    return streak;
}

// Notifiche
function showNotification(message, type) {
    var container = document.getElementById('notification-container');
    var notif = document.createElement('div');
    notif.className = 'notification ' + type;
    notif.innerHTML = '<i class="fas ' + (type === 'success' ? 'fa-check-circle' : 'fa-info-circle') + '"></i><span>' + message + '</span>';
    container.appendChild(notif);

    setTimeout(function() {
        notif.style.opacity = '0';
        setTimeout(function() { notif.remove(); }, 300);
    }, 3000);
}

function getInitials(name) {
    return (name || 'DU').trim().substring(0, 2).toUpperCase();
}

function cloneProfileSettings(source) {
    return {
        name: source.name || 'Studente',
        avatarStyle: source.avatarStyle || 'green',
        soundEnabled: source.soundEnabled !== false
    };
}

function openOnboarding() {
    var onboarding = document.getElementById('onboarding-screen');
    if (!onboarding) return;

    onboardingDraft = cloneProfileSettings(profileSettings);
    onboardingStepIndex = 0;
    onboarding.classList.remove('hidden');
    document.body.classList.add('onboarding-open');
    renderOnboardingStep();
}

function closeOnboarding() {
    var onboarding = document.getElementById('onboarding-screen');
    var highlight = document.getElementById('onboarding-highlight');
    if (!onboarding) return;

    onboarding.classList.add('hidden');
    document.body.classList.remove('onboarding-open');
    clearTimeout(onboardingPositionTimer);
    if (highlight) {
        highlight.classList.remove('onboarding-highlight-nav');
    }
    clearOnboardingNavFocus();
}

function getOnboardingSteps() {
    return [
        {
            section: 'home',
            target: '#home .learning-path',
            title: 'Benvenuto in DuoLIS',
            body: 'Questa è la home: qui trovi il percorso principale con capitoli, lezioni e ripassi.'
        },
        {
            section: 'home',
            target: '.bottom-nav',
            title: 'Muoviti da qui',
            body: 'Usa la barra in basso per cambiare sezione: Home, Lezioni, Dizionario, Quiz e Profilo sono sempre a portata di tap.'
        },
        {
            section: 'lessons',
            target: '#lessons .section-title',
            title: 'Lezioni organizzate',
            body: 'Qui puoi aprire i moduli e vedere tutte le lezioni in ordine, senza perderti nel percorso.'
        },
        {
            section: 'dictionary',
            target: '#dictionary .section-title',
            title: 'Dizionario LIS',
            body: 'Serve per cercare segni al volo, ripassare categorie e trovare contenuti specifici.'
        },
        {
            section: 'practice',
            target: '#practice .section-title',
            title: 'Quiz ed esercizi',
            body: 'Qui alleni memoria, scelta multipla e dattilologia con esercizi pensati per mobile.'
        },
        {
            section: 'profile',
            target: '#profile .profile-header',
            title: 'Profilo e progressi',
            body: 'Da qui controlli il tuo livello, cambi impostazioni e personalizzi l’esperienza.'
        },
        {
            section: 'profile',
            target: '#profile .profile-header',
            title: 'Creiamo il tuo profilo',
            profileSetup: true
        }
    ];
}

function renderOnboardingStep() {
    var steps = getOnboardingSteps();
    var step = steps[onboardingStepIndex];
    var body = document.getElementById('onboarding-tooltip-body');
    var stepCount = document.getElementById('onboarding-step-count');
    var nextBtn = document.getElementById('onboarding-next-btn');
    var backBtn = document.getElementById('onboarding-back-btn');
    var tooltip = document.querySelector('.onboarding-tooltip');
    var html = '';

    if (!step || !body || !stepCount || !nextBtn || !backBtn || !tooltip) return;

    stepCount.textContent = (onboardingStepIndex + 1) + ' / ' + steps.length;
    backBtn.style.visibility = onboardingStepIndex === 0 ? 'hidden' : 'visible';

    if (step.profileSetup) {
        html += '<div class="onboarding-profile-setup">';
        html += '<span class="onboarding-kicker">Ultimo passo</span>';
        html += '<h2>' + step.title + '</h2>';
        html += '<p>Imposta nome e colore. Poi entri direttamente nell’app.</p>';
        html += '<div class="onboarding-card-head">';
        html += '<div class="profile-avatar preview onboarding-avatar" id="onboarding-avatar-preview">' + getAvatarContent(onboardingDraft || profileSettings) + '</div>';
        html += '<div><h3 id="onboarding-preview-name">' + (onboardingDraft && onboardingDraft.name ? onboardingDraft.name : 'Studente') + '</h3><p>Anteprima profilo DuoLIS</p></div>';
        html += '</div>';
        html += '<div class="profile-editor-group"><label for="onboarding-name-input">Nome</label><input id="onboarding-name-input" type="text" maxlength="20" placeholder="Scrivi il tuo nome" oninput="updateOnboardingPreview()"></div>';
        html += '<div class="profile-editor-group"><span>Colore profilo</span><div class="onboarding-avatar-grid">';
        html += '<button class="onboarding-avatar-option" data-color="green" onclick="selectOnboardingAvatarStyle(\'green\'); return false;"><span class="avatar-style-swatch green"><i class="fas fa-hand-sparkles"></i></span><strong>Verde</strong></button>';
        html += '<button class="onboarding-avatar-option" data-color="blue" onclick="selectOnboardingAvatarStyle(\'blue\'); return false;"><span class="avatar-style-swatch blue"><i class="fas fa-book-open"></i></span><strong>Blu</strong></button>';
        html += '<button class="onboarding-avatar-option" data-color="gold" onclick="selectOnboardingAvatarStyle(\'gold\'); return false;"><span class="avatar-style-swatch gold"><i class="fas fa-star"></i></span><strong>Oro</strong></button>';
        html += '</div></div>';
        html += '<div class="onboarding-note"><i class="fas fa-circle-info"></i><span>Potrai cambiare tutto più avanti dalla pagina Profilo.</span></div>';
        html += '</div>';
        nextBtn.textContent = 'Entra in DuoLIS';
    } else {
        html += '<span class="onboarding-kicker">Guida rapida</span>';
        html += '<h2>' + step.title + '</h2>';
        html += '<p>' + step.body + '</p>';
        nextBtn.textContent = onboardingStepIndex === steps.length - 1 ? 'Fine' : 'Continua';
    }

    body.innerHTML = html;
    tooltip.classList.add('onboarding-tooltip-top');
    if (typeof tooltip.animate === 'function') {
        tooltip.animate([
            { opacity: 0, transform: 'translateX(-50%) translateY(14px) scale(0.96)' },
            { opacity: 1, transform: 'translateX(-50%) translateY(0) scale(1)' }
        ], {
            duration: 240,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'both'
        });
    }
    showSection(step.section);
    if (step.profileSetup) {
        populateOnboardingProfileForm();
    }
    scheduleOnboardingHighlight();
}

function populateOnboardingProfileForm() {
    var nameInput = document.getElementById('onboarding-name-input');
    if (nameInput) {
        nameInput.value = onboardingDraft && onboardingDraft.name ? onboardingDraft.name : 'Studente';
    }
    selectOnboardingAvatarStyle(onboardingDraft && onboardingDraft.avatarStyle ? onboardingDraft.avatarStyle : 'green', true);
    updateOnboardingPreview();
}

function updateOnboardingPreview() {
    var nameInput = document.getElementById('onboarding-name-input');
    var previewName = document.getElementById('onboarding-preview-name');
    var previewAvatar = document.getElementById('onboarding-avatar-preview');
    var nextName = (nameInput && nameInput.value.trim()) || 'Studente';

    if (!onboardingDraft) {
        onboardingDraft = cloneProfileSettings(profileSettings);
    }

    onboardingDraft.name = nextName;

    if (previewName) previewName.textContent = nextName;
    if (previewAvatar) {
        previewAvatar.textContent = getAvatarContent(onboardingDraft);
        previewAvatar.setAttribute('data-style', onboardingDraft.avatarStyle);
    }
}

function selectOnboardingAvatarStyle(style, silent) {
    var options = document.querySelectorAll('.onboarding-avatar-option');
    if (!onboardingDraft) {
        onboardingDraft = cloneProfileSettings(profileSettings);
    }

    onboardingDraft.avatarStyle = style;
    for (var i = 0; i < options.length; i++) {
        options[i].classList.toggle('active', options[i].getAttribute('data-color') === style);
    }
    updateOnboardingPreview();
    if (!silent) playUISound('tap');
}

function scheduleOnboardingHighlight() {
    clearTimeout(onboardingPositionTimer);
    onboardingPositionTimer = setTimeout(function() {
        updateOnboardingHighlight();
    }, 260);
}

function updateOnboardingNavFocus(sectionId) {
    var navItems = document.querySelectorAll('.bottom-nav .nav-item');
    for (var i = 0; i < navItems.length; i++) {
        var handler = navItems[i].getAttribute('onclick') || '';
        navItems[i].classList.toggle('onboarding-nav-focus', handler.indexOf("showSection('" + sectionId + "')") !== -1);
    }
}

function clearOnboardingNavFocus() {
    var navItems = document.querySelectorAll('.bottom-nav .nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('onboarding-nav-focus');
    }
}

function updateOnboardingHighlight() {
    var steps = getOnboardingSteps();
    var step = steps[onboardingStepIndex];
    var highlight = document.getElementById('onboarding-highlight');
    var overlay = document.getElementById('onboarding-screen');
    var target;
    var rect;

    if (!step || !highlight || !overlay) return;

    target = document.querySelector(step.target);
    if (!target) return;

    rect = target.getBoundingClientRect();
    highlight.classList.toggle('onboarding-highlight-nav', step.target === '.bottom-nav');
    updateOnboardingNavFocus(step.section);
    highlight.style.top = Math.max(8, rect.top - 8) + 'px';
    highlight.style.left = Math.max(8, rect.left - 8) + 'px';
    highlight.style.width = Math.min(window.innerWidth - 16, rect.width + 16) + 'px';
    highlight.style.height = Math.min(window.innerHeight - 16, rect.height + 16) + 'px';
}

function nextOnboardingStep() {
    var steps = getOnboardingSteps();
    if (onboardingStepIndex === steps.length - 1) {
        completeOnboarding();
        return;
    }
    onboardingStepIndex++;
    renderOnboardingStep();
}

function previousOnboardingStep() {
    if (onboardingStepIndex === 0) return;
    onboardingStepIndex--;
    renderOnboardingStep();
}

function skipOnboarding() {
    onboardingDraft = cloneProfileSettings(profileSettings);
    completeOnboarding(true);
}

function completeOnboarding() {
    var nameInput = document.getElementById('onboarding-name-input');
    var nextName = (nameInput && nameInput.value.trim()) || 'Studente';

    if (!onboardingDraft) {
        onboardingDraft = cloneProfileSettings(profileSettings);
    }

    onboardingDraft.name = nextName;
    profileSettings = cloneProfileSettings(onboardingDraft);
    saveProfileSettings();
    applyProfileSettings();
    localStorage.setItem('duolisOnboardingDone', 'true');
    localStorage.setItem('lisLearnMemberSince', String(new Date().getFullYear()));
    showSection('home');
    closeOnboarding();
    centerCurrentPathNode(false);
    playUISound('success');
    showNotification('Profilo creato! Benvenuto in DuoLIS.', 'success');
}

function getAvatarContent(settings) {
    return getInitials(settings && settings.name ? settings.name : 'Studente').charAt(0);
}

function applyProfileSettings() {
    var name = profileSettings.name || 'Studente';
    var avatarContent = getAvatarContent(profileSettings);
    var avatar = document.getElementById('profile-avatar');
    var preview = document.getElementById('profile-avatar-preview');
    var userName = document.getElementById('user-name');
    var profileName = document.getElementById('profile-name');

    if (userName) userName.textContent = name;
    if (profileName) profileName.textContent = name;
    if (avatar) {
        avatar.textContent = avatarContent;
        avatar.setAttribute('data-style', profileSettings.avatarStyle);
    }
    if (preview) {
        preview.textContent = avatarContent;
        preview.setAttribute('data-style', profileSettings.avatarStyle);
    }
}

function saveProfileSettings() {
    localStorage.setItem('lisLearnProfile', JSON.stringify(profileSettings));
    localStorage.setItem('lisLearnUserName', profileSettings.name);
}

function openProfileCustomization() {
    showSection('profile-customize');
}

function populateProfileEditor() {
    var nameInput = document.getElementById('profile-name-input');
    var soundInput = document.getElementById('sound-enabled-input');
    profileDraft = cloneProfileSettings(profileSettings);
    if (nameInput) nameInput.value = profileDraft.name || 'Studente';
    if (soundInput) soundInput.checked = profileDraft.soundEnabled !== false;
    selectAvatarStyle(profileDraft.avatarStyle || 'green', true);
    updateProfilePreview(true);
}

function selectAvatarStyle(style, silent) {
    if (!profileDraft) {
        profileDraft = cloneProfileSettings(profileSettings);
    }
    profileDraft.avatarStyle = style;
    var options = document.querySelectorAll('.avatar-style-option');
    for (var i = 0; i < options.length; i++) {
        options[i].classList.toggle('active', options[i].getAttribute('data-color') === style);
    }
    updateProfilePreview();
}

function updateProfilePreview(skipSoundPreview) {
    var nameInput = document.getElementById('profile-name-input');
    var soundInput = document.getElementById('sound-enabled-input');
    var previewName = document.getElementById('profile-preview-name');
    var previewAvatar = document.getElementById('profile-avatar-preview');
    var nextName;

    if (!profileDraft) {
        profileDraft = cloneProfileSettings(profileSettings);
    }

    nextName = (nameInput && nameInput.value.trim()) || 'Studente';
    profileDraft.name = nextName;
    if (soundInput) {
        profileDraft.soundEnabled = soundInput.checked;
    }

    if (previewName) previewName.textContent = nextName;
    if (previewAvatar) {
        previewAvatar.textContent = getAvatarContent(profileDraft);
        previewAvatar.setAttribute('data-style', profileDraft.avatarStyle);
    }

    if (!skipSoundPreview && soundInput && soundInput.checked && profileSettings.soundEnabled) {
        playUISound('tap');
    }
}

function saveProfileCustomization() {
    if (!profileDraft) {
        populateProfileEditor();
    }

    updateProfilePreview(true);
    profileSettings = cloneProfileSettings(profileDraft);
    saveProfileSettings();
    applyProfileSettings();
    profileDraft = null;
    playUISound('success');
    showNotification('Profilo aggiornato!', 'success');
    showSection('profile');
}

function closeProfileCustomization() {
    profileDraft = null;
    showSection('profile');
}

// Carica nome utente salvato
function loadUserName() {
    var savedName = localStorage.getItem('lisLearnUserName');
    if (savedName) {
        profileSettings.name = savedName;
    }
    applyProfileSettings();
}

function ensureAudioContext() {
    if (!audioContext) {
        var AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextCtor) return null;
        audioContext = new AudioContextCtor();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    return audioContext;
}

function playUISound(type) {
    if (!profileSettings.soundEnabled) return;
    var ctx = ensureAudioContext();
    if (!ctx) return;

    var patterns = {
        tap: [{ f: 640, t: 0.03, g: 0.006, type: 'sine' }],
        start: [{ f: 430, t: 0.045, g: 0.005, type: 'sine' }, { f: 540, t: 0.05, g: 0.006, d: 0.03, type: 'triangle' }],
        correct: [{ f: 610, t: 0.04, g: 0.006, type: 'sine' }, { f: 760, t: 0.055, g: 0.008, d: 0.04, type: 'sine' }],
        success: [{ f: 520, t: 0.045, g: 0.006, type: 'sine' }, { f: 660, t: 0.05, g: 0.008, d: 0.04, type: 'sine' }, { f: 790, t: 0.065, g: 0.009, d: 0.08, type: 'triangle' }],
        wrong: [{ f: 290, t: 0.05, g: 0.005, type: 'triangle' }, { f: 240, t: 0.06, g: 0.004, d: 0.035, type: 'sine' }]
    };

    var notes = patterns[type] || patterns.tap;
    var now = ctx.currentTime;

    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        var start = now + (note.d || 0);

        osc.type = note.type || 'sine';
        osc.frequency.setValueAtTime(note.f, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(note.g || 0.02, start + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + note.t);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + note.t + 0.02);
    }
}

// Resetta tutti i progressi (per testing)
function resetProgress() {
    if (confirm('Sei sicuro di voler resettare tutti i progressi? Questa azione non Ã¨ reversibile.')) {
        localStorage.removeItem('lisLearnData');
        localStorage.removeItem('lisLearnUserName');
        localStorage.removeItem('lisLearnLastLogin');
        localStorage.removeItem('lisLearnStreak');
        localStorage.removeItem('lisLearnMemberSince');
        localStorage.removeItem('lisLearnProfile');
        localStorage.removeItem('duolisOnboardingDone');

        userXP = 0;
        completedLessons = [];
        currentLessonModule = 'mod1';
        currentLessonIndex = 0;
        totalAppTimeMs = 0;
        appSessionStartedAt = null;
        if (appTimeInterval) {
            clearInterval(appTimeInterval);
            appTimeInterval = null;
        }
        resetProfileSettingsToDefault();

        updateUI();
        renderLearningPath();
        updateStats();
        openOnboarding();
        startAppTimeTracking();

        showNotification('Progressi resettati!', 'info');
    }
}
