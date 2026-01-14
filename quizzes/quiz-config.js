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
        id: 'cl_complication',
        name: 'CL合併症クイズ',
        file: 'CL合併症_クイズ.html',
        totalQuestions: 10,
        icon: '👁️‍🗨️',
        category: 'staff',
        description: 'コンタクトレンズの眼合併症と対策について学べます',
        color: 'cyan'
    },
    {
        id: 'cl_makeup',
        name: 'CLの種類と使い方クイズ',
        file: 'CLの種類と使い方_クイズ.html',
        totalQuestions: 10,
        icon: '👁️‍🗨️',
        category: 'staff',
        description: 'コンタクトレンズとお化粧の順番やケア方法を学べます',
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
    {
        id: 'pediatric_myopia',
        name: '小児近視対策クイズ',
        file: '小児近視対策_クイズ.html',
        totalQuestions: 10,
        icon: '👁️',
        category: 'staff',
        description: '子どもの近視予防と保護者への説明ポイントを学べます',
        color: 'purple'
    },
    {
        id: 'diabetic_retinopathy',
        name: '糖尿病網膜症クイズ',
        file: '糖尿病網膜症_クイズ.html',
        totalQuestions: 10,
        icon: '🩺',
        category: 'staff',
        description: '糖尿病網膜症の基礎知識と患者様への説明ポイントを学べます',
        color: 'indigo'
    },
    {
        id: 'epiphora',
        name: '流涙症クイズ',
        file: '流涙症_クイズ.html',
        totalQuestions: 8,
        icon: '💧',
        category: 'staff',
        description: '流涙症の原因や涙道の仕組みについて学べます',
        color: 'cyan'
    },
    {
        id: 'macular_membrane',
        name: '黄斑前膜クイズ',
        file: '黄斑前膜_クイズ.html',
        totalQuestions: 8,
        icon: '👁️',
        category: 'staff',
        description: '黄斑前膜の症状や治療について学べます',
        color: 'indigo'
    },
    {
        id: 'color_vision',
        name: '色覚異常クイズ',
        file: '色覚異常_クイズ.html',
        totalQuestions: 9,
        icon: '🎨',
        category: 'staff',
        description: '色覚異常の頻度や遺伝、カラーユニバーサルデザインを学べます',
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

    // クイズ完了回数をカウントし、自動バックアップをチェック
    const backupExecuted = onQuizComplete();
    data._backupExecuted = backupExecuted;

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
 * 重み = (未挑戦数 × 10) + (間違い数 × 5) + (未マスターなら +20)
 * @param {string} currentQuizFile - 現在のクイズファイル名（除外用）
 * @returns {string} - 選択されたクイズのファイル名
 */
function getWeightedRandomQuiz(currentQuizFile) {
    const data = getQuizData();
    const progress = data.progress || {};

    // 現在のクイズ以外のクイズリストを作成
    const otherQuizzes = QUIZ_LIST.filter(q => q.file !== currentQuizFile);

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

        // 重み計算: (未挑戦 × 10) + (間違い × 5) + (未マスターなら +20)
        let weight = (unansweredCount * 10) + (incorrectCount * 5) + (isPerfect ? 0 : 20);

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

    // 3秒後に自動で消す
    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
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
document.addEventListener('DOMContentLoaded', applyAllSettings);
