# クイズHTML仕様書（詳細版）

このドキュメントは、新しいクイズHTMLファイルを追加する際の標準フォーマットを定義します。
Claude Codeは新しいクイズファイルが追加された際、この仕様書に従って修正・統合を行います。

---

## 1. 概要

### 技術構成

| 項目 | 内容 |
|------|------|
| CSS | 外部ファイル `css/quiz.css`（インラインCSS不要） |
| JavaScript | `quizzes/quiz-config.js` を読み込み |
| データ保存 | LocalStorage（`hikari_quiz_data`） |

### 出題モード

| モード | 説明 |
|--------|------|
| 今日の3問 | 弱点優先で問題を選択（間違い→未挑戦→正解済み） |
| 全問モード | 全問題を順番に出題 |
| 復習モード | 間違えた問題のみ出題（条件付き表示） |

### 弱点優先アルゴリズム

問題選択時の重み付け：
- **間違えた問題**: 重み 10
- **未挑戦の問題**: 重み 20
- **正解済み問題**: 重み 1

---

## 2. quiz-config.js への登録

新しいクイズは `QUIZ_LIST` 配列に追加します。

```javascript
{
    id: 'unique-quiz-id',           // 一意のID（英数字とハイフン）
    name: 'クイズ名',                // 表示名
    file: 'ファイル名.html',         // HTMLファイル名
    totalQuestions: 28,             // 総問題数
    icon: '👓',                     // アイコン絵文字
    category: 'staff',              // 'staff' または 'patient'
    description: 'クイズの説明文',   // 簡潔な説明
    color: 'amber'                  // カラーテーマ（下記参照）
}
```

### カラーテーマ一覧

| 色名 | 用途例 | CSSクラス |
|------|--------|-----------|
| `blue` | 院内ルール、近視 | `.quiz-card.blue` |
| `cyan` | コンタクトレンズ、白内障、流涙症 | `.quiz-card.cyan` |
| `teal` | 花粉症 | `.quiz-card.teal` |
| `green` | 緑内障 | `.quiz-card.green` |
| `amber` | 老眼鏡、遠用メガネ | `.quiz-card.amber` |
| `purple` | 斜視、弱視、小児近視、色覚異常 | `.quiz-card.purple` |
| `indigo` | 検診、糖尿病網膜症、黄斑前膜 | `.quiz-card.indigo` |

---

## 3. HTMLファイル構造

### 3.1 基本構造

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
        <!-- ヘッダー部分 -->
        <h1>絵文字 クイズ名 絵文字</h1>
        <div class="subtitle">眼科スタッフ向け - サブタイトル</div>
        <div id="quizTitleHeader" class="quiz-title-header hidden">絵文字 クイズ名</div>
        <div class="top-link"><a href="../index.html">← トップページへ</a></div>

        <!-- モード選択画面 -->
        <div id="modeSelection" class="mode-selection">
            <!-- モードボタン -->
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

            <!-- 復習ボタン（条件付き表示） -->
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

            <!-- 問題カード -->
            <div class="question-card" id="question1">
                <div class="question-number">問題 1</div>
                <div class="question-text">問題文</div>
                <div class="options">
                    <div class="option" data-answer="true">正解の選択肢</div>
                    <div class="option" data-answer="false">不正解1</div>
                    <div class="option" data-answer="false">不正解2</div>
                    <div class="option" data-answer="false">不正解3</div>
                </div>
                <div class="feedback"></div>
                <div class="explanation hidden">
                    <strong>解説：</strong>解説文
                </div>
            </div>

            <!-- 問題2以降（hiddenクラス付き） -->
            <div class="question-card hidden" id="question2">...</div>

            <div class="buttons">
                <button class="next-button hidden" onclick="nextQuestion()">次の問題へ</button>
                <button class="result-button hidden" onclick="showFinalScore()">🎊 結果発表へ 🎊</button>
            </div>
        </div>
    </div>

    <!-- quiz-config.js読み込み -->
    <script src="quiz-config.js"></script>
    <script>
        // JavaScript（後述）
    </script>

    <!-- 結果表示カード（quiz-container の外に配置） -->
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

**重要**: `#finalResult`は`.quiz-container`の**外**に配置

---

## 4. 要素の表示/非表示ルール

| 状態 | h1 | subtitle | quizTitleHeader | top-link | modeSelection | quizArea | quiz-container | finalResult |
|------|-----|----------|-----------------|----------|---------------|----------|----------------|-------------|
| 初期状態 | 表示 | 表示 | hidden | 表示 | 表示 | hidden | 表示 | hidden |
| クイズ中 | hidden | hidden | 表示 | **表示** | hidden | 表示 | 表示 | hidden |
| 結果画面 | hidden | hidden | hidden | hidden | hidden | hidden | **hidden** | 表示 |
| ホーム後 | 表示 | 表示 | hidden | 表示 | 表示 | hidden | 表示 | hidden |

---

## 5. 結果画面のボタン構成

| ボタン | クラス名 | 色 | 機能 |
|--------|----------|-----|------|
| シャッフルN問 | `.shuffle-button` | ピンク #e91e63 | 弱点優先で別ジャンルへ移動 |
| もうN問 | `.retry-button` | ブルー #1976d2 | 同じクイズで再挑戦 |
| 間違えた問題を復習 | `.review-incorrect-button` | オレンジ #ff5722 | 間違えた問題のみ出題（条件付き） |
| 学習記録 | `.record-button` | ティール #00897b | マイページへ移動 |
| ホーム | `.home-button-small` | パープル #5e35b1 | トップページへ移動 |

---

## 6. quiz-config.js の共通関数

以下の関数が`quiz-config.js`で提供されています：

| 関数名 | 説明 |
|--------|------|
| `getQuizData()` | LocalStorageからクイズデータを取得 |
| `recordQuizResult(quizId, score, total)` | クイズ結果を記録 |
| `recordQuestionResult(quizId, questionId, isCorrect)` | 問題ごとの正誤を記録 |
| `getWeightedRandomQuestions(quizId, total, count)` | 弱点優先で問題を選択 |
| `getWeightedRandomQuiz(currentFile)` | 弱点優先で次のクイズを選択 |
| `getIncorrectQuestions(quizId)` | 間違えた問題のリストを取得 |
| `getDailyQuestionCount()` | 設定された「今日のN問」の数を取得 |
| `generateResultProgressHTML()` | 結果画面の進捗表示HTMLを生成 |

---

## 7. 必須JavaScript

### 7.1 定数と変数

```javascript
const QUIZ_ID = 'unique-quiz-id';  // quiz-config.jsのidと一致
const TOTAL_QUESTIONS = 10;        // 総問題数

let currentQuestion = 1;
let score = 0;
let totalQuestions = TOTAL_QUESTIONS;
let questionList = [];
let isDaily = false;

const allQuestions = [1, 2, 3, ..., 10];  // 問題番号の配列
```

### 7.2 ページ読み込み時の処理

```javascript
document.addEventListener('DOMContentLoaded', function() {
    updateProgressStatus();

    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');

    // 今日の○問ボタンテキストを更新
    const dailyCount = getDailyQuestionCount();
    const dailyButton = document.querySelector('.mode-button');
    if (dailyButton) {
        dailyButton.innerHTML = `📋 今日の${dailyCount}問`;
    }

    // URLパラメータでモード自動開始
    if (mode && mode.startsWith('daily')) {
        startQuiz('daily');
    }
});
```

### 7.3 クイズ開始（startQuiz）

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

### 7.4 回答選択（selectAnswer）

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

    // スクロール（block: 'start'を使用）
    feedback.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
```

### 7.5 結果表示（showFinalScore）

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
    setTimeout(() => celebrateResult(isPerfect), 300);

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

### 7.6 モード選択に戻る（goHome）

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

### 7.7 その他の必須関数

```javascript
// 選択肢シャッフル
function shuffleOptions(questionId) {
    if (!questionId) return;
    const container = document.getElementById(`question${questionId}`).querySelector('.options');
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
        navigator.vibrate(isPerfect ? [100, 50, 100, 50, 100] : [50, 30, 50]);
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
        if (isCorrect) correctCount++;
        else incorrectCount++;
    });
    const unansweredCount = TOTAL_QUESTIONS - incorrectCount - correctCount;

    document.getElementById('incorrectCount').textContent = incorrectCount + '問';
    document.getElementById('unansweredCount').textContent = unansweredCount + '問';
    document.getElementById('correctCount').textContent = correctCount + '問';
    document.getElementById('totalQuestionsCount').textContent = TOTAL_QUESTIONS + '問';

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
    setTimeout(() => startQuiz('review'), 100);
}
```

---

## 8. チェックリスト

### quiz-config.js
- [ ] `QUIZ_LIST`にエントリを追加
- [ ] `id`が一意であること
- [ ] `totalQuestions`が正しいこと
- [ ] `file`がファイル名と一致

### HTMLファイル
- [ ] `<link rel="stylesheet" href="../css/quiz.css">`がある
- [ ] `<script src="quiz-config.js">`の読み込みがある
- [ ] `QUIZ_ID`と`TOTAL_QUESTIONS`が正しく設定されている
- [ ] `allQuestions`配列が問題数と一致している
- [ ] `#finalResult`が`quiz-container`の**外**に配置されている
- [ ] 問題1は`hidden`なし、問題2以降は`hidden`クラスあり
- [ ] 選択肢に`onclick="selectAnswer(this)"`がある

### JavaScript関数
- [ ] `startQuiz`: top-linkを非表示にしていない
- [ ] `showFinalScore`: quizAreaとquiz-containerを非表示にする
- [ ] `showFinalScore`: top-linkを非表示にする
- [ ] `goHome`: quiz-containerとtop-linkを表示に戻す
- [ ] スクロール: `block: 'start'`を使用

### 動作確認
- [ ] 今日の3問モードで動作する
- [ ] 全問モードで動作する
- [ ] 結果が正しく記録される（LocalStorage）
- [ ] マイページに進捗が表示される

---

## 9. よくある問題と解決方法

### クイズ中にトップリンクが表示されない
**原因**: `startQuiz`で`top-link`を`hidden`にしている
**解決**: `startQuiz`から`top-link`を非表示にするコードを削除

### 結果画面に余分なカードが表示される
**原因**: `showFinalScore`で`quiz-container`を非表示にしていない
**解決**: `document.querySelector('.quiz-container').classList.add('hidden');`を追加

### モード選択に戻ると画面が崩れる
**原因**: `goHome`で`quiz-container`を表示に戻していない
**解決**: `document.querySelector('.quiz-container').classList.remove('hidden');`を追加

### 新しい問題が常に表示される
**原因**: forループの上限が古い問題数のまま
**解決**: 全てのforループを新しい`TOTAL_QUESTIONS`に更新

---

## 10. 現在のクイズ一覧

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
| 2024-01 | 初版作成（老眼鏡合わせクイズを基に標準化） |
| 2025-01 | 外部CSSファイル化（css/quiz.css） |
| 2025-01 | 結果画面ボタン構成を刷新（シャッフル/リトライ/復習/記録/ホーム） |
| 2025-01 | 弱点優先の重み付け選択を実装 |
| 2025-01 | モードを2モード（今日の3問、全問）に簡略化 |
| 2025-01 | 学習状況表示（間違い/未挑戦/正解/全問題）を追加 |
| 2025-01 | クイズ一覧を18クイズに更新 |
