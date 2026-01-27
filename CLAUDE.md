# CLAUDE.md - AI Assistant Guide for ひかり眼科 学習クイズ

This document provides essential information for AI assistants working on this codebase.

## Project Overview

**ひかり眼科 学習クイズ** (Hikari Eye Clinic Learning Quiz) is an educational quiz application for eye clinic staff training. It's a static web application hosted on GitHub Pages with no backend server.

- **Live URL**: https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/
- **Target Users**: Eye clinic staff members
- **Platform**: Mobile-first PWA (optimized for iPhone/Android)

## Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3 (no frameworks)
- **Storage**: LocalStorage API (client-side only)
- **Hosting**: GitHub Pages (static site)
- **Build**: None required - direct HTML/CSS/JS deployment

## Directory Structure

```
StudyQuiz_fujiminohikariganka/
├── index.html                          # Landing page / quiz selection hub
├── mypage.html                         # Learning progress tracking & badges
├── settings.html                       # User preferences & data management
├── help.html                           # Help & instructions
├── presentation.html                   # Staff introduction material
│
├── quizzes/
│   ├── quiz-config.js                  # CRITICAL: Central configuration file
│   ├── quiz-core.js                    # Shared quiz logic (if exists)
│   └── [28 Quiz HTML files]            # Individual quiz pages
│
├── css/
│   └── quiz.css                        # Shared quiz styling
│
├── images/
│   ├── app/                            # App icons (192x192, 512x512)
│   └── explanation/                    # Quiz explanation images
│       └── [21 category folders]       # メガネ/, コンタクトレンズ/, 白内障/, etc.
│
├── docs/
│   ├── QUIZ_SPECIFICATION.md           # Detailed quiz specification
│   └── クイズテンプレート.html          # Quiz template for generation
│
├── manifest.json                       # PWA manifest
├── README.md                           # User documentation (Japanese)
├── QUIZ_SPEC.md                        # Quiz HTML specification (simplified)
└── CLAUDE.md                           # This file
```

## Critical Files

### 1. `quizzes/quiz-config.js` (MOST IMPORTANT)

Central configuration file containing:
- `QUIZ_LIST[]` - All quiz definitions
- `BADGE_LIST[]` - Achievement badge definitions
- Core functions: `getQuizData()`, `saveQuizData()`, `recordQuizResult()`, etc.

**When modifying quizzes, ALWAYS update this file first.**

### 2. Quiz HTML Files

Located in `quizzes/` directory. Each quiz follows a standardized structure. See `QUIZ_SPEC.md` for detailed specification.

### 3. `css/quiz.css`

Shared stylesheet for all quiz pages. All quiz-specific styling should use this file.

## Quiz Configuration

### QUIZ_LIST Entry Structure

```javascript
{
    id: 'unique-quiz-id',           // kebab-case, must be unique
    name: 'クイズ名',                // Display name
    file: 'クイズファイル名.html',    // HTML filename
    totalQuestions: 10,             // Total question count (MUST match HTML)
    icon: '👁️',                     // Emoji icon
    category: 'staff',              // Always 'staff' for this app
    description: 'クイズの説明文',   // Brief description
    color: 'cyan',                  // Color theme (see below)
    genre: 'adult-disease'          // Genre category (see below)
}
```

### Color Themes (7 options)

| Color | Hex | Usage |
|-------|-----|-------|
| `blue` | #1e3c72 → #2a5298 | Rules, Basic topics |
| `cyan` | #4facfe → #00f2fe | Contact Lens, Cataracts |
| `green` | #2e7d32 → #1b5e20 | Glaucoma |
| `teal` | #4db6ac → #00796b | Hay Fever |
| `amber` | #ffb300 → #ff8f00 | Eyeglasses |
| `purple` | #ab47bc → #8e24aa | Pediatric topics |
| `indigo` | #667eea → #764ba2 | Insurance, Retinal diseases |

### Genre Categories

| Genre | Description | Quiz Count |
|-------|-------------|------------|
| `megane-cl` | Glasses & Contact Lens | 5 |
| `adult-disease` | Adult Eye Diseases | 10 |
| `pediatric` | Pediatric Ophthalmology | 4 |
| `examination` | Eye Examinations | 5 |
| `rule` | Clinic Rules | 2 |
| `insurance` | Insurance & Billing | 2 |

## Data Persistence

### LocalStorage Key: `hikari_quiz_data`

```javascript
{
    progress: {
        [quizId]: {
            bestScore: number,
            totalQuestions: number,
            attempts: number,
            isPerfect: boolean,
            questionResults: { [questionNum]: boolean }
        }
    },
    totalAnswered: number,
    badges: [badgeId, ...]
}
```

### Settings Keys

| Key | Values | Default |
|-----|--------|---------|
| `hikari-quiz-fontsize` | `small`, `normal`, `large` | `normal` |
| `hikari-quiz-dailycount` | `3`, `5`, `7` | `3` |
| `hikari-quiz-autobackup-interval` | number | `5` |

## Current Quiz List (28 quizzes)

| ID | Name | Questions | Color | Genre |
|----|------|-----------|-------|-------|
| contact-basic | CL処方クイズ | 29 | cyan | megane-cl |
| cl_complication | CL合併症クイズ | 10 | cyan | megane-cl |
| cl_makeup | CLの種類と使い方クイズ | 10 | cyan | megane-cl |
| enyo-megane | 遠用メガネのクイズ | 28 | amber | megane-cl |
| megane-awase | 老眼鏡合わせクイズ | 27 | amber | megane-cl |
| kinshi | 近視クイズ | 10 | blue | adult-disease |
| kafunsho | 花粉症クイズ | 16 | teal | adult-disease |
| hakunaisho | 白内障クイズ | 10 | cyan | adult-disease |
| ryokunaisho | 緑内障クイズ | 17 | green | adult-disease |
| jakushi | 弱視クイズ | 15 | purple | pediatric |
| shashi | 斜視クイズ | 10 | purple | pediatric |
| pediatric_myopia | 小児近視対策クイズ | 10 | purple | pediatric |
| diabetic_retinopathy | 糖尿病網膜症クイズ | 10 | indigo | adult-disease |
| epiphora | 流涙症クイズ | 8 | cyan | adult-disease |
| macular_membrane | 黄斑前膜クイズ | 8 | indigo | adult-disease |
| atopy_eye | アトピーと目クイズ | 10 | indigo | adult-disease |
| uveitis | ぶどう膜炎クイズ | 10 | indigo | adult-disease |
| floaters | 飛蚊症クイズ | 9 | indigo | adult-disease |
| color_vision | 色覚異常クイズ | 9 | purple | pediatric |
| ryokunaisho-kenshin | 検診の制度クイズ | 14 | indigo | rule |
| innai-rule | 院内ルール確認クイズ | 15 | blue | rule |
| oct | OCT検査クイズ | 7 | teal | examination |
| imo_shinya | アイモ（視野検査）クイズ | 8 | green | examination |
| siryoku | 視力検査のコツクイズ | 8 | amber | examination |
| noncon-iatsu | ノンコン眼圧検査クイズ | 11 | cyan | examination |
| monshin | 眼科問診クイズ | 6 | blue | examination |
| hoken-shinryo | 眼科保険診療クイズ | 8 | blue | insurance |
| hoken-tensuu | 眼科保険点数クイズ | 16 | blue | insurance |

## Common Development Tasks

### Adding a New Quiz

1. **Add entry to `quiz-config.js`**:
   ```javascript
   {
       id: 'new-quiz-id',
       name: 'クイズ名',
       file: 'クイズファイル名.html',
       totalQuestions: N,
       icon: '📝',
       category: 'staff',
       description: '説明文',
       color: 'cyan',
       genre: 'adult-disease'
   }
   ```

2. **Create HTML file** in `quizzes/` using the template in `docs/クイズテンプレート.html` or copy an existing quiz

3. **Update in the HTML file**:
   - `QUIZ_ID` constant must match `id` in config
   - `TOTAL_QUESTIONS` constant must match `totalQuestions` in config
   - `allQuestions` array must include all question numbers

4. **Verify**: Quiz appears on index.html, progress saves correctly

### Modifying Question Count

When changing the number of questions in a quiz, update **ALL** of these:

| Location | What to Update |
|----------|----------------|
| `quiz-config.js` | `totalQuestions` value |
| Quiz HTML file | `TOTAL_QUESTIONS` constant |
| Quiz HTML file | `allQuestions` array |
| Quiz HTML file | Add/remove `<div id="questionN">` elements |

### Adding Images to Explanations

1. Place image in `images/explanation/[category]/`
2. Reference in quiz HTML:
   ```html
   <div class="explanation hidden">
       <strong>解説：</strong> 解説文
       <div class="info-box">
           <img src="../images/explanation/[category]/image.png" alt="説明">
       </div>
   </div>
   ```

## Code Conventions

### Naming

- **Quiz IDs**: kebab-case (`contact-basic`, `cl_complication`)
- **JavaScript functions**: camelCase (`startQuiz`, `showFinalScore`)
- **Constants**: UPPER_CASE (`QUIZ_ID`, `TOTAL_QUESTIONS`)
- **Files**: Japanese names for quiz files, English for code files

### Question HTML Structure

```html
<div class="question-card hidden" id="question1">
    <div class="question-number">問題 1</div>
    <div class="question-text">問題文</div>
    <div class="options">
        <div class="option" data-answer="true">正解の選択肢</div>
        <div class="option" data-answer="false">不正解の選択肢</div>
    </div>
    <div class="feedback"></div>
    <div class="explanation hidden">
        <strong>解説：</strong>解説文
    </div>
</div>
```

- First question: NO `hidden` class
- Questions 2+: MUST have `hidden` class
- Correct answer: `data-answer="true"`
- Wrong answers: `data-answer="false"`

### Dark Mode

The app respects system preferences via CSS `prefers-color-scheme`. No manual toggle.

For info boxes in explanations:
```css
.info-box {
    background: #f8f9fa;  /* Light mode */
}
@media (prefers-color-scheme: dark) {
    .info-box {
        background: #2d3748;  /* Dark mode */
    }
}
```

## Key Algorithms

### Weighted Random Question Selection

For "Today's N Questions" mode:
```
Weight = (Unanswered × 20) + (Incorrect × 10) + (Correct × 1)
```
Prioritizes: Unanswered > Incorrect > Correct

### Weighted Quiz Recommendation

For "Next Quiz" suggestions:
```
Weight = (UnansweredCount × 20) + (IncorrectCount × 5)
         + (CompletelyUntried ? 50 : 0) + (UnmasteredQuiz ? 20 : 0)
```

**Excluded from random selection**: `innai-rule`, `ryokunaisho-kenshin` (local rules)

## Badge System

### Rarity Levels

| Rarity | Notification | Count |
|--------|--------------|-------|
| `normal` | Toast (4 sec) | 8 |
| `rare` | Modal popup | 7 |
| `legendary` | Modal + confetti | 1 |

### Badge Categories

- Entry badges (first attempt, first perfect)
- Volume badges (50, 100, 200, 300 questions)
- Mastery badges (20%, 40%, 60%, 80%, 100% perfect)
- Genre master badges (5 genres)

## UI/UX Guidelines

### Mobile Optimization

- Minimum tap target: 44px
- Safe area padding for iPhone notch/home indicator
- Breakpoint: 768px

### Result Screen Buttons

| Button | Color | Action |
|--------|-------|--------|
| 🎲 シャッフルN問 | Pink #e91e63 | Go to random quiz |
| 🔄 もうN問 | Blue #1976d2 | Restart same quiz |
| ❌ 間違えた問題を復習 | Orange | Review mode |
| 📊 学習記録 | Teal #00897b | Go to mypage |
| 🏠 ホーム | Purple #5e35b1 | Go to index |

### Scroll Behavior

After answering, scroll feedback to top of viewport:
```javascript
feedback.scrollIntoView({ behavior: 'smooth', block: 'start' });
```

## Testing Checklist

When making changes, verify:

- [ ] Quiz appears on index.html
- [ ] "Today's N Questions" mode works
- [ ] "Full Mode" works
- [ ] Progress saves to LocalStorage
- [ ] Progress displays on mypage.html
- [ ] Badges trigger appropriately
- [ ] Dark mode styling works
- [ ] Mobile layout is correct

## Git Workflow

- Branch naming: `claude/[feature-name]-[id]`
- Commit messages: Clear, descriptive (Japanese OK)
- Always test locally before pushing

## Common Pitfalls

1. **Forgetting to update `quiz-config.js`** when changing question counts
2. **Mismatched `QUIZ_ID`** between config and HTML file
3. **Missing `hidden` class** on questions 2+ causing display issues
4. **Hardcoded question counts** instead of using `TOTAL_QUESTIONS`
5. **Dark mode issues** in info boxes - always add dark mode CSS
6. **Images not in correct folder** under `images/explanation/`

## Related Documentation

- `README.md` - User documentation (Japanese)
- `QUIZ_SPEC.md` - Simplified quiz specification
- `docs/QUIZ_SPECIFICATION.md` - Detailed quiz specification
- `docs/クイズテンプレート.html` - Template for creating new quizzes
