/**
 * クイズ共通ロジック
 * 各クイズHTMLファイルから読み込んで使用する
 *
 * 必要なグローバル変数（各クイズファイルで定義）:
 * - QUIZ_ID: クイズの一意識別子
 * - TOTAL_QUESTIONS: 総問題数
 * - QUIZ_TITLE: クイズのタイトル（結果メッセージ用、オプション）
 */

// グローバル状態変数
let currentQuestion = 1;
let score = 0;
let totalQuestions = 10;
let questionList = [];
let isDaily = false;
let isReviewMode = false;

// 全クイズ一覧（シャッフル機能用）
const ALL_QUIZZES = [
    'CLの種類と使い方_クイズ.html',
    'CL合併症_クイズ.html',
    'OCT検査_クイズ.html',
    'アイモ_視野検査_クイズ.html',
    'アトピー性皮膚炎と目_クイズ.html',
    'コンタクト処方の基本クイズ.html',
    'ノンコン眼圧検査_クイズ.html',
    'ぶどう膜炎_クイズ.html',
    '大人の遠く用メガネ合わせクイズ.html',
    '小児近視対策_クイズ.html',
    '弱視クイズ.html',
    '斜視クイズ.html',
    '流涙症_クイズ.html',
    '白内障についてクイズ.html',
    '眼科保険点数_クイズ.html',
    '眼科保険診療_クイズ.html',
    '眼科問診_クイズ.html',
    '糖尿病網膜症_クイズ.html',
    '緑内障についてクイズ.html',
    '老眼鏡合わせ_クイズ.html',
    '自治体の緑内障検診の制度のクイズ.html',
    '色覚異常_クイズ.html',
    '花粉症についてのクイズ.html',
    '視力検査のコツ_クイズ.html',
    '近視についてのクイズ.html',
    '院内ルール確認クイズ.html',
    '飛蚊症_クイズ.html',
    '黄斑前膜_クイズ.html'
];

// 現在のクイズファイル名を取得
const CURRENT_QUIZ_FILE = decodeURIComponent(location.pathname.split('/').pop());

// 全問題番号の配列を生成
function getAllQuestions() {
    const questions = [];
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        questions.push(i);
    }
    return questions;
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    updateProgressStatus();

    // URLパラメータをチェック
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');

    // 今日の○問ボタンテキストを更新
    const dailyCount = getDailyQuestionCount();
    const dailyBtn = document.querySelector('.mode-button');
    if (dailyBtn && dailyBtn.textContent.includes('今日の')) {
        dailyBtn.textContent = `📋 今日の${dailyCount}問`;
    }

    // モードが指定されていたら自動開始
    if (mode && (mode.startsWith('daily') || mode === 'full' || mode === 'review')) {
        startQuiz(mode);
    }
});

// 学習状況の表示を更新
function updateProgressStatus() {
    const incorrectList = getIncorrectQuestions(QUIZ_ID);
    const unansweredList = getUnansweredQuestions(QUIZ_ID, TOTAL_QUESTIONS);
    const correctNum = TOTAL_QUESTIONS - incorrectList.length - unansweredList.length;

    const incorrectCount = document.getElementById('incorrectCount');
    const unansweredCount = document.getElementById('unansweredCount');
    const correctCount = document.getElementById('correctCount');
    const totalQuestionsCount = document.getElementById('totalQuestionsCount');

    if (incorrectCount) {
        incorrectCount.textContent = `${incorrectList.length}問`;
    }
    if (unansweredCount) {
        unansweredCount.textContent = `${unansweredList.length}問`;
    }
    if (correctCount) {
        correctCount.textContent = `${correctNum}問`;
    }
    if (totalQuestionsCount) {
        totalQuestionsCount.textContent = `${TOTAL_QUESTIONS}問`;
    }

    // 間違えた問題復習ボタンの表示制御
    const reviewModeBtn = document.getElementById('reviewModeButton');
    if (reviewModeBtn) {
        if (incorrectList.length > 0) {
            reviewModeBtn.classList.remove('hidden');
            reviewModeBtn.innerHTML = `❌ 間違えた問題だけ復習<span class="btn-sub">${incorrectList.length}問</span>`;
        } else {
            reviewModeBtn.classList.add('hidden');
        }
    }
}

// 配列シャッフル
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 正解時フラッシュ効果
function flashCorrect(element) {
    const card = element.closest('.question-card');
    if (card) {
        card.classList.add('correct-flash');
        setTimeout(() => card.classList.remove('correct-flash'), 400);
    }
}

// 結果発表エフェクト
function celebrateResult(isPerfect) {
    // 振動フィードバック（スマホのみ）
    if (navigator.vibrate) {
        if (isPerfect) {
            navigator.vibrate([100, 50, 100, 50, 100]);
        } else {
            navigator.vibrate([50, 30, 50]);
        }
    }

    // 絵文字を飛ばす
    const emojis = isPerfect
        ? ['🎉', '🏆', '👑', '💯', '⭐', '✨', '🌟', '🥇']
        : ['🎉', '⭐', '✨', '👏', '🎊'];
    const count = isPerfect ? 15 : 8;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 3;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'celebrate-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = (centerX - 100 + Math.random() * 200) + 'px';
            emoji.style.top = (centerY + Math.random() * 50) + 'px';
            document.body.appendChild(emoji);

            setTimeout(() => emoji.remove(), 1000);
        }, i * 100);
    }
}

// クイズ開始
function startQuiz(mode) {
    const allQuestions = getAllQuestions();

    document.querySelector('h1').classList.add('hidden');
    document.querySelector('.subtitle').classList.add('hidden');
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('quizArea').classList.remove('hidden');
    document.getElementById('quizTitleHeader').classList.remove('hidden');

    if (mode === 'review') {
        // 間違えた問題のみを出題
        isDaily = false;
        questionList = getIncorrectQuestions(QUIZ_ID);
        if (questionList.length === 0) {
            // 間違えた問題がない場合はデイリーモードに戻す
            questionList = getWeightedRandomQuestions(QUIZ_ID, TOTAL_QUESTIONS, getDailyQuestionCount());
        }
        totalQuestions = questionList.length;
    } else if (mode.startsWith('daily')) {
        isDaily = true;
        const countFromUrl = parseInt(mode.replace('daily', ''));
        totalQuestions = countFromUrl || getDailyQuestionCount();
        questionList = getWeightedRandomQuestions(QUIZ_ID, TOTAL_QUESTIONS, totalQuestions);
    } else {
        isDaily = false;
        totalQuestions = TOTAL_QUESTIONS;
        questionList = [...allQuestions];
    }

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if(questionElement) {
            if (questionList.includes(i)) {
                if (i === questionList[0]) {
                    questionElement.classList.remove('hidden');
                } else {
                    questionElement.classList.add('hidden');
                }
            } else {
                questionElement.style.display = 'none';
            }
        }
    }

    currentQuestion = 0;
    updateQuestionNumbers();
    document.getElementById('total').textContent = totalQuestions;
    shuffleOptions(questionList[0]);
    updateProgress();
    updatePrevButtonVisibility();
}

// ランダム問題取得
function getRandomQuestions(count) {
    const allQuestions = getAllQuestions();
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 問題番号の表示を更新
function updateQuestionNumbers() {
    questionList.forEach((questionId, index) => {
        const questionElement = document.getElementById(`question${questionId}`);
        if(questionElement) {
            const questionNumber = questionElement.querySelector('.question-number');
            questionNumber.textContent = `問題 ${index + 1}`;
        }
    });
}

// 選択肢シャッフル
function shuffleOptions(questionId) {
    if (!questionId) return;
    const container = document
        .getElementById(`question${questionId}`)
        .querySelector('.options');
    if (!container) return;

    for (let i = container.children.length; i >= 0; i--) {
        const rand = Math.floor(Math.random() * i);
        if (container.children[rand]) {
            container.appendChild(container.children[rand]);
        }
    }
}

// 進捗更新
function updateProgress() {
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQ').textContent = currentQuestion + 1;
}

// 回答選択時の処理
function selectAnswer(selectedOption) {
    const currentQuestionId = questionList[currentQuestion];
    const currentQuestionElement = document.getElementById(`question${currentQuestionId}`);
    const options = currentQuestionElement.querySelectorAll('.option');
    const feedback = currentQuestionElement.querySelector('.feedback');
    const explanation = currentQuestionElement.querySelector('.explanation');
    const nextButton = document.querySelector('.next-button');
    const resultButton = document.querySelector('.result-button');

    const isCorrect = selectedOption.dataset.answer === 'true';
    let correctAnswerText = '';

    options.forEach(option => {
        if (option.dataset.answer === 'true') {
            correctAnswerText = option.textContent;
        }
    });

    options.forEach(option => {
        option.classList.add('disabled');
        if (option.dataset.answer === 'true') {
            option.classList.add('correct');
        } else if (option === selectedOption && option.dataset.answer === 'false') {
            option.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        feedback.textContent = '🎉 正解です！';
        feedback.className = 'feedback correct';
        score++;
        flashCorrect(selectedOption);
    } else {
        feedback.textContent = `❌ 不正解です。正解は「${correctAnswerText}」です。`;
        feedback.className = 'feedback incorrect';
    }

    // 問題ごとの結果を記録（復習・未挑戦モード用）
    if (typeof recordQuestionResult === 'function') {
        recordQuestionResult(QUIZ_ID, currentQuestionId, isCorrect);
    }

    feedback.style.display = 'block';
    explanation.classList.remove('hidden');

    if (currentQuestion < totalQuestions - 1) {
        nextButton.classList.remove('hidden');
    } else {
        resultButton.classList.remove('hidden');
    }

    updateScore();

    // フィードバックが画面上部に来るようにスクロール
    feedback.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 次の問題へ
function nextQuestion() {
    const currentQuestionId = questionList[currentQuestion];
    document.getElementById(`question${currentQuestionId}`).classList.add('hidden');

    currentQuestion++;
    const nextQuestionId = questionList[currentQuestion];

    const nextQuestionElement = document.getElementById(`question${nextQuestionId}`);
    shuffleOptions(nextQuestionId);
    nextQuestionElement.classList.remove('hidden');

    // 移動先の問題が回答済みかどうかを確認
    const isAnswered = nextQuestionElement.querySelector('.option.disabled') !== null;

    if (isAnswered) {
        // 回答済みの場合、適切なボタンを表示
        if (currentQuestion < totalQuestions - 1) {
            document.querySelector('.next-button').classList.remove('hidden');
            document.querySelector('.result-button').classList.add('hidden');
        } else {
            document.querySelector('.next-button').classList.add('hidden');
            // 振り返りモードでは結果発表ボタンは非表示
            if (isReviewMode) {
                document.querySelector('.result-button').classList.add('hidden');
            } else {
                document.querySelector('.result-button').classList.remove('hidden');
            }
        }
    } else {
        // 未回答の場合、両方非表示
        document.querySelector('.next-button').classList.add('hidden');
        document.querySelector('.result-button').classList.add('hidden');
    }

    updateProgress();
    updatePrevButtonVisibility();
}

// 前の問題へ
function prevQuestion() {
    if (currentQuestion <= 0) return;

    const currentQuestionId = questionList[currentQuestion];
    document.getElementById(`question${currentQuestionId}`).classList.add('hidden');

    currentQuestion--;
    const prevQuestionId = questionList[currentQuestion];

    const prevQuestionElement = document.getElementById(`question${prevQuestionId}`);
    prevQuestionElement.classList.remove('hidden');

    // 戻った問題が回答済みかどうかを確認
    const isAnswered = prevQuestionElement.querySelector('.option.disabled') !== null;

    if (isAnswered) {
        // 回答済みの場合、適切なボタンを表示
        if (currentQuestion < totalQuestions - 1) {
            document.querySelector('.next-button').classList.remove('hidden');
            document.querySelector('.result-button').classList.add('hidden');
        } else {
            document.querySelector('.next-button').classList.add('hidden');
            // 振り返りモードでは結果発表ボタンは非表示
            if (isReviewMode) {
                document.querySelector('.result-button').classList.add('hidden');
            } else {
                document.querySelector('.result-button').classList.remove('hidden');
            }
        }
    } else {
        // 未回答の場合、両方非表示
        document.querySelector('.next-button').classList.add('hidden');
        document.querySelector('.result-button').classList.add('hidden');
    }

    updateProgress();
    updatePrevButtonVisibility();

    // 前の問題の上部にスクロール
    prevQuestionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 「前の問題へ」ボタンの表示制御
function updatePrevButtonVisibility() {
    const prevButton = document.getElementById('prevButton');
    if (prevButton) {
        if (currentQuestion > 0) {
            prevButton.classList.remove('hidden');
        } else {
            prevButton.classList.add('hidden');
        }
    }
}

// 結果メッセージを取得（カスタマイズ可能）
function getResultMessage(score, totalQuestions) {
    // QUIZ_MESSAGES がグローバルで定義されていればそれを使用
    if (typeof QUIZ_MESSAGES !== 'undefined') {
        if (score === totalQuestions && QUIZ_MESSAGES.perfect) {
            return QUIZ_MESSAGES.perfect;
        } else if (score >= totalQuestions * 0.8 && QUIZ_MESSAGES.great) {
            return QUIZ_MESSAGES.great;
        } else if (score >= totalQuestions * 0.5 && QUIZ_MESSAGES.good) {
            return QUIZ_MESSAGES.good;
        } else if (QUIZ_MESSAGES.encourage) {
            return QUIZ_MESSAGES.encourage;
        }
    }

    // デフォルトメッセージ
    if (score === totalQuestions) {
        return {
            title: '🏆 完璧です！ 🏆',
            message: '全問正解！素晴らしい知識です。\n自信を持って業務に活かしてくださいね。'
        };
    } else if (score >= totalQuestions * 0.8) {
        return {
            title: '🌟 素晴らしい！ 🌟',
            message: '高得点です！重要ポイントをしっかり理解されています。\n間違えた箇所を復習すれば、さらに完璧になりますよ。'
        };
    } else if (score >= totalQuestions * 0.5) {
        return {
            title: '👍 よくできました！ 👍',
            message: '基本的な知識は身についています。\n解説を読み直して、知識を固めましょう。'
        };
    } else {
        return {
            title: '💪 これからが本番！ 💪',
            message: '良い復習の機会になりましたね。\nこのクイズを元に知識を整理していきましょう！'
        };
    }
}

// 最終結果表示
function showFinalScore() {
    questionList.forEach(questionId => {
        const qElem = document.getElementById(`question${questionId}`);
        if(qElem) qElem.classList.add('hidden');
    });
    document.querySelector('.next-button').classList.add('hidden');
    document.querySelector('.result-button').classList.add('hidden');
    document.querySelector('.quiz-status').classList.add('hidden');
    document.getElementById('quizArea').classList.add('hidden');
    document.querySelector('.quiz-container').classList.add('hidden');

    const percentage = Math.round((score / totalQuestions) * 100);

    // 結果発表エフェクト（満点かどうかで演出を変える）
    const isPerfect = score === totalQuestions;
    setTimeout(() => {
        celebrateResult(isPerfect);
    }, 300);

    // 結果を記録（エラーでも結果画面は表示する）
    let newBadges = [];
    try {
        if (typeof recordQuizResult === 'function') {
            const result = recordQuizResult(QUIZ_ID, score, totalQuestions);
            if (result && result._newBadges) {
                newBadges = result._newBadges;
            }
        }
    } catch (e) {
        console.error('結果記録中にエラー:', e);
    }

    const { title, message } = getResultMessage(score, totalQuestions);

    const resultTitleHTML = `<div class="result-title">🎊 結果発表 🎊</div>`;
    const scoreHTML = `<span class="final-score-highlight">最終スコア : ${score}/${totalQuestions}（${percentage}%）</span>`;
    const evaluationHTML = `<div class="result-evaluation">${title}</div>`;
    const messageHTML = `<div>${message.replace(/\n/g, '<br>')}</div>`;

    // 進捗情報を取得して表示（エラー時は空文字）
    let progressHTML = '';
    try {
        progressHTML = generateResultProgressHTML();
    } catch (e) {
        console.error('進捗HTML生成エラー:', e);
    }

    document.getElementById('resultDetail').innerHTML = resultTitleHTML + evaluationHTML + scoreHTML + messageHTML + progressHTML;

    // バッジ獲得表示
    try {
        const badgeArea = document.getElementById('badgeAchievement');
        if (badgeArea && newBadges.length > 0 && typeof renderBadgeAchievement === 'function') {
            badgeArea.innerHTML = renderBadgeAchievement(newBadges);
        } else if (badgeArea) {
            badgeArea.innerHTML = '';
        }
    } catch (e) {
        console.error('バッジ表示エラー:', e);
    }

    document.getElementById('finalResult').classList.remove('hidden');
    document.querySelector('.shuffle-button').classList.remove('hidden');
    // ボタンのテキストを設定値に更新
    const dailyCount = getDailyQuestionCount();
    document.getElementById('shuffleButton').innerHTML = '🎲 シャッフル' + dailyCount + '問<span class="btn-sub">別ジャンル</span>';
    document.getElementById('retryButton').innerHTML = '🔄 もう' + dailyCount + '問<span class="btn-sub">同ジャンル</span>';
    document.querySelector('.retry-button').classList.remove('hidden');
    document.querySelector('.record-button').classList.remove('hidden');
    document.querySelector('.home-button-small').classList.remove('hidden');
    document.querySelector('.top-link').classList.add('hidden');

    // 間違えた問題ボタンの表示制御
    const incorrectList = getIncorrectQuestions(QUIZ_ID);
    const reviewBtn = document.getElementById('reviewIncorrectButton');
    if (reviewBtn) {
        if (incorrectList.length > 0) {
            reviewBtn.classList.remove('hidden');
            reviewBtn.innerHTML = `❌ 間違えた問題を復習<span class="btn-sub">${incorrectList.length}問</span>`;
        } else {
            reviewBtn.classList.add('hidden');
        }
    }

    // トップへスクロール
    arrangeResultCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// クイズリセット
function resetQuiz() {
    document.getElementById('finalResult').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');
    document.querySelector('.top-link').classList.remove('hidden');
    score = 0;
    updateScore();

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if(questionElement){
            questionElement.style.display = '';
            questionElement.classList.add('hidden');

            const options = questionElement.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.remove('correct', 'incorrect', 'disabled');
            });

            questionElement.querySelector('.feedback').style.display = 'none';
            questionElement.querySelector('.explanation').classList.add('hidden');
        }
    }

    document.querySelector('.next-button').classList.add('hidden');
    document.querySelector('.result-button').classList.add('hidden');
    document.querySelector('.shuffle-button').classList.add('hidden');
    document.querySelector('.retry-button').classList.add('hidden');
    document.querySelector('.record-button').classList.add('hidden');
    document.querySelector('.home-button-small').classList.add('hidden');

    document.querySelector('.quiz-status').classList.remove('hidden');

    if (isDaily) {
        startQuiz('daily');
    } else {
        startQuiz('full');
    }
}

// ホームへ戻る
function goHome() {
    document.getElementById('finalResult').classList.add('hidden');
    document.getElementById('quizArea').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');
    document.querySelector('.top-link').classList.remove('hidden');

    document.querySelector('h1').classList.remove('hidden');
    document.querySelector('.subtitle').classList.remove('hidden');
    document.getElementById('quizTitleHeader').classList.add('hidden');

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if(questionElement) {
            questionElement.style.display = '';
            questionElement.classList.add('hidden');

            const options = questionElement.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.remove('correct', 'incorrect', 'disabled');
            });

            questionElement.querySelector('.feedback').style.display = 'none';
            questionElement.querySelector('.explanation').classList.add('hidden');
        }
    }

    document.querySelector('.next-button').classList.add('hidden');
    document.querySelector('.result-button').classList.add('hidden');
    document.querySelector('.shuffle-button').classList.add('hidden');
    document.querySelector('.retry-button').classList.add('hidden');
    document.querySelector('.record-button').classList.add('hidden');
    document.querySelector('.home-button-small').classList.add('hidden');
    document.getElementById('prevButton').classList.add('hidden');
    document.querySelector('.quiz-status').classList.remove('hidden');

    currentQuestion = 1;
    score = 0;
    totalQuestions = TOTAL_QUESTIONS;
    questionList = [];
    isDaily = false;

    updateScore();
    updateProgressStatus();

    document.getElementById('modeSelection').classList.remove('hidden');
}

// スコア更新
function updateScore() {
    document.getElementById('score').textContent = score;
}

// リザルト画面用の進捗HTML生成
function generateResultProgressHTML() {
    const incorrectList = getIncorrectQuestions(QUIZ_ID);
    const unansweredList = getUnansweredQuestions(QUIZ_ID, TOTAL_QUESTIONS);
    const correctNum = TOTAL_QUESTIONS - incorrectList.length - unansweredList.length;
    const progressPercent = Math.round((correctNum / TOTAL_QUESTIONS) * 100);
    const isPerfect = correctNum === TOTAL_QUESTIONS;

    return `
        <div class="result-progress-section">
            <div class="result-progress-title">📊 このクイズの進捗</div>
            <div class="result-progress-bar-container">
                <div class="result-progress-bar-fill ${isPerfect ? 'perfect' : ''}" style="width: ${progressPercent}%"></div>
            </div>
            <div class="result-progress-percentage">${isPerfect ? '🌸 ' : ''}${progressPercent}%${isPerfect ? ' マスター！' : ''}</div>
            <div class="result-progress-stats">
                <div class="result-progress-stat">
                    <span>✅ 正解</span>
                    <span>${correctNum}問</span>
                </div>
                <div class="result-progress-stat">
                    <span>❌ 間違い</span>
                    <span>${incorrectList.length}問</span>
                </div>
                <div class="result-progress-stat">
                    <span>🆕 未挑戦</span>
                    <span>${unansweredList.length}問</span>
                </div>
                <div class="result-progress-stat">
                    <span>📝 全問題</span>
                    <span>${TOTAL_QUESTIONS}問</span>
                </div>
            </div>
        </div>
    `;
}

// シャッフル：別ジャンルのクイズへ
function goToRandomQuiz() {
    // 重み付けでクイズを選択（未挑戦・間違いが多いクイズを優先）
    const selectedQuiz = getWeightedRandomQuiz(CURRENT_QUIZ_FILE);
    if (!selectedQuiz) {
        // フォールバック: 従来のランダム選択
        const otherQuizzes = ALL_QUIZZES.filter(q => q !== CURRENT_QUIZ_FILE);
        const randomQuiz = otherQuizzes[Math.floor(Math.random() * otherQuizzes.length)];
        const dailyCount = getDailyQuestionCount();
        window.location.href = encodeURI(randomQuiz) + `?mode=daily${dailyCount}`;
        return;
    }
    const dailyCount = getDailyQuestionCount();
    window.location.href = encodeURI(selectedQuiz) + `?mode=daily${dailyCount}`;
}

// もう○問：このクイズの今日の○問を再開
function restartThisQuiz() {
    window.location.href = encodeURI(CURRENT_QUIZ_FILE) + `?mode=daily`;
}

// 間違えた問題を復習
function reviewIncorrectQuestions() {
    const incorrectList = getIncorrectQuestions(QUIZ_ID);
    if (incorrectList.length === 0) return;

    window.location.href = encodeURI(CURRENT_QUIZ_FILE) + `?mode=review`;
}

// 問題を振り返る（結果画面から）
function reviewAllQuestions() {
    isReviewMode = true;

    // 結果画面を非表示
    document.getElementById('finalResult').classList.add('hidden');

    // クイズコンテナとクイズエリアを表示
    document.querySelector('.quiz-container').classList.remove('hidden');
    document.getElementById('quizArea').classList.remove('hidden');
    document.querySelector('.quiz-status').classList.remove('hidden');
    document.querySelector('.top-link').classList.remove('hidden');

    // 最初の問題から振り返り
    currentQuestion = 0;

    // 全問題を非表示にしてから最初の問題を表示
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if (questionElement) {
            if (questionList.includes(i)) {
                questionElement.style.display = '';
                questionElement.classList.add('hidden');
            }
        }
    }

    const firstQuestionId = questionList[0];
    document.getElementById(`question${firstQuestionId}`).classList.remove('hidden');

    // ボタンの表示を更新
    updateProgress();
    updatePrevButtonVisibility();
    updateNavigationButtons();

    // 「結果に戻る」ボタンを表示
    const backToResultBtn = document.getElementById('backToResultButton');
    if (backToResultBtn) {
        backToResultBtn.classList.remove('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 結果画面に戻る
function backToResult() {
    isReviewMode = false;

    // クイズエリアを非表示
    document.getElementById('quizArea').classList.add('hidden');
    document.querySelector('.quiz-container').classList.add('hidden');
    document.querySelector('.top-link').classList.add('hidden');

    // 問題を非表示
    questionList.forEach(questionId => {
        const qElem = document.getElementById(`question${questionId}`);
        if (qElem) qElem.classList.add('hidden');
    });

    // 結果画面を表示
    document.getElementById('finalResult').classList.remove('hidden');

    // 「結果に戻る」ボタンを非表示
    const backToResultBtn = document.getElementById('backToResultButton');
    if (backToResultBtn) {
        backToResultBtn.classList.add('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ナビゲーションボタンの表示を更新（振り返りモード対応）
function updateNavigationButtons() {
    const currentQuestionId = questionList[currentQuestion];
    const currentQuestionElement = document.getElementById(`question${currentQuestionId}`);
    const isAnswered = currentQuestionElement.querySelector('.option.disabled') !== null;

    if (isAnswered) {
        if (currentQuestion < totalQuestions - 1) {
            document.querySelector('.next-button').classList.remove('hidden');
            document.querySelector('.result-button').classList.add('hidden');
        } else {
            document.querySelector('.next-button').classList.add('hidden');
            // 振り返りモードでは結果発表ボタンは非表示（結果に戻るボタンを使う）
            if (isReviewMode) {
                document.querySelector('.result-button').classList.add('hidden');
            } else {
                document.querySelector('.result-button').classList.remove('hidden');
            }
        }
    } else {
        document.querySelector('.next-button').classList.add('hidden');
        document.querySelector('.result-button').classList.add('hidden');
    }
}

// クリックイベントリスナー
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('option') && !e.target.classList.contains('disabled')) {
        selectAnswer(e.target);
    }
});
