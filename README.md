# macPortfolio

A modern, desktop-inspired personal portfolio built with React and Vite. This project recreates a macOS-like experience where visitors can interact with draggable windows, launch apps, browse projects, read notes, and explore your profile in a fun and immersive way.

## ✨ Features

- macOS-style desktop UI with a top navigation bar and bottom dock
- Draggable and resizable window components for a realistic desktop feel
- Interactive app windows including:
  - GitHub projects showcase
  - Notes window with Markdown-style content
  - Resume viewer
  - Spotify embedded playlist
  - Custom terminal emulator with commands
- Smooth, visually polished styling using SCSS
- Easy customization for personal details, projects, resume, and social links
- Lightweight and fast performance with Vite

## 🛠️ Tech Stack

- React 19
- Vite 7
- SCSS
- react-rnd for draggable/resizable windows
- react-console-emulator for the terminal experience
- react-markdown and react-syntax-highlighter for note rendering
- Font Awesome icons via Font Awesome core package

## 📁 Project Structure

```bash
src/
├── App.jsx
├── app.scss
├── components/
│   ├── Dock.jsx
│   ├── Nav.jsx
│   ├── DateTime.jsx
│   └── Windows/
│       ├── Cli.jsx
│       ├── Github.jsx
│       ├── MacWindow.jsx
│       ├── Note.jsx
│       ├── Resume.jsx
│       └── Spotify.jsx
├── assets/
│   └── github.json
└── main.jsx
public/
├── note.txt
├── resume.pdf
├── doc-icons/
└── navbar-icons/
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Then open your browser at:

```bash
http://localhost:5173
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## 📦 Available Scripts

- `npm run dev` — starts the development server
- `npm run build` — creates a production build
- `npm run preview` — previews the built app locally
- `npm run lint` — runs ESLint checks

## 🎨 How to Customize

You can personalize this portfolio easily:

- Update your name and navigation items in the components folder
- Replace project cards by editing [src/assets/github.json](src/assets/github.json)
- Change the note content in [public/note.txt](public/note.txt)
- Replace your resume PDF in [public/resume.pdf](public/resume.pdf)
- Update social links and email in the dock or relevant components
- Modify colors and layout in the SCSS files under [src/components](src/components)

## 🧩 App Overview

This portfolio is designed to feel like a mini operating system desktop. Each window acts like an app, and the dock gives quick access to the major sections of your profile.

### Included windows

- GitHub: Displays featured repositories and projects
- Note: Shows content loaded from a text file
- Resume: Opens your PDF resume in a window
- Spotify: Embeds a playlist player
- CLI: Simulates a terminal with custom commands

## ✅ Notes

- The app is fully client-side and can be deployed easily on platforms like Vercel, Netlify, or GitHub Pages.
- If you plan to deploy it, make sure asset paths and public files are correctly served.

## 🙌 Author

Built with passion by Krishna Gupta 👍.
