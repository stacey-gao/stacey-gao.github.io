# Project content template

Fill out one copy of this template per project, then paste the values into `src/data/projects.js`.

**Tab ranking** (already set — do not change unless you reorder projects):

| Project | Developer tab rank | UX tab rank |
|---------|-------------------|-------------|
| AWK Interpreter | 1 (most dev-heavy) | 5 |
| Neuro Connect | 2 | 4 |
| Senior Umbrella Network | 3 | 3 |
| Uncluttered | 4 | 2 |
| Mobile ID Redesign | 5 | 1 (most UX-focused) |

---

## AWK Interpreter

**File location:** `src/data/projects.js` → object with `id: 'awk-interpreter'`

| Field | What to write | Your answer |
|-------|---------------|-------------|
| `subtitle` | Short tagline under the title (5–10 words) | |
| `description` | One sentence for the portfolio card | |
| `dateRange` | Project dates, e.g. `01/15/2024 – 05/01/2024` | |
| `tools` | Array of tools used. Options: `figma`, `photoshop`, `illustrator`, `indesign`, `react`, `node` | |
| `details.overview` | 2–3 sentences: what it is, who it's for, your role | |
| `details.challenge` | The core problem or constraint you faced | |
| `details.approach` | How you solved it (tech stack, design process, etc.) | |
| `details.outcome` | Results, metrics, or key learnings | |
| `details.highlights` | 3 bullet points of standout work | |

---

## Neuro Connect

**File location:** `src/data/projects.js` → object with `id: 'neuro-connect'`

| Field | What to write | Your answer |
|-------|---------------|-------------|
| `subtitle` | Short tagline under the title | |
| `description` | One sentence for the portfolio card | |
| `dateRange` | Project dates | |
| `details.overview` | 2–3 sentences | |
| `details.challenge` | Core problem | |
| `details.approach` | Your process and solution | |
| `details.outcome` | Results or learnings | |
| `details.highlights` | 3 bullet points | |

---

## Senior Umbrella Network

**File location:** `src/data/projects.js` → object with `id: 'senior-umbrella-network'`

| Field | What to write | Your answer |
|-------|---------------|-------------|
| `subtitle` | Short tagline under the title | |
| `description` | One sentence for the portfolio card | |
| `dateRange` | Project dates | |
| `tools` | Tools used (see list above) | |
| `details.overview` | 2–3 sentences | |
| `details.challenge` | Core problem | |
| `details.approach` | Your process and solution | |
| `details.outcome` | Results or learnings | |
| `details.highlights` | 3 bullet points | |

---

## Uncluttered

**File location:** `src/data/projects.js` → object with `id: 'uncluttered'`

| Field | What to write | Your answer |
|-------|---------------|-------------|
| `subtitle` | Short tagline under the title | |
| `description` | One sentence for the portfolio card | |
| `dateRange` | Project dates | |
| `details.overview` | 2–3 sentences | |
| `details.challenge` | Core problem | |
| `details.approach` | Your process and solution | |
| `details.outcome` | Results or learnings | |
| `details.highlights` | 3 bullet points | |

---

## Mobile ID Redesign

**File location:** `src/data/projects.js` → object with `id: 'mobile-id-redesign'`

| Field | What to write | Your answer |
|-------|---------------|-------------|
| `subtitle` | Short tagline under the title | |
| `description` | One sentence for the portfolio card | |
| `dateRange` | Project dates | |
| `tools` | Tools used (see list above) | |
| `details.overview` | 2–3 sentences | |
| `details.challenge` | Core problem | |
| `details.approach` | Your process and solution | |
| `details.outcome` | Results or learnings | |
| `details.highlights` | 3 bullet points | |

---

## Optional fields (all projects)

| Field | Purpose | Options |
|-------|---------|---------|
| `layout` | Card style on the home page | `split`, `split-reverse`, `dark`, `image` |
| `accentColor` | Background color for the mockup | Any hex, e.g. `#e8eef5` |
| `accentSecondary` | Accent bar/circle color | Any hex, e.g. `#3d6b9e` |
| `name` | Shown on split cards | Usually `Stacey Gao` |
| `role` | Shown on split cards | Usually `Front-end focused Developer / UX Designer` |

## Example (filled in)

```js
{
  id: 'awk-interpreter',
  title: 'AWK Interpreter',
  subtitle: 'Custom AWK language interpreter in C++',
  description:
    'Built a from-scratch interpreter that parses and executes AWK scripts with pattern-action rules.',
  layout: 'split',
  accentColor: '#e8eef5',
  accentSecondary: '#3d6b9e',
  tools: ['node'],
  name: 'Stacey Gao',
  role: 'Front-end focused Developer / UX Designer',
  dateRange: '09/01/2023 – 12/15/2023',
  uxRank: 5,
  devRank: 1,
  details: {
    overview:
      'A course project implementing a full AWK interpreter including lexer, parser, and execution engine.',
    challenge:
      'Handling nested patterns, field separators, and built-in functions while keeping the codebase maintainable.',
    approach:
      'Designed a recursive-descent parser and symbol table for variables and functions. Wrote unit tests for each language feature.',
    outcome:
      'Successfully passed the full test suite and supported all required AWK syntax for the assignment.',
    highlights: [
      'Lexer and parser from scratch',
      'Pattern-action execution engine',
      'Comprehensive test coverage',
    ],
  },
},
```
