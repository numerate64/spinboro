# Spinboro — A Tribute to the 5AM Spin Class Warriors

## 📋 Project Overview

**Spinboro** is a bold, energetic tribute website celebrating a tight-knit community of 5am spin class enthusiasts at the Attleboro YMCA. This is more than a fitness class — it's a lifestyle, a karaoke experience, and a badge of honor worn by those committed to showing up before dawn, multiple times a week.

The site captures the unique spirit of Spinboro:
- **Karaoke Video Spin**: Real-time lyrics scrolling alongside music videos, turning every class into an immersive performance
- **Professional Studio Setup**: Dual microphones, quality sound system, and a soundproof room
- **The 5AM Commitment**: A tight-knit tribe showing up 2-3 times weekly at an ungodly hour
- **The Rallying Cry**: "It's 5am, are you spinning me?" — the unofficial slogan and badge of honor

---

## 🎨 Design Aesthetic

The site employs a **dark, neon-forward design** that merges the visual identity of a karaoke bar with a modern cycling studio:

- **Color Palette**:
  - Dark backgrounds (charcoal & navy) as the foundation
  - Neon accents: Cyan (#00d9ff), Magenta (#ff006e), Lime (#39ff14), Purple (#b537f2)
  - Gold accent for prestige moments

- **Typography**:
  - Bold, uppercase headers with tight letter-spacing
  - High-contrast text with glowing text-shadow effects
  - Energetic, modern sans-serif throughout

- **Visual Motifs**:
  - Dual-screen concept inspired by karaoke + video setup
  - Animated lyrics and pulsing glows
  - Smooth scroll interactions and hover effects
  - Easter eggs and interactive surprises

---

## 📁 File Structure

```
spinboro/
├── index.html       # Semantic HTML structure
├── styles.css       # Complete stylesheet with animations
├── script.js        # Vanilla JavaScript for interactivity
└── README.md        # This file
```

### File Descriptions

#### `index.html`
- Semantic HTML5 structure with proper landmark elements
- Sections: Hero, About, Features, Warriors, Stats, CTA, Footer
- Content includes:
  - Hero section with dual-screen visual inspiration
  - About cards explaining the Spinboro concept
  - Features grid highlighting what makes the class unique
  - Warriors section with community member profiles
  - Stats showcasing class milestones
  - Call-to-action section
  - Footer with tagline

#### `styles.css`
- **Fully responsive** design (mobile, tablet, desktop)
- **Dark theme** with neon accent colors
- **Animations**: Glow pulses, scroll effects, bounces, smooth transitions
- **Grid & Flexbox layouts** for responsive grid structures
- **Hover states** with dynamic shadows and color shifts
- **Mobile-first approach** with breakpoints at 768px and 480px
- No external frameworks — pure vanilla CSS

#### `script.js`
- **Scroll animations**: Cards fade in as they come into view
- **Time-aware messaging**: Easter egg if accessed at 5am
- **Member rotation**: Highlights random warrior cards periodically
- **Lyrics animation**: Cycles through motivational phrases on the karaoke screen
- **Click easter eggs**:
  - Tagline "It's 5am..." responds to clicks (spin, glow, confetti)
  - Dual-screen responds to clicks with spin animation
- **Confetti effect**: Animated particles when triggered
- **Keyboard shortcuts**:
  - `S` key: Spin the dual-screen
  - `P` key: Print Easter egg message to console
- **Smooth scroll** for all anchor links

---

## 🚀 Getting Started

### Requirements
- No external dependencies or build tools
- Modern web browser (Chrome, Firefox, Safari, Edge)
- All files must be in the same directory

### How to Use
1. Download or clone all four files into a single folder
2. Open `index.html` in your web browser
3. Explore the site, interact with elements, discover easter eggs

### Quick Checks
- **Responsive Design**: Resize your browser to test mobile/tablet/desktop views
- **Hover Effects**: Hover over cards, buttons, and text for animations
- **Click Interactions**: Click the tagline or dual-screen for surprises
- **Keyboard Shortcuts**: Press 'S' or 'P' while on the page
- **Smooth Scrolling**: Click navigation links to smoothly scroll between sections

---

## 🎭 Key Features & Easter Eggs

### Interactive Elements
1. **Hover Glow Effects**: Cards and text elements glow with neon colors on hover
2. **Scroll Animations**: Elements fade in and slide up as you scroll
3. **Dynamic Member Rotation**: Warrior cards get randomly highlighted with special styling
4. **Animated Lyrics**: The karaoke screen cycles through motivational phrases
5. **Smooth Navigation**: All internal links use smooth scroll behavior

### Easter Eggs
- **5AM Detection**: If the page loads at exactly 5am, a special message appears
- **Tagline Clicks**: Click the main tagline three times for progressive effects (spin, glow, confetti)
- **Dual-Screen Clicks**: Click the karaoke screens for a spin animation
- **Keyboard Shortcuts**:
  - `S` = Spin the dual-screen
  - `P` = Print Easter egg message to console
- **Confetti Explosion**: Triggered by the tagline easter egg for celebration

---

## 🎨 Design Tokens

### Color Variables
```css
--primary-dark: #0a0e27           /* Dark background */
--secondary-dark: #1a1f3a         /* Secondary background */
--neon-cyan: #00d9ff              /* Primary accent */
--neon-magenta: #ff006e           /* Secondary accent */
--neon-lime: #39ff14              /* Tertiary accent */
--neon-purple: #b537f2            /* Quaternary accent */
--accent-gold: #ffd700            /* Special occasions */
--text-light: #e0e0e0             /* Primary text */
--text-muted: #999                /* Secondary text */
```

### Responsive Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: 480px and below

---

## 💻 Technical Highlights

- **No Frameworks**: Pure vanilla HTML, CSS, and JavaScript
- **Performance**: Optimized animations using CSS keyframes
- **Accessibility**: Semantic HTML with proper heading hierarchy
- **Responsive**: Mobile-first design with media queries
- **Smooth UX**: Intersection Observer API for scroll animations
- **Modular JS**: Self-executing function with clear sections

---

## 🎵 The Spinboro Spirit

> "It's 5am, are you spinning me?"

This is more than a question — it's a rallying cry. It represents:
- The badge of honor for showing up before dawn
- The camaraderie of a tight-knit fitness community
- The irreverent, fun-loving energy of the class
- The unshakeable commitment to the spin

Every 5am, the Spinboro warriors gather at Attleboro YMCA, ready to spin hard, sing loud, and celebrate the unique magic of karaoke video spin culture.

---

## 📝 Notes & Future Enhancements

This tribute site is a starting point. Potential enhancements (if desired):
- Add class schedule and sign-up form
- Integration with social media feeds
- Photo gallery from past classes
- Member blog or story submissions
- Interactive statistics dashboard
- Leaderboard or achievement tracking
- Dark/Light mode toggle

---

## 👥 Credits

Built with ❤️ for the Spinboro community — the most dedicated 5am warriors at Attleboro YMCA.

**Spinboro**: Where every class is a karaoke concert, every morning is a victory, and 5am is peak performance.

---

*"It's 5am. Are you spinning me?"*
