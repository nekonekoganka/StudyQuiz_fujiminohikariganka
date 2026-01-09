# クイズHTML仕様書

このドキュメントは、院内ルール確認クイズをベースにしたクイズHTMLの仕様をまとめたものです。
他のクイズHTMLに同じ機能を実装する際のリファレンスとして使用してください。

---

## 今回の改善内容まとめ

### UI/UX改善

| 項目 | 内容 |
|------|------|
| 結果画面の整理 | 空白カードを削除、1つのカードに統合 |
| ボタン削減 | 結果画面は「モード選択に戻る」「トップページへ」の2つのみ |
| 自動スクロール | 回答選択後、フィードバック部分まで自動スクロール |
| トップへスクロール | 結果発表時、画面トップへスクロール |

### デザイン統一

| 項目 | 内容 |
|------|------|
| トップページボタン | 紫グラデーション（`#667eea → #764ba2`）で統一 |
| クイズ中の上部リンク | ボタンスタイルに変更（結果画面と同じデザイン） |

### エフェクト

| タイミング | 演出 |
|-----------|------|
| 正解時 | カードが緑色にフラッシュ |
| 結果発表（通常） | 絵文字8個（🎉⭐✨👏🎊）+ 振動 |
| 結果発表（満点） | 絵文字15個（🎉🏆👑💯⭐✨🌟🥇）+ 長め振動 |

---

## HTML構造

```
body
├── div.quiz-container
│   ├── h1（タイトル）
│   ├── div.subtitle
│   ├── div.top-link > a（トップページへリンク）
│   ├── div#modeSelection（モード選択画面）
│   │   ├── button.mode-button × 4
│   │   └── div.mode-description
│   └── div#quizArea.hidden（クイズエリア）
│       ├── div.quiz-status（スコア・進捗バー）
│       └── div.question-card#question{N} × 問題数
│
└── div#finalResult.final-score-card.hidden（結果画面）
    ├── div#resultDetail.result-detail
    └── div.buttons
        ├── button.home-button（モード選択に戻る）
        └── a.top-button（トップページへ）
```

**重要**: `#finalResult`は`.quiz-container`の**外**に配置

---

## 主要なCSS

### トップページボタン（統一デザイン）

```css
/* クイズ中の上部リンク */
.top-link a {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 25px;
    transition: all 0.3s ease;
    display: inline-block;
}

.top-link a:active {
    transform: scale(0.97);
}

@media (min-width: 768px) {
    .top-link a:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }
}

/* 結果画面のボタン */
.top-button {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 15px 35px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    margin: 10px 10px;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}
```

### 正解フラッシュ効果

```css
.correct-flash {
    animation: flashGreen 0.4s ease-out;
}

@keyframes flashGreen {
    0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
    50% { box-shadow: 0 0 20px 10px rgba(76, 175, 80, 0.4); }
    100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
}
```

### 絵文字アニメーション

```css
.celebrate-emoji {
    position: fixed;
    font-size: 40px;
    pointer-events: none;
    z-index: 9999;
    animation: celebrate 1s ease-out forwards;
}

@keyframes celebrate {
    0% {
        opacity: 1;
        transform: translateY(0) scale(0.5) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: translateY(-60px) scale(1.2) rotate(15deg);
    }
    100% {
        opacity: 0;
        transform: translateY(-120px) scale(0.8) rotate(-10deg);
    }
}
```

---

## 主要なJavaScript関数

### 正解時フラッシュ効果

```javascript
function flashCorrect(element) {
    const card = element.closest('.question-card');
    if (card) {
        card.classList.add('correct-flash');
        setTimeout(() => card.classList.remove('correct-flash'), 400);
    }
}
```

### 結果発表エフェクト

```javascript
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
```

### selectAnswer内の修正ポイント

```javascript
if (isCorrect) {
    feedback.textContent = '🎉 正解です！';
    feedback.className = 'feedback correct';
    score++;
    flashCorrect(selectedOption);  // ← 追加
} else {
    // ...
}

// 自動スクロール追加
setTimeout(() => {
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
}, 100);
```

### showFinalScore内の修正ポイント

```javascript
// quiz-containerを非表示
document.querySelector('.quiz-container').classList.add('hidden');

// ボタン表示（reset-buttonは削除）
document.querySelector('.home-button').classList.remove('hidden');
document.querySelector('.top-button').classList.remove('hidden');
document.querySelector('.top-link').classList.add('hidden');

// トップへスクロール
window.scrollTo({ top: 0, behavior: 'smooth' });

// 結果発表エフェクト
const isPerfect = score === totalQuestions;
setTimeout(() => {
    celebrateResult(isPerfect);
}, 300);
```

### resetQuiz / goHome 内の修正ポイント

```javascript
// quiz-containerを再表示
document.querySelector('.quiz-container').classList.remove('hidden');

// reset-buttonの参照を削除
// document.querySelector('.reset-button').classList.add('hidden'); ← 削除
```

---

## 結果画面のHTML

```html
<div id="finalResult" class="final-score-card hidden">
  <div id="resultDetail" class="result-detail"></div>
  <div class="buttons">
    <button class="home-button hidden" onclick="goHome()">モード選択に戻る</button>
    <a href="../index.html" class="top-button hidden">トップページへ</a>
  </div>
</div>
```

**注意**: `reset-button`（クイズをやり直す）は削除済み

---

## 他クイズHTMLへの適用チェックリスト

- [ ] CSS: `.top-link a` スタイルを紫グラデーションに変更
- [ ] CSS: `.correct-flash` と `@keyframes flashGreen` を追加
- [ ] CSS: `.celebrate-emoji` と `@keyframes celebrate` を追加
- [ ] JS: `flashCorrect()` 関数を追加
- [ ] JS: `celebrateResult()` 関数を追加
- [ ] JS: `selectAnswer()` に `flashCorrect()` と自動スクロールを追加
- [ ] JS: `showFinalScore()` に quiz-container非表示、スクロール、エフェクトを追加
- [ ] JS: `resetQuiz()` に quiz-container再表示を追加、reset-button参照を削除
- [ ] JS: `goHome()` に quiz-container再表示を追加、reset-button参照を削除
- [ ] HTML: `#finalResult` から reset-button を削除
- [ ] HTML: top-link のテキストを「← トップページへ」に変更

---

## ファイル一覧

| ファイル | 状態 |
|---------|------|
| `quizzes/院内ルール確認クイズ.html` | ✅ 完了 |
| `quizzes/コンタクト処方の基本クイズ.html` | ✅ 完了 |
| `quizzes/花粉症についてのクイズ.html` | ✅ 完了 |
| `quizzes/緑内障についてクイズ.html` | ✅ 完了 |
| `quizzes/老眼鏡合わせ_クイズ.html` | ✅ 完了 |
| `quizzes/近視についてのクイズ.html` | ✅ 完了（2025-01追加） |
| `quizzes/斜視クイズ.html` | ✅ 完了（2025-01追加） |
| `quizzes/大人の遠く用メガネ合わせクイズ.html` | ✅ 完了（2025-01追加） |
| `quizzes/弱視クイズ.html` | ✅ 完了（2025-01追加） |
| `quizzes/白内障についてクイズ.html` | ✅ 完了（2025-01追加） |
| `quizzes/自治体の緑内障検診の制度のクイズ.html` | ✅ 完了（2025-01追加） |

---

## 詳細仕様書

より詳しい仕様は [docs/QUIZ_SPECIFICATION.md](./docs/QUIZ_SPECIFICATION.md) を参照してください。
