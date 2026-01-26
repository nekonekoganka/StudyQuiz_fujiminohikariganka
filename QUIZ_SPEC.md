# クイズHTML仕様書（簡易版）

このドキュメントは、新しいクイズHTMLを作成する際のリファレンスです。
他のAIにクイズ作成を依頼する場合は、このドキュメントを渡してください。

---

## 概要

- **CSS**: 外部ファイル `css/quiz.css` を使用（インラインCSSは不要）
- **JavaScript**: `quizzes/quiz-config.js` を読み込んで使用
- **モード**: 2モード（今日の3問、全問モード）+ 復習モード
- **弱点優先**: 今日の3問は間違い→未挑戦→正解済みの優先順で出題

---

## 1. 新規クイズ作成の手順

### Step 1: quiz-config.js にエントリを追加

```javascript
{
    id: 'unique-quiz-id',           // 一意のID（英数字とハイフン）
    name: 'クイズ名',                // 表示名
    file: 'クイズファイル名.html',    // HTMLファイル名
    totalQuestions: 10,             // 総問題数
    icon: '👁️',                     // アイコン絵文字
    category: 'staff',              // 'staff'（スタッフ向け）
    description: 'クイズの説明文',   // 簡潔な説明
    color: 'cyan'                   // カラーテーマ
}
```

### 利用可能なカラーテーマ

| 色名 | 用途例 |
|------|--------|
| `blue` | 院内ルール、近視 |
| `cyan` | コンタクトレンズ、白内障 |
| `teal` | 花粉症 |
| `green` | 緑内障 |
| `amber` | メガネ系 |
| `purple` | 斜視、弱視、小児 |
| `indigo` | 検診、糖尿病網膜症 |

---

## 2. HTMLファイル構造

### 基本構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>クイズ名 - 眼科スタッフ向け</title>
    <link rel="stylesheet" href="../css/quiz.css">
</head>
<body>
    <div class="quiz-container">
        <!-- ヘッダー -->
        <h1>絵文字 クイズ名 絵文字</h1>
        <div class="subtitle">眼科スタッフ向け - サブタイトル</div>
        <div id="quizTitleHeader" class="quiz-title-header hidden">絵文字 クイズ名</div>
        <div class="top-link"><a href="../index.html">← トップページへ</a></div>

        <!-- モード選択画面 -->
        <div id="modeSelection" class="mode-selection">
            <button class="mode-button" onclick="startQuiz('daily')">
                📋 今日の3問
            </button>
            <button class="mode-button" onclick="startQuiz('full')">
                📚 全問モード（全N問）
            </button>

            <!-- 学習状況表示 -->
            <div id="progressStatus" class="progress-status">
                <div class="progress-status-item">
                    <span>❌ 間違えた問題:</span>
                    <span id="incorrectCount">0問</span>
                </div>
                <div class="progress-status-item">
                    <span>🆕 未挑戦の問題:</span>
                    <span id="unansweredCount">N問</span>
                </div>
                <div class="progress-status-item">
                    <span>✅ 正解した問題:</span>
                    <span id="correctCount">0問</span>
                </div>
                <div class="progress-status-item">
                    <span>📊 全問題数:</span>
                    <span id="totalQuestionsCount">N問</span>
                </div>
            </div>

            <!-- 復習ボタン（間違いがある場合のみ表示） -->
            <button id="reviewModeButton" class="review-mode-button hidden" onclick="startQuiz('review')">
                ❌ 間違えた問題だけ復習
                <span class="btn-sub">苦手を克服しよう</span>
            </button>

            <div class="mode-description">
                <strong>今日の3問:</strong> 間違い・未挑戦を優先出題<br>
                <strong>全問モード:</strong> 全N問を順番に出題
            </div>
        </div>

        <!-- クイズエリア -->
        <div id="quizArea" class="hidden">
            <div class="quiz-status">
                <div class="status-row">
                    <span class="question-progress">問題 <span id="currentQ">1</span> / <span id="total">N</span></span>
                    <span class="score-display">正解: <span id="score">0</span></span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" id="progressBar"></div>
                </div>
            </div>

            <!-- 問題カード（問題数分作成） -->
            <div class="question-card" id="question1">
                <div class="question-number">問題 1</div>
                <div class="question-text">問題文をここに記載</div>
                <div class="options">
                    <div class="option" data-answer="true">正解の選択肢</div>
                    <div class="option" data-answer="false">不正解の選択肢1</div>
                    <div class="option" data-answer="false">不正解の選択肢2</div>
                    <div class="option" data-answer="false">不正解の選択肢3</div>
                </div>
                <div class="feedback"></div>
                <div class="explanation hidden">
                    <strong>解説：</strong>解説文をここに記載
                </div>
            </div>

            <!-- 問題2以降はhiddenクラスを追加 -->
            <div class="question-card hidden" id="question2">
                <!-- ... -->
            </div>

            <div class="buttons">
                <button class="next-button hidden" onclick="nextQuestion()">次の問題へ</button>
                <button class="result-button hidden" onclick="showFinalScore()">🎊 結果発表へ 🎊</button>
            </div>
        </div>
    </div>

    <!-- quiz-config.js 読み込み -->
    <script src="quiz-config.js"></script>

    <script>
        // ここにJavaScriptを記述（後述）
    </script>

    <!-- 結果表示カード（quiz-containerの外に配置） -->
    <div id="finalResult" class="final-score-card hidden">
      <div id="resultDetail" class="result-detail"></div>
      <div class="result-buttons">
        <div class="result-buttons-row">
          <button id="shuffleButton" class="shuffle-button hidden" onclick="goToRandomQuiz()">
            🎲 別のクイズへ
            <span class="btn-sub">ランダム選択</span>
          </button>
          <button id="retryButton" class="retry-button hidden" onclick="restartThisQuiz()">
            🔄 もう一度
            <span class="btn-sub">同じクイズ</span>
          </button>
        </div>
        <div class="result-buttons-row" style="margin-bottom: 12px;">
          <button id="reviewIncorrectButton" class="review-incorrect-button hidden" onclick="reviewIncorrectQuestions()">
            ❌ 間違えた問題を復習
            <span class="btn-sub">苦手を克服</span>
          </button>
        </div>
        <div class="result-buttons-row secondary">
          <a href="../mypage.html" class="record-button hidden">📊 学習記録</a>
          <a href="../index.html" class="home-button-small hidden">🏠 ホーム</a>
        </div>
      </div>
    </div>
</body>
</html>
```

---

## 3. 必須JavaScript

以下のJavaScriptを`<script>`タグ内に記述してください。

### 3.1 定数と変数

```javascript
const QUIZ_ID = 'unique-quiz-id';  // quiz-config.jsのidと一致させる
const TOTAL_QUESTIONS = 10;        // 総問題数

let currentQuestion = 1;
let score = 0;
let totalQuestions = TOTAL_QUESTIONS;
let questionList = [];
let isDaily = false;

const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // 問題番号の配列
```

### 3.2 ページ読み込み時の処理

```javascript
document.addEventListener('DOMContentLoaded', function() {
    updateProgressStatus();

    // URLパラメータでモード自動開始
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');

    // 今日の○問ボタンテキストを更新
    const dailyCount = getDailyQuestionCount();
    const dailyButton = document.querySelector('.mode-button');
    if (dailyButton) {
        dailyButton.innerHTML = `📋 今日の${dailyCount}問`;
    }

    if (mode && mode.startsWith('daily')) {
        startQuiz('daily');
    }
});
```

### 3.3 主要な関数

**startQuiz** - クイズ開始

```javascript
function startQuiz(mode) {
    document.querySelector('h1').classList.add('hidden');
    document.querySelector('.subtitle').classList.add('hidden');
    document.getElementById('quizTitleHeader').classList.remove('hidden');
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('quizArea').classList.remove('hidden');

    score = 0;
    updateScore();

    if (mode === 'daily') {
        isDaily = true;
        totalQuestions = getDailyQuestionCount();
        questionList = getWeightedRandomQuestions(QUIZ_ID, TOTAL_QUESTIONS, totalQuestions);
    } else if (mode === 'review') {
        isDaily = false;
        const incorrectList = getIncorrectQuestions(QUIZ_ID);
        questionList = incorrectList.length > 0 ? incorrectList : [...allQuestions];
        totalQuestions = questionList.length;
    } else {
        isDaily = false;
        totalQuestions = TOTAL_QUESTIONS;
        questionList = [...allQuestions];
    }

    // 問題の表示制御
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if(questionElement) {
            if (questionList.includes(i)) {
                questionElement.style.display = '';
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
}
```

**selectAnswer** - 回答選択時

```javascript
function selectAnswer(selectedOption) {
    const currentQuestionId = questionList[currentQuestion];
    const currentQuestionElement = document.getElementById(`question${currentQuestionId}`);
    const options = currentQuestionElement.querySelectorAll('.option');
    const feedback = currentQuestionElement.querySelector('.feedback');
    const explanation = currentQuestionElement.querySelector('.explanation');

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

    // 問題ごとの結果を記録（必須）
    if (typeof recordQuestionResult === 'function') {
        recordQuestionResult(QUIZ_ID, currentQuestionId, isCorrect);
    }

    feedback.style.display = 'block';
    explanation.classList.remove('hidden');

    if (currentQuestion < totalQuestions - 1) {
        document.querySelector('.next-button').classList.remove('hidden');
    } else {
        document.querySelector('.result-button').classList.remove('hidden');
    }

    updateScore();

    // フィードバックが画面上部に来るようにスクロール
    feedback.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
```

**showFinalScore** - 結果表示

```javascript
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

    // 結果発表エフェクト
    const isPerfect = score === totalQuestions;
    setTimeout(() => {
        celebrateResult(isPerfect);
    }, 300);

    // 結果を記録（必須）
    if (typeof recordQuizResult === 'function') {
        recordQuizResult(QUIZ_ID, score, totalQuestions);
    }

    // 評価メッセージ
    let title, message;
    if (score === totalQuestions) {
        title = '🏆 完璧です！ 🏆';
        message = '全問正解！素晴らしいです。';
    } else if (score >= totalQuestions * 0.8) {
        title = '🌟 素晴らしい！ 🌟';
        message = '高得点です！';
    } else if (score >= totalQuestions * 0.5) {
        title = '👍 よくできました！ 👍';
        message = '基本的な知識は身についています。';
    } else {
        title = '💪 これからが本番！ 💪';
        message = '良い復習の機会になりましたね。';
    }

    const resultTitleHTML = `<div class="result-title">🎊 結果発表 🎊</div>`;
    const scoreHTML = `<span class="final-score-highlight">最終スコア : ${score}/${totalQuestions}（${percentage}%）</span>`;
    const evaluationHTML = `<div class="result-evaluation">${title}</div>`;
    const messageHTML = `<div>${message}</div>`;
    const progressHTML = generateResultProgressHTML();

    document.getElementById('resultDetail').innerHTML = resultTitleHTML + evaluationHTML + scoreHTML + messageHTML + progressHTML;

    document.getElementById('finalResult').classList.remove('hidden');
    document.querySelector('.shuffle-button').classList.remove('hidden');

    // ボタンテキストを設定値に更新
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

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

**goHome** - モード選択画面に戻る

```javascript
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
```

### 3.4 その他の必須関数

```javascript
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

// スコア更新
function updateScore() {
    document.getElementById('score').textContent = score;
}

// 問題番号更新
function updateQuestionNumbers() {
    questionList.forEach((questionId, index) => {
        const questionElement = document.getElementById(`question${questionId}`);
        if(questionElement) {
            const questionNumber = questionElement.querySelector('.question-number');
            questionNumber.textContent = `問題 ${index + 1}`;
        }
    });
}

// 次の問題へ
function nextQuestion() {
    const currentQuestionId = questionList[currentQuestion];
    document.getElementById(`question${currentQuestionId}`).classList.add('hidden');

    currentQuestion++;
    const nextQuestionId = questionList[currentQuestion];

    shuffleOptions(nextQuestionId);
    document.getElementById(`question${nextQuestionId}`).classList.remove('hidden');
    document.querySelector('.next-button').classList.add('hidden');
    updateProgress();
}

// 正解フラッシュ効果
function flashCorrect(element) {
    const card = element.closest('.question-card');
    if (card) {
        card.classList.add('correct-flash');
        setTimeout(() => card.classList.remove('correct-flash'), 400);
    }
}

// 結果発表エフェクト
function celebrateResult(isPerfect) {
    if (navigator.vibrate) {
        if (isPerfect) {
            navigator.vibrate([100, 50, 100, 50, 100]);
        } else {
            navigator.vibrate([50, 30, 50]);
        }
    }

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

// 学習状況表示の更新
function updateProgressStatus() {
    const data = getQuizData();
    const progress = data.progress || {};
    const quizProgress = progress[QUIZ_ID] || {};
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
    const unansweredCount = TOTAL_QUESTIONS - incorrectCount - correctCount;

    document.getElementById('incorrectCount').textContent = incorrectCount + '問';
    document.getElementById('unansweredCount').textContent = unansweredCount + '問';
    document.getElementById('correctCount').textContent = correctCount + '問';
    document.getElementById('totalQuestionsCount').textContent = TOTAL_QUESTIONS + '問';

    // 復習ボタンの表示制御
    const reviewBtn = document.getElementById('reviewModeButton');
    if (reviewBtn) {
        if (incorrectCount > 0) {
            reviewBtn.classList.remove('hidden');
            reviewBtn.innerHTML = `❌ 間違えた問題だけ復習（${incorrectCount}問）<span class="btn-sub">苦手を克服しよう</span>`;
        } else {
            reviewBtn.classList.add('hidden');
        }
    }
}

// 別ジャンルへ移動（弱点優先）
function goToRandomQuiz() {
    const nextQuiz = getWeightedRandomQuiz(decodeURIComponent(location.pathname.split('/').pop()));
    if (nextQuiz) {
        const dailyCount = getDailyQuestionCount();
        window.location.href = nextQuiz + '?mode=daily' + dailyCount;
    }
}

// 同じクイズで再挑戦
function restartThisQuiz() {
    const dailyCount = getDailyQuestionCount();
    window.location.href = window.location.pathname + '?mode=daily' + dailyCount;
}

// 間違えた問題を復習
function reviewIncorrectQuestions() {
    goHome();
    setTimeout(() => {
        startQuiz('review');
    }, 100);
}
```

---

## 4. 問題の追加・修正時の注意点

問題数を変更する場合、以下を**すべて**更新してください：

| 更新箇所 | 説明 |
|----------|------|
| `TOTAL_QUESTIONS` | JavaScript定数 |
| `allQuestions` | 問題番号の配列 |
| `quiz-config.js` | `totalQuestions` の値 |
| モードボタンの表示 | 「全N問」の表示 |
| 学習状況表示 | 初期値の「N問」 |

---

## 5. チェックリスト

新しいクイズを追加する際の確認項目：

### quiz-config.js
- [ ] `QUIZ_LIST`にエントリを追加
- [ ] `id`が一意であること
- [ ] `totalQuestions`が正しいこと

### HTMLファイル
- [ ] `<link rel="stylesheet" href="../css/quiz.css">`がある
- [ ] `<script src="quiz-config.js">`がある
- [ ] `QUIZ_ID`と`TOTAL_QUESTIONS`が正しく設定されている
- [ ] `allQuestions`配列が問題数と一致している
- [ ] `#finalResult`が`quiz-container`の**外**に配置されている
- [ ] 問題1は`hidden`なし、問題2以降は`hidden`クラスあり

### 動作確認
- [ ] 今日の3問モードで動作する
- [ ] 全問モードで動作する
- [ ] 結果が正しく記録される
- [ ] マイページに進捗が表示される

---

## 6. 現在のクイズ一覧

| ID | クイズ名 | 問題数 | 色 |
|----|---------|--------|-----|
| contact-basic | CL処方クイズ | 29問 | cyan |
| cl_complication | CL合併症クイズ | 10問 | cyan |
| cl_makeup | CLの種類と使い方クイズ | 10問 | cyan |
| enyo-megane | 遠用メガネのクイズ | 28問 | amber |
| megane-awase | 老眼鏡合わせクイズ | 28問 | amber |
| kinshi | 近視クイズ | 10問 | blue |
| kafunsho | 花粉症クイズ | 16問 | teal |
| hakunaisho | 白内障クイズ | 10問 | cyan |
| ryokunaisho | 緑内障クイズ | 17問 | green |
| jakushi | 弱視クイズ | 15問 | purple |
| shashi | 斜視クイズ | 10問 | purple |
| pediatric_myopia | 小児近視対策クイズ | 10問 | purple |
| diabetic_retinopathy | 糖尿病網膜症クイズ | 10問 | indigo |
| epiphora | 流涙症クイズ | 8問 | cyan |
| macular_membrane | 黄斑前膜クイズ | 8問 | indigo |
| color_vision | 色覚異常クイズ | 9問 | purple |
| ryokunaisho-kenshin | 検診の制度クイズ | 14問 | indigo |
| innai-rule | 院内ルール確認クイズ | 15問 | blue |

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2025-01 | 外部CSSファイル化（css/quiz.css） |
| 2025-01 | 結果画面ボタン構成を刷新（シャッフル/リトライ/復習/記録/ホーム） |
| 2025-01 | 弱点優先の重み付け選択を実装 |
| 2025-01 | モードを2モード（今日の3問、全問）に簡略化 |
| 2025-01 | 学習状況表示（間違い/未挑戦/正解/全問題）を追加 |

---

**詳細仕様**: [docs/QUIZ_SPECIFICATION.md](./docs/QUIZ_SPECIFICATION.md)
