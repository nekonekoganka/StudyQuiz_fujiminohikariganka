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
        color: 'cyan',
        genre: 'megane-cl'
    },
    {
        id: 'cl_complication',
        name: 'CL合併症クイズ',
        file: 'CL合併症_クイズ.html',
        totalQuestions: 10,
        icon: '👁️‍🗨️',
        category: 'staff',
        description: 'コンタクトレンズの眼合併症と対策について学べます',
        color: 'cyan',
        genre: 'megane-cl'
    },
    {
        id: 'cl_makeup',
        name: 'CLの種類と使い方クイズ',
        file: 'CLの種類と使い方_クイズ.html',
        totalQuestions: 10,
        icon: '👁️‍🗨️',
        category: 'staff',
        description: 'コンタクトレンズとお化粧の順番やケア方法を学べます',
        color: 'cyan',
        genre: 'megane-cl'
    },
    {
        id: 'enyo-megane',
        name: '遠用メガネのクイズ',
        file: '大人の遠く用メガネ合わせクイズ.html',
        totalQuestions: 28,
        icon: '🤓',
        category: 'staff',
        description: '大人の遠用メガネ処方の知識をテストします',
        color: 'amber',
        genre: 'megane-cl'
    },
    {
        id: 'megane-awase',
        name: '老眼鏡合わせクイズ',
        file: '老眼鏡合わせ_クイズ.html',
        totalQuestions: 27,
        icon: '👓',
        category: 'staff',
        description: '老眼鏡合わせに関する基本知識をテストします',
        color: 'amber',
        genre: 'megane-cl'
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
        color: 'blue',
        genre: 'adult-disease'
    },
    {
        id: 'kafunsho',
        name: '花粉症クイズ',
        file: '花粉症についてのクイズ.html',
        totalQuestions: 16,
        icon: '🤧',
        category: 'staff',
        description: '花粉症の症状や対処法についての知識を確認できます',
        color: 'teal',
        genre: 'adult-disease'
    },
    {
        id: 'hakunaisho',
        name: '白内障クイズ',
        file: '白内障についてクイズ.html',
        totalQuestions: 10,
        icon: '📖',
        category: 'staff',
        description: '白内障の基礎知識と患者様への説明ポイントを学べます',
        color: 'cyan',
        genre: 'adult-disease'
    },
    {
        id: 'ryokunaisho',
        name: '緑内障クイズ',
        file: '緑内障についてクイズ.html',
        totalQuestions: 17,
        icon: '👁️',
        category: 'staff',
        description: '緑内障について正しく理解するためのクイズです',
        color: 'green',
        genre: 'adult-disease'
    },
    {
        id: 'jakushi',
        name: '弱視クイズ',
        file: '弱視クイズ.html',
        totalQuestions: 15,
        icon: '👀',
        category: 'staff',
        description: '弱視の基礎知識と保護者への説明ポイントを学べます',
        color: 'purple',
        genre: 'pediatric'
    },
    {
        id: 'shashi',
        name: '斜視クイズ',
        file: '斜視クイズ.html',
        totalQuestions: 10,
        icon: '🧐',
        category: 'staff',
        description: '斜視の基礎知識と保護者への説明ポイントを学べます',
        color: 'purple',
        genre: 'pediatric'
    },
    {
        id: 'pediatric_myopia',
        name: '小児近視対策クイズ',
        file: '小児近視対策_クイズ.html',
        totalQuestions: 10,
        icon: '👁️',
        category: 'staff',
        description: '子どもの近視予防と保護者への説明ポイントを学べます',
        color: 'purple',
        genre: 'pediatric'
    },
    {
        id: 'diabetic_retinopathy',
        name: '糖尿病網膜症クイズ',
        file: '糖尿病網膜症_クイズ.html',
        totalQuestions: 10,
        icon: '🩺',
        category: 'staff',
        description: '糖尿病網膜症の基礎知識と患者様への説明ポイントを学べます',
        color: 'indigo',
        genre: 'adult-disease'
    },
    {
        id: 'epiphora',
        name: '流涙症クイズ',
        file: '流涙症_クイズ.html',
        totalQuestions: 8,
        icon: '💧',
        category: 'staff',
        description: '流涙症の原因や涙道の仕組みについて学べます',
        color: 'cyan',
        genre: 'adult-disease'
    },
    {
        id: 'macular_membrane',
        name: '黄斑前膜クイズ',
        file: '黄斑前膜_クイズ.html',
        totalQuestions: 8,
        icon: '👁️',
        category: 'staff',
        description: '黄斑前膜の症状や治療について学べます',
        color: 'indigo',
        genre: 'adult-disease'
    },
    {
        id: 'color_vision',
        name: '色覚異常クイズ',
        file: '色覚異常_クイズ.html',
        totalQuestions: 9,
        icon: '🎨',
        category: 'staff',
        description: '色覚異常の頻度や遺伝、カラーユニバーサルデザインを学べます',
        color: 'purple',
        genre: 'pediatric'
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
        color: 'indigo',
        genre: 'rule'
    },
    {
        id: 'innai-rule',
        name: '院内ルール確認クイズ',
        file: '院内ルール確認クイズ.html',
        totalQuestions: 15,
        icon: '🏥',
        category: 'staff',
        description: '休診日、予約ルール、受付時間など、院内の基本ルールを確認できます',
        color: 'blue',
        genre: 'rule'
    },
    {
        id: 'oct',
        name: 'OCT検査クイズ',
        file: 'OCT検査_クイズ.html',
        totalQuestions: 7,
        icon: '👁️',
        category: 'staff',
        description: 'OCT検査の基本とコツ、患者様への説明ポイントを学べます',
        color: 'teal',
        genre: 'examination'
    },
    {
        id: 'imo_shinya',
        name: 'アイモ（視野検査）クイズ',
        file: 'アイモ_視野検査_クイズ.html',
        totalQuestions: 6,
        icon: '👀',
        category: 'staff',
        description: '視野計アイモの基本と特徴、検査配列について学べます',
        color: 'green',
        genre: 'examination'
    },
    {
        id: 'siryoku',
        name: '視力検査のコツクイズ',
        file: '視力検査のコツ_クイズ.html',
        totalQuestions: 8,
        icon: '👁️',
        category: 'staff',
        description: '視力検査の基本とコツ、患者様への対応ポイントを学べます',
        color: 'amber',
        genre: 'examination'
    },
    {
        id: 'noncon-iatsu',
        name: 'ノンコン眼圧検査クイズ',
        file: 'ノンコン眼圧検査_クイズ.html',
        totalQuestions: 11,
        icon: '💨',
        category: 'staff',
        description: '眼圧測定のコツと安全な検査のポイントを学べます',
        color: 'cyan',
        genre: 'examination'
    },
    {
        id: 'monshin',
        name: '眼科問診クイズ',
        file: '眼科問診_クイズ.html',
        totalQuestions: 6,
        icon: '📋',
        category: 'staff',
        description: '眼科における問診のコツと注意点を学ぶクイズ',
        color: 'blue',
        genre: 'examination'
    },
    // === レセプト・保険点数系 ===
    {
        id: 'hoken-shinryo',
        name: '眼科保険診療クイズ',
        file: '眼科保険診療_クイズ.html',
        totalQuestions: 8,
        icon: '🏥',
        category: 'staff',
        description: '眼科外来で必要な保険診療のルールを学ぶクイズ',
        color: 'blue',
        genre: 'insurance'
    },
    {
        id: 'hoken-tensuu',
        name: '眼科保険点数クイズ',
        file: '眼科保険点数_クイズ.html',
        totalQuestions: 14,
        icon: '💰',
        category: 'staff',
        description: '眼科で頻出の保険点数を円換算で学ぶクイズ（1点=10円）',
        color: 'blue',
        genre: 'insurance'
    }
];

/**
 * バッジ定義
 * rarity: 'normal'(通常), 'rare'(レア), 'legendary'(レジェンダリー)
 * - normal: トースト通知（3秒で自動消去）
 * - rare: モーダル表示
 * - legendary: モーダル表示 + 特別エフェクト
 */
const BADGE_LIST = [
    // --- 入門系 ---
    {
        id: 'first-try',
        name: 'はじめの一歩',
        icon: '🔰',
        description: 'クイズに初挑戦',
        condition: 'どれかのクイズに1回挑戦する',
        rarity: 'normal',
        check: (progress, stats) => stats.totalAttempts >= 1
    },
    {
        id: 'first-perfect',
        name: '満点デビュー',
        icon: '🌸',
        description: '初めて1つのクイズを全問正解',
        condition: 'どれかのクイズで全問正解（累積）',
        rarity: 'rare',
        check: (progress, stats) => {
            return QUIZ_LIST.some(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    // --- 回答数系 ---
    {
        id: 'fifty-answers',
        name: 'コツコツ学習',
        icon: '🌱',
        description: '累計50問回答',
        condition: '合計で50問以上回答する',
        rarity: 'normal',
        check: (progress, stats) => stats.totalAnswered >= 50
    },
    {
        id: 'hundred-answers',
        name: '100問突破',
        icon: '💯',
        description: '累計100問回答',
        condition: '合計で100問以上回答する',
        rarity: 'normal',
        check: (progress, stats) => stats.totalAnswered >= 100
    },
    {
        id: 'two-hundred-answers',
        name: '勉強家',
        icon: '📖',
        description: '累計200問回答',
        condition: '合計で200問以上回答する',
        rarity: 'normal',
        check: (progress, stats) => stats.totalAnswered >= 200
    },
    {
        id: 'three-hundred-answers',
        name: '知識の泉',
        icon: '💧',
        description: '累計300問回答',
        condition: '合計で300問以上回答する',
        rarity: 'rare',
        check: (progress, stats) => stats.totalAnswered >= 300
    },
    // --- ジャンル制覇系（％ベース） ---
    {
        id: 'all-tried',
        name: 'チャレンジャー',
        icon: '📚',
        description: '全クイズに挑戦',
        condition: 'すべてのクイズに1回以上挑戦する',
        rarity: 'rare',
        check: (progress, stats) => {
            return QUIZ_LIST.every(quiz => progress[quiz.id] && progress[quiz.id].attempts >= 1);
        }
    },
    {
        id: 'master-20',
        name: 'ブロンズマスター',
        icon: '🥉',
        description: '20%のクイズを全問正解',
        condition: 'クイズ総数の20%以上で全問正解（累積）',
        rarity: 'normal',
        check: (progress, stats) => {
            const perfectCount = QUIZ_LIST.filter(quiz => progress[quiz.id] && progress[quiz.id].isPerfect).length;
            return perfectCount >= Math.ceil(QUIZ_LIST.length * 0.2);
        }
    },
    {
        id: 'master-40',
        name: 'シルバーマスター',
        icon: '🥈',
        description: '40%のクイズを全問正解',
        condition: 'クイズ総数の40%以上で全問正解（累積）',
        rarity: 'normal',
        check: (progress, stats) => {
            const perfectCount = QUIZ_LIST.filter(quiz => progress[quiz.id] && progress[quiz.id].isPerfect).length;
            return perfectCount >= Math.ceil(QUIZ_LIST.length * 0.4);
        }
    },
    {
        id: 'master-60',
        name: 'ゴールドマスター',
        icon: '🥇',
        description: '60%のクイズを全問正解',
        condition: 'クイズ総数の60%以上で全問正解（累積）',
        rarity: 'rare',
        check: (progress, stats) => {
            const perfectCount = QUIZ_LIST.filter(quiz => progress[quiz.id] && progress[quiz.id].isPerfect).length;
            return perfectCount >= Math.ceil(QUIZ_LIST.length * 0.6);
        }
    },
    {
        id: 'master-80',
        name: 'プラチナマスター',
        icon: '💎',
        description: '80%のクイズを全問正解',
        condition: 'クイズ総数の80%以上で全問正解（累積）',
        rarity: 'rare',
        check: (progress, stats) => {
            const perfectCount = QUIZ_LIST.filter(quiz => progress[quiz.id] && progress[quiz.id].isPerfect).length;
            return perfectCount >= Math.ceil(QUIZ_LIST.length * 0.8);
        }
    },
    {
        id: 'quiz-master',
        name: 'クイズマスター',
        icon: '👑',
        description: '全クイズを全問正解',
        condition: 'すべてのクイズで全問正解（累積）',
        rarity: 'legendary',
        check: (progress, stats) => {
            return QUIZ_LIST.every(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    // --- ジャンルマスター系 ---
    {
        id: 'megane-cl-master',
        name: 'メガネ・CLマスター',
        icon: '👓',
        description: 'メガネ・CL系クイズを全制覇',
        condition: 'メガネ・CL系5クイズで全問正解（累積）',
        rarity: 'rare',
        check: (progress, stats) => {
            const genreQuizzes = QUIZ_LIST.filter(q => q.genre === 'megane-cl');
            return genreQuizzes.every(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    {
        id: 'pediatric-master',
        name: '小児眼科マスター',
        icon: '👶',
        description: '小児眼科系クイズを全制覇',
        condition: '小児眼科系4クイズで全問正解（累積）',
        rarity: 'rare',
        check: (progress, stats) => {
            const genreQuizzes = QUIZ_LIST.filter(q => q.genre === 'pediatric');
            return genreQuizzes.every(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    {
        id: 'adult-disease-master',
        name: '成人眼疾患マスター',
        icon: '🏥',
        description: '成人眼疾患系クイズを全制覇',
        condition: '成人眼疾患系7クイズで全問正解（累積）',
        rarity: 'rare',
        check: (progress, stats) => {
            const genreQuizzes = QUIZ_LIST.filter(q => q.genre === 'adult-disease');
            return genreQuizzes.every(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    {
        id: 'examination-master',
        name: '検査マスター',
        icon: '🔬',
        description: '検査系クイズを全制覇',
        condition: '検査系5クイズで全問正解（累積）',
        rarity: 'rare',
        check: (progress, stats) => {
            const genreQuizzes = QUIZ_LIST.filter(q => q.genre === 'examination');
            return genreQuizzes.every(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    {
        id: 'rule-master',
        name: 'ルールマスター',
        icon: '📋',
        description: 'ルール・検診系クイズを全制覇',
        condition: 'ルール・検診系2クイズで全問正解（累積）',
        rarity: 'normal',
        check: (progress, stats) => {
            const genreQuizzes = QUIZ_LIST.filter(q => q.genre === 'rule');
            return genreQuizzes.every(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
        }
    },
    {
        id: 'insurance-master',
        name: 'レセプトマスター',
        icon: '💰',
        description: '保険点数系クイズを全制覇',
        condition: '保険点数系2クイズで全問正解（累積）',
        rarity: 'normal',
        check: (progress, stats) => {
            const genreQuizzes = QUIZ_LIST.filter(q => q.genre === 'insurance');
            return genreQuizzes.every(quiz => progress[quiz.id] && progress[quiz.id].isPerfect);
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

    // バッジをチェック（新規獲得バッジを検出）
    const stats = {
        totalAttempts: Object.values(data.progress).reduce((sum, p) => sum + p.attempts, 0),
        totalAnswered: data.totalAnswered
    };

    const previousBadges = [...data.badges];
    const newlyEarnedBadges = [];

    BADGE_LIST.forEach(badge => {
        if (!data.badges.includes(badge.id) && badge.check(data.progress, stats)) {
            data.badges.push(badge.id);
            newlyEarnedBadges.push(badge);
        }
    });

    saveQuizData(data);

    // クイズ完了回数をカウントし、自動バックアップをチェック
    const backupExecuted = onQuizComplete();
    data._backupExecuted = backupExecuted;
    data._newBadges = newlyEarnedBadges;

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
 * 重み: 未挑戦=20, 間違い=10, 正解済み=1
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

    // 重み付きプールを作成（未挑戦:20, 間違い:10, 正解済み:1）
    const weighted = [];
    unanswered.forEach(q => {
        for (let i = 0; i < 20; i++) weighted.push(q);
    });
    incorrect.forEach(q => {
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

/**
 * クイズジャンルを重み付けで選択
 * 重み = (未挑戦数 × 20) + (間違い数 × 5) + (完全未挑戦なら +50) + (未マスターなら +20)
 * 未挑戦のジャンルを優先的に出題
 * @param {string} currentQuizFile - 現在のクイズファイル名（除外用）
 * @returns {string} - 選択されたクイズのファイル名
 */
function getWeightedRandomQuiz(currentQuizFile) {
    const data = getQuizData();
    const progress = data.progress || {};

    // ランダム選択から除外するクイズ（ローカルルール系）
    const excludeFromRandom = ['innai-rule', 'ryokunaisho-kenshin'];

    // 現在のクイズ・除外対象以外のクイズリストを作成
    const otherQuizzes = QUIZ_LIST.filter(q =>
        q.file !== currentQuizFile && !excludeFromRandom.includes(q.id)
    );

    if (otherQuizzes.length === 0) {
        return null;
    }

    // 各クイズの重みを計算
    const weighted = [];
    otherQuizzes.forEach(quiz => {
        const quizProgress = progress[quiz.id] || {};
        const totalQ = quiz.totalQuestions;

        // 未挑戦・間違い・正解の数を計算
        const results = quizProgress.questionResults || {};
        let incorrectCount = 0;
        let correctCount = 0;
        Object.values(results).forEach(isCorrect => {
            if (isCorrect) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        });
        const unansweredCount = totalQ - incorrectCount - correctCount;
        const isPerfect = quizProgress.isPerfect || false;

        // 完全未挑戦かどうか（一度も回答していないジャンル）
        const isCompletelyUntried = Object.keys(results).length === 0;

        // 重み計算: (未挑戦 × 20) + (間違い × 5) + (完全未挑戦なら +50) + (未マスターなら +20)
        // 未挑戦のジャンルを大幅に優先
        let weight = (unansweredCount * 20) + (incorrectCount * 5) + (isCompletelyUntried ? 50 : 0) + (isPerfect ? 0 : 20);

        // 最低でも重み1は保証（完全にゼロにはしない）
        weight = Math.max(weight, 1);

        // 重みの分だけプールに追加
        for (let i = 0; i < weight; i++) {
            weighted.push(quiz.file);
        }
    });

    // ランダムに1つ選ぶ
    const randomIndex = Math.floor(Math.random() * weighted.length);
    return weighted[randomIndex];
}

/**
 * 設定キー
 */
const SETTINGS_KEYS = {
    fontSize: 'hikari-quiz-fontsize',
    darkMode: 'hikari-quiz-darkmode',
    sound: 'hikari-quiz-sound',
    animation: 'hikari-quiz-animation',
    dailyCount: 'hikari-quiz-dailycount',
    autoBackupInterval: 'hikari-quiz-autobackup-interval'
};

/**
 * 自動バックアップ関連の定数
 */
const AUTO_BACKUP_INTERVAL_DEFAULT = 5; // デフォルト: 5回ごとにバックアップ
const AUTO_BACKUP_COUNT_KEY = 'hikari_quiz_completion_count';
const BACKUP_STORAGE_KEY = 'hikari_quiz_last_backup';

/**
 * 自動バックアップ間隔を取得
 */
function getAutoBackupInterval() {
    const saved = localStorage.getItem(SETTINGS_KEYS.autoBackupInterval);
    return saved ? parseInt(saved) : AUTO_BACKUP_INTERVAL_DEFAULT;
}

/**
 * 自動バックアップ間隔を設定
 */
function setAutoBackupInterval(interval) {
    localStorage.setItem(SETTINGS_KEYS.autoBackupInterval, interval.toString());
}

/**
 * クイズ完了回数を取得
 */
function getCompletionCount() {
    const count = localStorage.getItem(AUTO_BACKUP_COUNT_KEY);
    return count ? parseInt(count) : 0;
}

/**
 * クイズ完了回数を増加
 */
function incrementCompletionCount() {
    const count = getCompletionCount() + 1;
    localStorage.setItem(AUTO_BACKUP_COUNT_KEY, count.toString());
    return count;
}

/**
 * 最終バックアップ日を保存
 */
function setLastBackupDate() {
    localStorage.setItem(BACKUP_STORAGE_KEY, new Date().toISOString());
}

/**
 * バックアップファイル名を生成
 */
function generateBackupFileName() {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // 2026-01-13
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `ひかりクイズデータ_${date}_${hours}${minutes}.json`;
}

/**
 * 自動バックアップを実行（ダウンロード）
 */
function performAutoBackup() {
    const data = getQuizData();
    data.backupDate = new Date().toISOString();
    data.appVersion = '1.0';
    data.autoBackup = true;

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = generateBackupFileName();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setLastBackupDate();

    // 通知を表示（少し遅延させてダウンロード後に表示）
    const count = getCompletionCount();
    setTimeout(() => {
        showAutoBackupNotification(count);
    }, 500);
}

/**
 * バックアップ完了通知を表示
 */
function showAutoBackupNotification(count) {
    // 既存の通知があれば削除
    const existing = document.getElementById('autoBackupNotification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'autoBackupNotification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #4caf50, #2e7d32);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            text-align: center;
            max-width: 90%;
            animation: slideUp 0.3s ease;
        ">
            <div style="font-size: 24px; margin-bottom: 8px;">✅</div>
            <div style="font-weight: bold;">バックアップ完了！</div>
        </div>
        <style>
            @keyframes slideUp {
                from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
        </style>
    `;
    document.body.appendChild(notification);

    // 1秒後に自動で消す
    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 1000);
}

/**
 * バッジ獲得通知を表示
 * @param {Array} newBadges - 新規獲得したバッジオブジェクトの配列
 */
function showBadgeNotification(newBadges) {
    if (!newBadges || newBadges.length === 0) return;

    // レア度の高い順にソート（legendary > rare > normal）
    const rarityOrder = { legendary: 3, rare: 2, normal: 1 };
    const sortedBadges = [...newBadges].sort((a, b) =>
        (rarityOrder[b.rarity] || 1) - (rarityOrder[a.rarity] || 1)
    );

    // 最もレア度の高いバッジで表示タイプを決定
    const highestRarity = sortedBadges[0].rarity || 'normal';

    if (highestRarity === 'legendary') {
        showLegendaryBadgeModal(sortedBadges);
    } else if (highestRarity === 'rare') {
        showRareBadgeModal(sortedBadges);
    } else {
        showNormalBadgeToast(sortedBadges);
    }
}

/**
 * 通常バッジのトースト通知
 */
function showNormalBadgeToast(badges) {
    const existing = document.getElementById('badgeToast');
    if (existing) existing.remove();

    const badgeCount = badges.length;
    const badgeIcons = badges.map(b => b.icon).join(' ');
    const badgeNames = badges.map(b => b.name).join('、');

    const toast = document.createElement('div');
    toast.id = 'badgeToast';
    toast.innerHTML = `
        <div class="badge-toast">
            <div class="badge-toast-header">
                <span class="badge-toast-title">🎉 バッジ獲得！</span>
            </div>
            <div class="badge-toast-content">
                <span class="badge-toast-icons">${badgeIcons}</span>
                <span class="badge-toast-names">${badgeNames}</span>
            </div>
        </div>
        <style>
            .badge-toast {
                position: fixed;
                bottom: 80px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 16px 24px;
                border-radius: 16px;
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
                z-index: 10001;
                text-align: center;
                max-width: 90%;
                animation: badgeSlideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .badge-toast-header {
                margin-bottom: 8px;
            }
            .badge-toast-title {
                font-weight: bold;
                font-size: 16px;
            }
            .badge-toast-content {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .badge-toast-icons {
                font-size: 28px;
            }
            .badge-toast-names {
                font-size: 14px;
                opacity: 0.95;
            }
            @keyframes badgeSlideUp {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(30px) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0) scale(1);
                }
            }
        </style>
    `;
    document.body.appendChild(toast);

    // 4秒後に自動で消す
    setTimeout(() => {
        toast.style.transition = 'opacity 0.3s, transform 0.3s';
        toast.style.opacity = '0';
        toast.querySelector('.badge-toast').style.transform = 'translateX(-50%) translateY(-10px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/**
 * レアバッジのモーダル表示
 */
function showRareBadgeModal(badges) {
    const existing = document.getElementById('badgeModal');
    if (existing) existing.remove();

    const badgeCount = badges.length;
    const title = badgeCount > 1 ? `${badgeCount}つのバッジ獲得！` : 'バッジ獲得！';

    const badgesHtml = badges.map(badge => `
        <div class="badge-modal-item">
            <div class="badge-modal-icon ${badge.rarity}">${badge.icon}</div>
            <div class="badge-modal-name">${badge.name}</div>
            <div class="badge-modal-condition">${badge.condition}</div>
        </div>
    `).join('');

    const modal = document.createElement('div');
    modal.id = 'badgeModal';
    modal.innerHTML = `
        <div class="badge-modal-overlay">
            <div class="badge-modal-content rare">
                <div class="badge-modal-header">
                    <span class="badge-modal-celebration">🎉</span>
                    <span class="badge-modal-title">${title}</span>
                </div>
                <div class="badge-modal-badges">
                    ${badgesHtml}
                </div>
                <button class="badge-modal-close" onclick="this.closest('#badgeModal').remove()">閉じる</button>
            </div>
        </div>
        <style>
            .badge-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10002;
                animation: badgeModalFadeIn 0.3s ease;
            }
            .badge-modal-content {
                background: linear-gradient(145deg, #1a1a2e, #16213e);
                border-radius: 24px;
                padding: 32px;
                max-width: 90%;
                width: 320px;
                text-align: center;
                animation: badgeModalPopIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border: 2px solid rgba(255, 255, 255, 0.1);
            }
            .badge-modal-content.rare {
                box-shadow: 0 0 40px rgba(102, 126, 234, 0.3);
            }
            .badge-modal-header {
                margin-bottom: 24px;
            }
            .badge-modal-celebration {
                font-size: 40px;
                display: block;
                margin-bottom: 8px;
                animation: badgeBounce 0.6s ease infinite;
            }
            .badge-modal-title {
                font-size: 24px;
                font-weight: bold;
                color: #fff;
            }
            .badge-modal-badges {
                display: flex;
                flex-direction: column;
                gap: 16px;
                margin-bottom: 24px;
            }
            .badge-modal-item {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 16px;
                padding: 16px;
            }
            .badge-modal-icon {
                font-size: 48px;
                margin-bottom: 8px;
                animation: badgeIconPulse 1.5s ease infinite;
            }
            .badge-modal-icon.rare {
                filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.8));
            }
            .badge-modal-name {
                font-size: 18px;
                font-weight: bold;
                color: #fff;
                margin-bottom: 4px;
            }
            .badge-modal-condition {
                font-size: 13px;
                color: rgba(255, 255, 255, 0.7);
            }
            .badge-modal-close {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                border: none;
                padding: 12px 32px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                transition: transform 0.2s, box-shadow 0.2s;
            }
            .badge-modal-close:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            }
            @keyframes badgeModalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes badgeModalPopIn {
                from {
                    opacity: 0;
                    transform: scale(0.5) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }
            @keyframes badgeBounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            @keyframes badgeIconPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        </style>
    `;
    document.body.appendChild(modal);

    // オーバーレイクリックでも閉じる
    modal.querySelector('.badge-modal-overlay').addEventListener('click', (e) => {
        if (e.target.classList.contains('badge-modal-overlay')) {
            modal.remove();
        }
    });
}

/**
 * レジェンダリーバッジのモーダル表示（特別エフェクト付き）
 */
function showLegendaryBadgeModal(badges) {
    const existing = document.getElementById('badgeModal');
    if (existing) existing.remove();

    const badgeCount = badges.length;
    const title = badgeCount > 1 ? `${badgeCount}つのバッジ獲得！` : 'バッジ獲得！';

    const badgesHtml = badges.map(badge => `
        <div class="badge-modal-item ${badge.rarity}">
            <div class="badge-modal-icon ${badge.rarity}">${badge.icon}</div>
            <div class="badge-modal-name">${badge.name}</div>
            <div class="badge-modal-condition">${badge.condition}</div>
            ${badge.rarity === 'legendary' ? '<div class="badge-modal-rarity">★ LEGENDARY ★</div>' : ''}
        </div>
    `).join('');

    // 紙吹雪を生成
    let confettiHtml = '';
    for (let i = 0; i < 50; i++) {
        const left = Math.random() * 100;
        const delay = Math.random() * 3;
        const duration = 2 + Math.random() * 2;
        const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bcb', '#c56cf0'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        confettiHtml += `<div class="confetti" style="left: ${left}%; animation-delay: ${delay}s; animation-duration: ${duration}s; background: ${color};"></div>`;
    }

    const modal = document.createElement('div');
    modal.id = 'badgeModal';
    modal.innerHTML = `
        <div class="badge-modal-overlay legendary">
            <div class="confetti-container">${confettiHtml}</div>
            <div class="badge-modal-content legendary">
                <div class="badge-modal-header">
                    <span class="badge-modal-celebration">🏆</span>
                    <span class="badge-modal-title legendary-title">${title}</span>
                </div>
                <div class="badge-modal-badges">
                    ${badgesHtml}
                </div>
                <button class="badge-modal-close legendary" onclick="this.closest('#badgeModal').remove()">すごい！</button>
            </div>
        </div>
        <style>
            .badge-modal-overlay.legendary {
                background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1), rgba(0, 0, 0, 0.85));
            }
            .badge-modal-content.legendary {
                background: linear-gradient(145deg, #1a1a2e, #2d1b4e);
                box-shadow: 0 0 60px rgba(255, 215, 0, 0.4), 0 0 100px rgba(255, 215, 0, 0.2);
                border: 2px solid rgba(255, 215, 0, 0.3);
            }
            .legendary-title {
                background: linear-gradient(90deg, #ffd700, #ffec8b, #ffd700);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .badge-modal-item.legendary {
                background: linear-gradient(145deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
                border: 1px solid rgba(255, 215, 0, 0.3);
            }
            .badge-modal-icon.legendary {
                font-size: 64px;
                filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8));
                animation: legendaryPulse 1.5s ease infinite;
            }
            .badge-modal-rarity {
                font-size: 12px;
                color: #ffd700;
                font-weight: bold;
                margin-top: 8px;
                letter-spacing: 2px;
            }
            .badge-modal-close.legendary {
                background: linear-gradient(135deg, #ffd700, #ffb700);
                color: #1a1a2e;
            }
            .confetti-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                overflow: hidden;
            }
            .confetti {
                position: absolute;
                width: 10px;
                height: 10px;
                top: -10px;
                animation: confettiFall linear forwards;
            }
            @keyframes legendaryPulse {
                0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); }
                50% { transform: scale(1.15); filter: drop-shadow(0 0 30px rgba(255, 215, 0, 1)); }
            }
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        </style>
    `;
    document.body.appendChild(modal);

    // オーバーレイクリックでも閉じる
    modal.querySelector('.badge-modal-overlay').addEventListener('click', (e) => {
        if (e.target.classList.contains('badge-modal-overlay') || e.target.classList.contains('confetti-container')) {
            modal.remove();
        }
    });
}

/**
 * バッジ獲得表示用のHTMLを生成（結果画面内に表示用）
 * @param {Array} badges - 獲得したバッジの配列
 * @returns {string} - 表示用HTML
 */
function renderBadgeAchievement(badges) {
    if (!badges || badges.length === 0) return '';

    // レア度の高い順にソート
    const rarityOrder = { legendary: 3, rare: 2, normal: 1 };
    const sortedBadges = [...badges].sort((a, b) =>
        (rarityOrder[b.rarity] || 1) - (rarityOrder[a.rarity] || 1)
    );

    // 最もレア度の高いバッジでスタイルを決定
    const highestRarity = sortedBadges[0].rarity || 'normal';

    const badgeCount = badges.length;
    const title = badgeCount > 1 ? `🎉 ${badgeCount}つのバッジ獲得！` : '🎉 バッジ獲得！';

    const badgesHtml = sortedBadges.map(badge => `
        <div class="badge-achievement-item ${badge.rarity || 'normal'}">
            <span class="badge-achievement-icon">${badge.icon}</span>
            <div class="badge-achievement-info">
                <span class="badge-achievement-name">${badge.name}</span>
                <span class="badge-achievement-condition">${badge.condition}</span>
            </div>
        </div>
    `).join('');

    return `
        <div class="badge-achievement ${highestRarity}">
            <div class="badge-achievement-title">${title}</div>
            <div class="badge-achievement-list">
                ${badgesHtml}
            </div>
            <div class="badge-achievement-hint">📊 学習記録で全バッジを確認できます</div>
        </div>
    `;
}

/**
 * PC版：進捗セクションとバッジを横並びにする
 * showFinalScore()の最後で呼び出す
 */
function arrangeResultCards() {
    // PC画面のみ適用（769px以上）
    if (window.innerWidth < 769) return;

    const progressSection = document.querySelector('.result-progress-section');
    const badgeSection = document.querySelector('.badge-achievement');

    if (!progressSection) return;

    // 既にラッパーがある場合はスキップ
    if (progressSection.parentElement.classList.contains('result-cards-row')) return;

    // ラッパーを作成
    const wrapper = document.createElement('div');
    wrapper.className = 'result-cards-row';

    // 進捗セクションをラッパーに移動
    progressSection.parentElement.insertBefore(wrapper, progressSection);
    wrapper.appendChild(progressSection);

    // バッジセクションがあればラッパーに移動
    if (badgeSection) {
        wrapper.appendChild(badgeSection);
    }
}

/**
 * クイズ完了時に呼び出す（自動バックアップチェック）
 * @returns {boolean} - バックアップ通知が表示されたかどうか
 */
function onQuizComplete() {
    const count = incrementCompletionCount();
    const interval = getAutoBackupInterval();

    if (count % interval === 0) {
        // バックアップ確認通知を表示（自動ダウンロードではなく）
        showBackupPrompt(count);
        return true;
    }
    return false;
}

/**
 * バックアップ確認通知を表示
 */
function showBackupPrompt(count) {
    // 既存の通知があれば削除
    const existing = document.getElementById('backupPrompt');
    if (existing) existing.remove();

    // ランダム励ましメッセージ
    const encourageMessages = [
        'クイズ頑張ってますね！',
        '学習お疲れさま！',
        '今日もコツコツえらい！',
        'いい調子で学習中！',
        '継続は力なり！',
        'その調子！学習順調！',
        '学習習慣バッチリ！',
        'よく頑張ってますね！'
    ];

    const subMessages = [
        'バックアップしませんか？',
        'データを保存しておきましょう',
        '学習データを守りましょう'
    ];

    const mainMessage = encourageMessages[Math.floor(Math.random() * encourageMessages.length)];
    const subMessage = subMessages[Math.floor(Math.random() * subMessages.length)];

    const prompt = document.createElement('div');
    prompt.id = 'backupPrompt';
    prompt.innerHTML = `
        <style>
            #backupPromptInner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #ff9800, #f57c00);
                color: white;
                padding: 16px 20px;
                box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
                z-index: 10000;
                animation: slideUpPrompt 0.3s ease;
            }
            #backupPromptContent {
                max-width: 600px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .backup-prompt-icon {
                font-size: 28px;
                flex-shrink: 0;
            }
            .backup-prompt-text {
                flex-grow: 1;
            }
            .backup-prompt-title {
                font-weight: bold;
                font-size: 15px;
                margin-bottom: 2px;
            }
            .backup-prompt-subtitle {
                font-size: 13px;
                opacity: 0.9;
            }
            .backup-prompt-buttons {
                display: flex;
                gap: 8px;
                flex-shrink: 0;
            }
            .backup-prompt-btn {
                padding: 10px 16px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                border: none;
                transition: all 0.2s;
            }
            .backup-prompt-btn.primary {
                background: white;
                color: #e65100;
            }
            .backup-prompt-btn.primary:active {
                transform: scale(0.95);
            }
            .backup-prompt-btn.close {
                background: rgba(255,255,255,0.2);
                color: white;
                padding: 10px 12px;
            }
            .backup-prompt-btn.close:active {
                transform: scale(0.95);
            }
            @keyframes slideUpPrompt {
                from { transform: translateY(100%); }
                to { transform: translateY(0); }
            }
            /* PC版: 右下にカード表示 */
            @media (min-width: 768px) {
                #backupPromptInner {
                    bottom: 20px;
                    left: auto;
                    right: 20px;
                    width: 360px;
                    border-radius: 12px;
                    padding: 20px;
                }
                #backupPromptContent {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 12px;
                }
                .backup-prompt-buttons {
                    width: 100%;
                }
                .backup-prompt-btn.primary {
                    flex-grow: 1;
                }
                .backup-prompt-btn.primary:hover {
                    background: #fff3e0;
                }
                .backup-prompt-btn.close:hover {
                    background: rgba(255,255,255,0.3);
                }
            }
        </style>
        <div id="backupPromptInner">
            <div id="backupPromptContent">
                <div class="backup-prompt-icon">💾</div>
                <div class="backup-prompt-text">
                    <div class="backup-prompt-title">${mainMessage}</div>
                    <div class="backup-prompt-subtitle">${subMessage}</div>
                </div>
                <div class="backup-prompt-buttons">
                    <button class="backup-prompt-btn primary" onclick="executeBackupFromPrompt()">今すぐ保存</button>
                    <button class="backup-prompt-btn close" onclick="dismissBackupPrompt()">✕</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(prompt);
}

/**
 * バックアップ確認通知から実行
 */
function executeBackupFromPrompt() {
    // 通知を閉じる
    dismissBackupPrompt();

    // バックアップを実行
    performAutoBackup();
}

/**
 * バックアップ確認通知を閉じる
 */
function dismissBackupPrompt() {
    const prompt = document.getElementById('backupPrompt');
    if (prompt) {
        const inner = document.getElementById('backupPromptInner');
        if (inner) {
            inner.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            inner.style.transform = 'translateY(100%)';
            inner.style.opacity = '0';
            setTimeout(() => prompt.remove(), 300);
        } else {
            prompt.remove();
        }
    }
}

/**
 * 自動バックアップのメッセージを取得
 * @returns {string|null} - メッセージまたはnull
 */
function getAutoBackupMessage() {
    const count = getCompletionCount();
    const interval = getAutoBackupInterval();
    if (count % interval === 0 && count > 0) {
        return `💾 ${count}回目のクイズ完了！\n学習データを自動バックアップしました`;
    }
    return null;
}

/**
 * 復元用：クリップボードにコピーして確認ダイアログを表示
 * @returns {Promise<boolean>} - ユーザーがファイル選択に進むかどうか
 */
async function showRestoreGuideDialog() {
    const searchText = 'ひかりクイズデータ';
    let clipboardSuccess = false;

    try {
        await navigator.clipboard.writeText(searchText);
        clipboardSuccess = true;
    } catch (err) {
        console.log('Clipboard API not available');
    }

    return new Promise((resolve) => {
        // 既存のダイアログがあれば削除
        const existing = document.getElementById('restoreGuideDialog');
        if (existing) existing.remove();

        const dialog = document.createElement('div');
        dialog.id = 'restoreGuideDialog';
        dialog.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.6);
                z-index: 10002;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            ">
                <div style="
                    background: white;
                    border-radius: 16px;
                    padding: 24px;
                    max-width: 320px;
                    width: 100%;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    text-align: center;
                ">
                    <div style="font-size: 40px; margin-bottom: 12px;">${clipboardSuccess ? '✅' : '📂'}</div>
                    <div style="font-size: 15px; font-weight: bold; color: #333; margin-bottom: 16px; line-height: 1.5;">
                        ${clipboardSuccess ? '検索用テキストを<br>「クリップボード」にコピーしました' : 'ファイルを選択してください'}
                    </div>
                    ${clipboardSuccess ? `
                        <div style="
                            color: #666;
                            font-size: 13px;
                            margin-bottom: 8px;
                        ">テキスト：</div>
                        <div style="
                            background: #e3f2fd;
                            border-radius: 8px;
                            padding: 12px;
                            margin-bottom: 16px;
                            font-family: monospace;
                            font-size: 15px;
                            color: #1565c0;
                            font-weight: bold;
                        ">ひかりクイズデータ</div>
                        <div style="
                            color: #666;
                            font-size: 14px;
                            line-height: 1.6;
                            margin-bottom: 20px;
                            text-align: left;
                        ">
                            <strong>使い方：</strong><br>
                            ファイル選択画面で<br>
                            検索欄にテキストを貼り付け →<br>
                            バックアップが見つかります
                        </div>
                    ` : `
                        <div style="
                            color: #666;
                            font-size: 14px;
                            line-height: 1.6;
                            margin-bottom: 20px;
                        ">
                            「ひかりクイズデータ」で始まる<br>
                            JSONファイルを選択してください。
                        </div>
                    `}
                    <button id="restoreGuideBtn" style="
                        width: 100%;
                        padding: 14px;
                        border-radius: 10px;
                        border: none;
                        background: linear-gradient(135deg, #4caf50, #2e7d32);
                        color: white;
                        font-size: 15px;
                        font-weight: bold;
                        cursor: pointer;
                    ">ファイルを選ぶ</button>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);

        document.getElementById('restoreGuideBtn').addEventListener('click', () => {
            dialog.remove();
            resolve(true);
        });

        // 背景クリックでキャンセル
        dialog.firstElementChild.addEventListener('click', (e) => {
            if (e.target === dialog.firstElementChild) {
                dialog.remove();
                resolve(false);
            }
        });
    });
}

/**
 * 復元用：バックアップデータを検証
 */
function validateBackupData(data) {
    if (!data || typeof data !== 'object') {
        return { valid: false, error: 'invalid_format' };
    }
    // 最低限どれかのデータがあるか確認
    if (!data.progress && !data.totalAnswered && !data.badges) {
        return { valid: false, error: 'no_quiz_data' };
    }
    return { valid: true };
}

/**
 * 復元用：プレビュー情報を取得
 */
function getBackupPreviewInfo(data) {
    const backupDate = data.backupDate ? new Date(data.backupDate) : null;
    const totalAnswered = data.totalAnswered || 0;
    const badges = data.badges ? Object.keys(data.badges).length : 0;

    // 満点クイズ数を計算
    let perfectCount = 0;
    if (data.progress) {
        for (const quizId in data.progress) {
            if (data.progress[quizId]?.isPerfect) {
                perfectCount++;
            }
        }
    }

    return {
        backupDate: backupDate,
        totalAnswered: totalAnswered,
        perfectCount: perfectCount,
        badgeCount: badges
    };
}

/**
 * 復元用：日付フォーマット
 */
function formatBackupDate(date) {
    if (!date) return '不明';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

/**
 * フォントサイズ設定を適用
 */
function applyFontSize() {
    const saved = localStorage.getItem(SETTINGS_KEYS.fontSize) || 'normal';
    document.body.classList.remove('small-font', 'large-font');
    if (saved === 'small') {
        document.body.classList.add('small-font');
    } else if (saved === 'large') {
        document.body.classList.add('large-font');
    }
}

/**
 * 効果音設定を取得
 */
function isSoundEnabled() {
    return localStorage.getItem(SETTINGS_KEYS.sound) === 'on';
}

/**
 * アニメーション設定を取得
 */
function isAnimationEnabled() {
    const saved = localStorage.getItem(SETTINGS_KEYS.animation);
    return saved !== 'off'; // デフォルトはオン
}

/**
 * 今日の問題数設定を取得
 */
function getDailyQuestionCount() {
    const saved = localStorage.getItem(SETTINGS_KEYS.dailyCount);
    return saved ? parseInt(saved) : 3;
}

/**
 * 全設定を適用
 */
function applyAllSettings() {
    applyFontSize();
}

// ページ読み込み時に自動で適用
// DOMが既に読み込まれている場合は即座に実行、そうでなければDOMContentLoadedを待つ
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAllSettings);
} else {
    // DOMContentLoadedは既に発火済み
    applyAllSettings();
}
