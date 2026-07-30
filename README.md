# AEL | Professional 3D Particle Backgrounds Library — 1,000+ Curated AI Prompts

> **1,000+ curated AI prompts for 3D particle background generation.**  
> Featuring smart search, favorites system, interactive 3D particle canvas preview, and multi-format export.  
> Built by Ayman Elmasry — AEL Digital Studio.

---

## Preview

![3D Particle Backgrounds Library Preview](screenshot.svg)

---

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Export Formats](#export-formats)
- [Technical Details](#technical-details)
- [Credits](#credits)

---

## Features

- **1,000+ curated prompts** — organized across 8+ categories (Cosmic Dust, Aurora Waves, Firefly Swarm, Data Stream, Galaxy Spiral, Bubbles, and more)
- **Interactive 3D particle canvas** — real-time particle animation engine in the browser
- **Smart search** — filter all prompts instantly by keyword
- **Favorites system** — save and manage favorite prompts via localStorage
- **One-click copy** — copy any prompt to clipboard instantly
- **Multi-format export** — JSON, CSV, TXT — export filtered or full dataset
- **Ultra-Lock System™** — premium locked prompts with gold indicators
- **Glassmorphism UI** — dark theme with AEL blue (#0074FF) accents
- **Fully client-side** — no server, no database, no build step

---

## How It Works

### Prompt Architecture

The library organizes 1,000+ prompts across multiple 3D particle background categories. Each prompt is a structured entry with:

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique identifier | `cosmic-dust-001` |
| `category` | Particle system type | `Cosmic Dust` |
| `title` | Prompt title | `Cosmic dust particle system with luminous drifting particles` |
| `text` | Full prompt text | `A cosmic dust particle system with millions of tiny luminous particles drifting through deep space...` |
| `locked` | Ultra-Lock status | `true` / `false` |

### Search Engine

- Real-time filtering as the user types
- Matches against title, text, and category (case-insensitive)
- Instant results with zero latency — no debounce needed for local data

### Particle Canvas Engine

- Pure JavaScript 3D particle animation running on HTML5 Canvas
- Configurable particle count, speed, and color parameters
- Responsive to window resize — auto-adjusts canvas dimensions
- Optimized with `requestAnimationFrame` for smooth 60fps rendering

---

## Project Structure

```
ael-3d-particle-backgrounds-library/
├── index.html                        # HTML5 semantic structure
├── ael_3d_particle_backgrounds.css   # All styles (glassmorphism, dark theme)
├── ael_3d_particle_backgrounds.js    # Full JS engine (prompts, search, canvas, export)
├── screenshot.svg                    # Project preview image
├── ael-logo.svg                      # AEL brand logo
├── .gitignore
└── README.md
```

This separation follows modern web best practices:
- **HTML5** — semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- **CSS3** — custom properties for theming, Flexbox/Grid layout, glassmorphism effects
- **Vanilla JS (ES2020+)** — zero dependencies, runs in any modern browser

---

## Getting Started

### Run Locally

```bash
git clone https://github.com/aymanelmasryael/ael-3d-particle-backgrounds-library.git
cd ael-3d-particle-backgrounds-library
open index.html
```

Or simply open `index.html` in any modern browser — no server required.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools, no package managers, no server

---

## Usage

### Browse Prompts
- Open `index.html` — prompts load automatically
- Scroll through the categorized prompt grid
- Watch the 3D particle canvas animate in the background

### Search
- Type in the search box to filter prompts in real time
- Matches against all prompt text and categories (case-insensitive)

### Favorites
- Click the heart icon on any prompt card to save it
- Access saved favorites from the Favorites panel
- Favorites persist across sessions via localStorage

### Copy a Prompt
- Click any prompt card to copy its text to clipboard instantly

### Export
- Use the export buttons to download filtered or full prompt dataset

---

## Export Formats

| Button | Format | Filename |
|--------|--------|----------|
| JSON | JSON array | `ael_prompts.json` |
| CSV | RFC 4180 CSV | `ael_prompts.csv` |
| TXT | Numbered text | `ael_prompts.txt` |

> **Note:** Exports reflect the current filtered/search result, not the full 1,000+ by default.

---

## Technical Details

| Aspect | Detail |
|--------|--------|
| Architecture | Static site (HTML5 + CSS3 + JS) |
| JavaScript | Vanilla ES2020+, zero dependencies |
| CSS | Custom properties for theming |
| Icons | SVG sprite sheet (no external icon library) |
| Data storage | localStorage for favorites |
| Canvas rendering | `requestAnimationFrame` for 60fps |
| Browser support | Chrome, Firefox, Safari, Edge (modern versions) |
| Offline | Works locally via `file://` |

### Performance

- Search filters 1,000+ items in real-time without lag
- Canvas particle engine runs at 60fps with 500+ particles
- DOM: lightweight card rendering — no virtual scrolling needed at this scale

---

## Credits

**Created by:** Ayman Elmasry — AEL Digital Studio  
**Website:** [aymanelmasry.com](https://aymanelmasry.com)  
**Email:** [info@aymanelmasry.com](mailto:info@aymanelmasry.com)  
**License:** Ayman Elmasry Digital License — Licensed for personal and commercial use with attribution. Unauthorized redistribution is prohibited.

### Connect

[LinkedIn](https://linkedin.com/in/aymanelmasryael) · [Instagram](https://instagram.com/aymanelmasryael) · [X](https://x.com/aymanelmasryael) · [CodePen](https://codepen.io/aymanelmasryael) · [GitHub](https://github.com/aymanelmasryael) · [Behance](https://behance.net/aymanelmasryael)

---

*AEL Prompt IP System v1.0 — Sovereign Identity Block*  
*AEL sovereign blockchain timestamp 2025*
