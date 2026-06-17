# CMD Portfolio — Daniel Tsang

A personal portfolio website styled as a Windows Command Prompt window. Everything can be is navigated by typing commands into a terminal emulator running in the browser.

Live site: [tsanguw.github.io/cmd-portfolio](https://tsanguw.github.io/cmd-portfolio)

---

## About

This site presents my work and background through a CMD-style interface. Visitors type commands (or click buttons in the command tray) to explore sections like my experience, projects, skills, and a photo gallery. The terminal keeps a scrolling history so earlier output stays visible as you navigate.

Features include:
- Command history navigation with the ↑ / ↓ arrow keys
- Single-letter shortcuts for every command (e.g. `a` for `about`)
- Three color themes: `default`, `hacker`, and `retro`
- A collapsible command tray for mouse/touch navigation
- A photo gallery with a lightbox viewer
- CRT scanline overlay for atmosphere

---

## Technologies

| Layer | Tools |
|---|---|
| Framework | React (Create React App) |
| Styling | CSS custom properties, CSS variables for theming |
| Fonts | Consolas (default), Share Tech Mono (hacker), VT323 (retro) via Google Fonts |
| Deployment | GitHub Pages via `gh-pages` |

---

## Setup

**Prerequisites:** Node.js and npm installed.

```bash
# Clone the repository
git clone https://github.com/tsanguw/cmd-portfolio.git
cd cmd-portfolio

# Install dependencies
npm install

# Start the local development server
npm start
```

The app opens at `http://localhost:3000/cmd-portfolio`.

To deploy to GitHub Pages:

```bash
npm run deploy
```

This builds the project and pushes it to the `gh-pages` branch automatically.
