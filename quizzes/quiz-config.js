/**
 * クイズ設定ファイル
 *
 * 新しいクイズを追加する場合は、QUIZ_LIST に新しいエントリを追加してください。
 * 詳細は README.md を参照してください。
 */

const QUIZ_LIST = [
    // === メガネ・コンタクト系 ===
    {
        id: 'contact-basic',
        name: 'CL処方クイズ',
        file: 'コンタクト処方の基本クイズ.html',
        totalQuestions: 29,
        icon: '💧',
        category: 'staff',
        description: 'コンタクトレンズの処方に関する基本知識をテストします',
        color: 'cyan'
    },
    {
        id: 'enyo-megane',
        name: '遠用メガネのクイズ',
        file: '大人の遠く用メガネ合わせクイズ.html',
        totalQuestions: 28,
        icon: '🤓',
        category: 'staff',
        description: '大人の遠用メガネ処方の知識をテストします',
        color: 'amber'
    },
    {
        id: 'megane-awase',
        name: '老眼鏡合わせクイズ',
        file: '老眼鏡合わせ_クイズ.html',
        totalQuestions: 28,
        icon: '👓',
        category: 'staff',
        description: '老眼鏡合わせに関する基本知識をテストします',
        color: 'amber'
    },
    // === 疾患系 ===
    {
        id: 'kinshi',
        name: '近視クイズ',
        file: '近視についてのクイズ.html',
        totalQuestions: 10,
        icon: '👁️‍🗨️',
        category: 'staff',
        description: '近視の基礎知識と患者様への説明ポイントを学べます',
        color: 'blue'
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
        id: 'hakunaisho',
        name: '白内障クイズ',
        file: '白内障についてクイズ.html',
        totalQuestions: 10,
        icon: '📖',
        category: 'staff',
        description: '白内障の基礎知識と患者様への説明ポイントを学べます',
        color: 'cyan'
    },
    {
        id: 'ryokunaisho',
        name: '緑内障クイズ',
        file: '緑内障についてクイズ.html',
        totalQuestions: 17,
        icon: '👁️',
        category: 'staff',
        description: '緑内障について正しく理解するためのクイズです',
        color: 'green'
    },
    {
        id: 'jakushi',
        name: '弱視クイズ',
        file: '弱視クイズ.html',
        totalQuestions: 15,
        icon: '👀',
        category: 'staff',
        description: '弱視の基礎知識と保護者への説明ポイントを学べます',
        color: 'purple'
    },
    {
        id: 'shashi',
        name: '斜視クイズ',
        file: '斜視クイズ.html',
        totalQuestions: 10,
        icon: '🧐',
        category: 'staff',
        description: '斜視の基礎知識と保護者への説明ポイントを学べます',
        color: 'purple'
    },
    // === ルール・検診系 ===
    {
        id: 'ryokunaisho-kenshin',
        name: '検診の制度クイズ',
        file: '自治体の緑内障検診の制度のクイズ.html',
        totalQuestions: 14,
        icon: '🏥',
        category: 'staff',
        description: '自治体の緑内障検診制度についての知識を確認できます',
        color: 'indigo'
    },
    {
        id: 'innai-rule',
        name: '院内ルール確認クイズ',
        file: '院内ルール確認クイズ.html',
        totalQuestions: 15,
        icon: '🏥',
        category: 'staff',
        description: '休診日、予約ルール、受付時間など、院内の基本ルールを確認できます',
        color: 'blue'
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
        description: '1つのクイズを累積で全問正解',
        condition: 'どれかのクイズで全問正解（累積）',
        check: (progress, stats) => {
            return QUIZ_LIST.some(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    {
        id: 'triple-perfect',
        name: 'トリプル満点',
        icon: '⭐',
        description: '3つのクイズを累積で全問正解',
        condition: '3つ以上のクイズで全問正解（累積）',
        check: (progress, stats) => {
            const perfectCount = QUIZ_LIST.filter(quiz => progress[quiz.id] && progress[quiz.id].isPerfect).length;
            return perfectCount >= 3;
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
        id: 'half-perfect',
        name: 'ハーフ満点',
        icon: '💎',
        description: '6つのクイズを累積で全問正解',
        condition: '6つ以上のクイズで全問正解（累積）',
        check: (progress, stats) => {
            const perfectCount = QUIZ_LIST.filter(quiz => progress[quiz.id] && progress[quiz.id].isPerfect).length;
            return perfectCount >= 6;
        }
    },
    {
        id: 'quiz-master',
        name: 'クイズマスター',
        icon: '👑',
        description: '全クイズを累積で全問正解',
        condition: 'すべてのクイズで全問正解（累積）',
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

    // 全問題を1回以上正解（累積）した場合に isPerfect を true にする
    const quizConfig = getQuizById(quizId);
    if (quizConfig && quizProgress.questionResults) {
        const results = quizProgress.questionResults;
        const totalQ = quizConfig.totalQuestions;
        const answeredCount = Object.keys(results).length;
        const allCorrect = answeredCount === totalQ &&
                          Object.values(results).every(v => v === true);
        if (allCorrect) {
            quizProgress.isPerfect = true;
        }
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

/**
 * 問題ごとの結果を記録
 * @param {string} quizId - クイズID
 * @param {number} questionNumber - 問題番号
 * @param {boolean} isCorrect - 正解したか
 */
function recordQuestionResult(quizId, questionNumber, isCorrect) {
    const data = getQuizData();

    if (!data.progress[quizId]) {
        data.progress[quizId] = {
            bestScore: 0,
            totalQuestions: 0,
            attempts: 0,
            isPerfect: false,
            questionResults: {}
        };
    }

    if (!data.progress[quizId].questionResults) {
        data.progress[quizId].questionResults = {};
    }

    // 最後の結果で上書き
    data.progress[quizId].questionResults[questionNumber] = isCorrect;

    saveQuizData(data);
}

/**
 * 間違えた問題の番号リストを取得
 * @param {string} quizId - クイズID
 * @returns {number[]} - 間違えた問題番号の配列
 */
function getIncorrectQuestions(quizId) {
    const data = getQuizData();
    const results = data.progress[quizId]?.questionResults || {};

    return Object.entries(results)
        .filter(([_, isCorrect]) => isCorrect === false)
        .map(([num, _]) => parseInt(num));
}

/**
 * 未挑戦の問題番号リストを取得
 * @param {string} quizId - クイズID
 * @param {number} totalQuestions - 総問題数
 * @returns {number[]} - 未挑戦の問題番号の配列
 */
function getUnansweredQuestions(quizId, totalQuestions) {
    const data = getQuizData();
    const results = data.progress[quizId]?.questionResults || {};

    const unanswered = [];
    for (let i = 1; i <= totalQuestions; i++) {
        if (!(i.toString() in results)) {
            unanswered.push(i);
        }
    }
    return unanswered;
}

/**
 * 配列をシャッフル（Fisher-Yates）
 * @param {Array} array - シャッフルする配列
 * @returns {Array} - シャッフルされた新しい配列
 */
function shuffleArrayForConfig(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * 確率重み付け方式で問題を選択
 * 重み: 間違い=5, 未挑戦=10, 正解済み=1
 * @param {string} quizId - クイズID
 * @param {number} totalQ - 総問題数
 * @param {number} count - 選択する問題数
 * @returns {number[]} - 選択された問題番号の配列
 */
function getWeightedRandomQuestions(quizId, totalQ, count) {
    const incorrect = getIncorrectQuestions(quizId);
    const unanswered = getUnansweredQuestions(quizId, totalQ);

    // 全問題リストを作成
    const allQuestions = [];
    for (let i = 1; i <= totalQ; i++) {
        allQuestions.push(i);
    }

    // 正解済み問題を算出
    const correct = allQuestions.filter(q =>
        !incorrect.includes(q) && !unanswered.includes(q)
    );

    // 重み付きプールを作成（間違い:5, 未挑戦:10, 正解済み:1）
    const weighted = [];
    incorrect.forEach(q => {
        for (let i = 0; i < 5; i++) weighted.push(q);
    });
    unanswered.forEach(q => {
        for (let i = 0; i < 10; i++) weighted.push(q);
    });
    correct.forEach(q => {
        weighted.push(q);
    });

    // 重複なしでcount個選ぶ
    const selected = [];
    const availableWeighted = [...weighted];

    while (selected.length < count && availableWeighted.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableWeighted.length);
        const chosen = availableWeighted[randomIndex];

        if (!selected.includes(chosen)) {
            selected.push(chosen);
        }
        // 選ばれた問題を全て除去（重複防止）
        for (let i = availableWeighted.length - 1; i >= 0; i--) {
            if (availableWeighted[i] === chosen) {
                availableWeighted.splice(i, 1);
            }
        }
    }

    // 最終的な出題順をシャッフル
    return shuffleArrayForConfig(selected);
}
