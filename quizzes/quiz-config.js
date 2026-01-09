/**
 * クイズ設定ファイル
 *
 * 新しいクイズを追加する場合は、QUIZ_LIST に新しいエントリを追加してください。
 * 詳細は README.md を参照してください。
 */

const QUIZ_LIST = [
    {
        id: 'innai-rule',
        name: '院内ルール確認クイズ',
        file: '院内ルール確認クイズ.html',
        totalQuestions: 15,
        icon: '🏥',
        category: 'staff',
        description: '休診日、予約ルール、受付時間など、院内の基本ルールを確認できます',
        color: 'blue'
    },
    {
        id: 'contact-basic',
        name: 'コンタクトレンズ処方クイズ',
        file: 'コンタクト処方の基本クイズ.html',
        totalQuestions: 29,
        icon: '💧',
        category: 'staff',
        description: 'コンタクトレンズの処方に関する基本知識をテストします',
        color: 'cyan'
    },
    {
        id: 'kafunsho',
        name: '花粉症クイズ',
        file: '花粉症についてのクイズ.html',
        totalQuestions: 16,
        icon: '🤧',
        category: 'staff',
        description: '花粉症の症状や対処法についての知識を確認できます',
        color: 'teal'
    },
    {
        id: 'ryokunaisho',
        name: '緑内障理解度クイズ',
        file: '緑内障についてクイズ.html',
        totalQuestions: 17,
        icon: '👁️',
        category: 'patient',
        description: '緑内障について正しく理解するためのクイズです',
        color: 'green'
    },
    {
        id: 'megane-awase',
        name: 'メガネ合わせクイズ',
        file: '老眼鏡合わせ_クイズ.html',
        totalQuestions: 28,
        icon: '👓',
        category: 'staff',
        description: 'メガネ合わせに関する基本知識をテストします',
        color: 'amber'
    }
];

/**
 * バッジ定義
 */
const BADGE_LIST = [
    {
        id: 'first-try',
        name: 'はじめの一歩',
        icon: '🔰',
        description: 'クイズに初挑戦',
        condition: 'どれかのクイズに1回挑戦する',
        check: (progress, stats) => stats.totalAttempts >= 1
    },
    {
        id: 'fifty-answers',
        name: 'コツコツ学習',
        icon: '🌱',
        description: '累計50問回答',
        condition: '合計で50問以上回答する',
        check: (progress, stats) => stats.totalAnswered >= 50
    },
    {
        id: 'all-tried',
        name: '全制覇',
        icon: '📚',
        description: '全クイズに挑戦',
        condition: 'すべてのクイズに1回以上挑戦する',
        check: (progress, stats) => {
            return QUIZ_LIST.every(quiz => progress[quiz.id] && progress[quiz.id].attempts >= 1);
        }
    },
    {
        id: 'hundred-answers',
        name: '100問突破',
        icon: '💯',
        description: '累計100問回答',
        condition: '合計で100問以上回答する',
        check: (progress, stats) => stats.totalAnswered >= 100
    },
    {
        id: 'ten-attempts',
        name: '熱心な挑戦者',
        icon: '🔥',
        description: '10回挑戦',
        condition: '合計で10回以上クイズに挑戦する',
        check: (progress, stats) => stats.totalAttempts >= 10
    },
    {
        id: 'perfect-once',
        name: '満点達成',
        icon: '🌸',
        description: '全問モードで満点',
        condition: 'どれかのクイズの「全問」モードで満点を取る',
        check: (progress, stats) => {
            return QUIZ_LIST.some(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    {
        id: 'double-perfect',
        name: 'ダブル満点',
        icon: '⭐',
        description: '2つで満点',
        condition: '2つ以上のクイズの「全問」モードで満点を取る',
        check: (progress, stats) => {
            const perfectCount = QUIZ_LIST.filter(quiz => progress[quiz.id] && progress[quiz.id].isPerfect).length;
            return perfectCount >= 2;
        }
    },
    {
        id: 'two-hundred-answers',
        name: '勉強家',
        icon: '📖',
        description: '累計200問回答',
        condition: '合計で200問以上回答する',
        check: (progress, stats) => stats.totalAnswered >= 200
    },
    {
        id: 'triple-perfect',
        name: 'トリプル満点',
        icon: '💎',
        description: '3つで満点',
        condition: '3つ以上のクイズの「全問」モードで満点を取る',
        check: (progress, stats) => {
            const perfectCount = QUIZ_LIST.filter(quiz => progress[quiz.id] && progress[quiz.id].isPerfect).length;
            return perfectCount >= 3;
        }
    },
    {
        id: 'quiz-master',
        name: 'クイズマスター',
        icon: '👑',
        description: '全クイズで満点',
        condition: 'すべてのクイズの「全問」モードで満点を取る',
        check: (progress, stats) => {
            return QUIZ_LIST.every(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    }
];

/**
 * LocalStorage キー
 */
const STORAGE_KEY = 'hikari_quiz_data';

/**
 * 進捗データを取得
 */
function getQuizData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('Failed to load quiz data:', e);
    }
    return {
        progress: {},
        totalAnswered: 0,
        badges: []
    };
}

/**
 * 進捗データを保存
 */
function saveQuizData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save quiz data:', e);
    }
}

/**
 * クイズ結果を記録
 * @param {string} quizId - クイズID
 * @param {number} score - 今回のスコア
 * @param {number} totalQuestions - 総問題数
 */
function recordQuizResult(quizId, score, totalQuestions) {
    const data = getQuizData();

    // 進捗を更新
    if (!data.progress[quizId]) {
        data.progress[quizId] = {
            bestScore: 0,
            totalQuestions: totalQuestions,
            attempts: 0,
            isPerfect: false
        };
    }

    const quizProgress = data.progress[quizId];
    quizProgress.attempts++;
    quizProgress.totalQuestions = totalQuestions;

    if (score > quizProgress.bestScore) {
        quizProgress.bestScore = score;
    }

    // 全問モードで満点の場合のみ isPerfect を true にする
    const quizConfig = getQuizById(quizId);
    const isFullMode = quizConfig && totalQuestions === quizConfig.totalQuestions;
    if (isFullMode && score === totalQuestions) {
        quizProgress.isPerfect = true;
    }

    // 累計回答数を更新
    data.totalAnswered += totalQuestions;

    // バッジをチェック
    const stats = {
        totalAttempts: Object.values(data.progress).reduce((sum, p) => sum + p.attempts, 0),
        totalAnswered: data.totalAnswered
    };

    BADGE_LIST.forEach(badge => {
        if (!data.badges.includes(badge.id) && badge.check(data.progress, stats)) {
            data.badges.push(badge.id);
        }
    });

    saveQuizData(data);
    return data;
}

/**
 * クイズ情報をIDで取得
 */
function getQuizById(quizId) {
    return QUIZ_LIST.find(q => q.id === quizId);
}
