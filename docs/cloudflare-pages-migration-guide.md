# StudyQuiz プライベート化 & Cloudflare Pages 移行ガイド

## 📋 概要

GitHub Pages（パブリック）から Cloudflare Pages（プライベートリポジトリ対応）へ移行し、以下を達成する：

- ✅ 検索エンジンにインデックスされない
- ✅ URLを知らない人がアクセスできない
- ✅ ソースコードも非公開
- ✅ 無料で運用

---

## 🎯 達成したい要件

| 要件 | 解決策 |
|------|--------|
| Google検索に引っかからない | `robots.txt` + `noindex` メタタグ |
| URLを推測されない | ランダムな `xxxxx.pages.dev` URL |
| リポジトリを検索から隠す | GitHubリポジトリをプライベート化 |
| 無料で運用 | Cloudflare Pages（無料） |

---

## 📝 作業手順

### ステップ①：robots.txt を追加（新規作成）

**ファイル名**: `robots.txt`
**配置場所**: リポジトリのルート（index.htmlと同じ階層）

```
User-agent: *
Disallow: /
```

---

### ステップ②：全HTMLファイルに noindex メタタグを追加

各HTMLファイルの `<head>` タグ内に以下を追加：

```html
<meta name="robots" content="noindex, nofollow">
```

**追加位置の例**:
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">  <!-- ←これを追加 -->
    <title>ページタイトル</title>
    ...
</head>
```

**対象ファイル一覧**:
- `index.html`
- `mypage.html`
- `help.html`
- `settings.html`
- `quizzes/` フォルダ内の全HTMLファイル（29個程度）

**一括追加のヒント**:
VS Code の場合、検索・置換（Ctrl+Shift+H）で以下を実行：
- 検索: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- 置換: `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="robots" content="noindex, nofollow">`
- ファイル対象: `*.html`

---

### ステップ③：Cloudflare アカウント作成

1. https://dash.cloudflare.com/sign-up にアクセス
2. メールアドレスとパスワードで登録（無料）
3. メール認証を完了

---

### ステップ④：Cloudflare Pages でデプロイ

1. Cloudflare ダッシュボードにログイン
2. 左メニューから「Workers & Pages」を選択
3. 「Create」→「Pages」→「Connect to Git」をクリック
4. 「GitHub」を選択し、GitHubアカウントを連携
5. リポジトリ `StudyQuiz_fujiminohikariganka` を選択
6. ビルド設定：
   - **プロジェクト名**: 任意（これがURLの一部になる）
   - **本番ブランチ**: `main`（または `master`）
   - **ビルドコマンド**: 空欄のまま（静的サイトなので不要）
   - **ビルド出力ディレクトリ**: 空欄のまま（ルートがそのまま公開）
7. 「Save and Deploy」をクリック
8. デプロイ完了後、`https://プロジェクト名.pages.dev` でアクセス可能

---

### ステップ⑤：動作確認

1. Cloudflare Pages のURLにアクセスして動作確認
2. 全てのクイズページが正常に表示されることを確認
3. 学習記録などの機能が動作することを確認

---

### ステップ⑥：GitHubリポジトリをプライベート化

1. GitHub リポジトリページにアクセス
2. 「Settings」タブをクリック
3. 一番下までスクロールし「Danger Zone」を探す
4. 「Change repository visibility」→「Change visibility」
5. 「Make private」を選択
6. リポジトリ名を入力して確認

**注意**: プライベート化後も Cloudflare Pages は正常に動作します（連携済みのため）

---

### ステップ⑦：GitHub Pages を無効化

1. GitHub リポジトリの「Settings」→「Pages」
2. Source を「None」に変更して保存
3. 旧URL（`nekonekoganka.github.io/...`）はアクセス不可になる

---

## 🔄 今後の更新方法

移行後の更新手順は **今までと全く同じ** です：

1. GitHubでファイルを編集（ブラウザ or VS Code）
2. コミット & プッシュ
3. **約1〜2分で自動的にサイトに反映**

Cloudflare Pages ダッシュボードでデプロイ状況も確認できます。

---

## 📊 比較まとめ

| 項目 | GitHub Pages（現在） | Cloudflare Pages（移行後） |
|------|---------------------|---------------------------|
| 費用 | 無料 | 無料 |
| プライベートリポジトリ | 有料（月$4） | **無料** |
| 更新方法 | プッシュで自動 | プッシュで自動 |
| 反映時間 | 約1〜2分 | 約1〜2分 |
| 検索ブロック | 設定で可能 | 設定で可能 |
| カスタムドメイン | 可能 | 可能 |

---

## ⚠️ 注意事項

- 移行前に必ず動作確認を行うこと
- スタッフへのURL配布は新しいURLで行うこと
- QRコードも新しいURLで再作成が必要
- 旧URLはステップ⑦完了後にアクセス不可になる

---

## 📁 現在のファイル構成（参考）

```
StudyQuiz_fujiminohikariganka/
├── index.html
├── mypage.html
├── help.html
├── settings.html
├── robots.txt          ← 新規追加
├── images/
│   └── ふじみ野ぴかぴかり眼科_ロゴ.png
├── quizzes/
│   ├── コンタクト処方の基本クイズ.html
│   ├── CL合併症_クイズ.html
│   ├── CLの種類と使い方_クイズ.html
│   ├── 大人の遠く用メガネ合わせクイズ.html
│   ├── 老眼鏡合わせ_クイズ.html
│   ├── 近視についてのクイズ.html
│   ├── 花粉症についてのクイズ.html
│   ├── 白内障についてクイズ.html
│   ├── 緑内障についてクイズ.html
│   ├── 弱視クイズ.html
│   ├── 斜視クイズ.html
│   ├── 小児近視対策_クイズ.html
│   ├── 糖尿病網膜症_クイズ.html
│   ├── 流涙症_クイズ.html
│   ├── 黄斑前膜_クイズ.html
│   ├── 色覚異常_クイズ.html
│   ├── アトピー性皮膚炎と目_クイズ.html
│   ├── ぶどう膜炎_クイズ.html
│   ├── 飛蚊症_クイズ.html
│   ├── OCT検査_クイズ.html
│   ├── アイモ_視野検査_クイズ.html
│   ├── 視力検査のコツ_クイズ.html
│   ├── ノンコン眼圧検査_クイズ.html
│   ├── 眼科問診_クイズ.html
│   ├── 院内ルール確認クイズ.html
│   ├── 自治体の緑内障検診の制度のクイズ.html
│   ├── 眼科保険診療_クイズ.html
│   └── 眼科保険点数_クイズ.html
└── css/, js/ など
```

---

## 🗓️ 作成日

2025年1月21日

## 📝 メモ

- このガイドは Claude との会話で作成
- 質問や不明点があれば Claude に聞いてください
