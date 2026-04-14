<<<<<<< HEAD
# Cloud Motive Project

---

## 📌 Features

- ⚡ Built with Next.js (App Router)
- 🎨 Optimized font loading using `next/font`
- 🔥 Fast refresh & hot reloading
- 📁 Clean folder structure
- 🚀 Ready for production deployment
- 🌐 SEO optimized

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React
- **Styling:** CSS 
- **Font Optimization:** next/font (Geist font)
- **Package Manager:** npm / yarn / pnpm / bun

---

## ⚙️ Getting Started

Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
=======
# SkillMatrix — Team Skill Graph

A production-quality interactive graph app to visualize your team's skills, proficiency levels, and skill gaps. Built with Next.js, React Flow, and Zustand.

![SkillMatrix](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![React Flow](https://img.shields.io/badge/React%20Flow-11-purple?style=flat-square)
![Zustand](https://img.shields.io/badge/Zustand-5-orange?style=flat-square)

---

## What It Does

- Visualizes **People ↔ Skills** relationships on an interactive graph
- Shows **proficiency levels** via colored edges (Learning / Familiar / Expert)
- Highlights **skill gaps** — skills nobody on the team has yet
- Full **CRUD** — add, edit, delete people, skills, and connections
- **Persists data** in localStorage — no backend needed
- Click any node to open a **detail sidebar**
- **Summary panel** with team stats, top skills, and category breakdown

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Graph | React Flow 11 |
| State | Zustand 5 |
| Styling | Plain CSS Modules |
| Persistence | localStorage |
| Package Manager | npm |

---

## Project Structure

```
cloudmotive/
├── app/
│   ├── layout.tsx            # Root HTML wrapper, metadata
│   ├── page.tsx              # Main entry point, composes all panels
│   ├── globals.css           # Global reset + base styles
│   └── page.module.css       # App shell layout (flex, height)
│
├── components/
│   ├── SkillGraph.tsx        # React Flow canvas — nodes, edges, zoom, pan
│   ├── SkillGraph.module.css
│   ├── PersonNode.tsx        # Custom person card node
│   ├── PersonNode.module.css
│   ├── SkillNode.tsx         # Custom skill pill node
│   ├── SkillNode.module.css
│   ├── Sidebar.tsx           # Detail panel (opens on node click)
│   ├── Sidebar.module.css
│   ├── Toolbar.tsx           # Top header with Add buttons
│   ├── Toolbar.module.css
│   ├── SummaryPanel.tsx      # Left stats panel
│   ├── SummaryPanel.module.css
│   └── modals/
│       ├── Modal.tsx             # Reusable modal shell
│       ├── Modal.module.css
│       ├── form.module.css       # Shared form input styles
│       ├── PersonModal.tsx       # Add / Edit person form
│       ├── SkillModal.tsx        # Add / Edit skill form
│       └── ConnectionModal.tsx   # Link person to skill form
│
├── store/
│   └── index.ts              # Zustand store — all state + CRUD + localStorage
│
├── lib/
│   ├── seedData.ts           # Initial demo data (5 people, 8 skills, 15 connections)
│   ├── constants.ts          # Color maps for categories and proficiency
│   └── layout.ts             # Converts store data to React Flow node positions
│
├── types/
│   └── index.ts              # TypeScript interfaces (Person, Skill, Connection)
│
├── package.json
└── tsconfig.json
>>>>>>> a7ac06b (fully detailed readme.md)
```

---

<<<<<<< HEAD
### 2️⃣ Install Dependencies

Using npm:
=======
## Start From Scratch

### Prerequisites

Make sure you have these installed:

- **Node.js** v18 or higher → [Download](https://nodejs.org)
- **npm** v9 or higher (comes with Node.js)
- **Git** → [Download](https://git-scm.com)

Check versions:
```bash
node -v
npm -v
git --version
```

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/yogesh968/cloudmotive.git
cd cloudmotive
```

---

### Step 2 — Install Dependencies

>>>>>>> a7ac06b (fully detailed readme.md)
```bash
npm install
```

<<<<<<< HEAD
Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

Using bun:
```bash
bun install
```

---

### 3️⃣ Run Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

or

```bash
pnpm dev
```

or

```bash
bun dev
```

---

### 4️⃣ Open in Browser

Visit:

```
http://localhost:3000
```

---

## ✏️ How to Edit the Project

- Open `app/page.tsx`
- Modify content
- Save the file → changes will auto-refresh in browser

---

## 🔤 Font Optimization

This project uses **next/font** to load the **Geist font**, ensuring:

- Better performance
- No layout shift
- Automatic optimization

---

## 📦 Available Scripts

| Command        | Description                     |
|----------------|---------------------------------|
| `npm run dev`  | Start development server        |
| `npm run build`| Build for production            |
| `npm start`    | Start production server         |
| `npm run lint` | Run ESLint                      |

---

## 🚀 Production Build

To build and run the app in production:

```bash
npm run build
npm start
=======
This installs:
- `next` — Next.js framework
- `react` + `react-dom` — React
- `reactflow` — graph canvas library
- `zustand` — state management
- `typescript` — type safety
- `@types/react`, `@types/node` — TypeScript type definitions

---

### Step 3 — Run Development Server

```bash
npm run dev
```

Open your browser at:
```
http://localhost:3000
```

> If port 3000 is busy, Next.js will use 3001 or 3002. Check the terminal output for the exact URL.

---

### Step 4 — Build for Production

```bash
npm run build
npm start
```

---

## Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm start` | Run production build locally |
| `npm run lint` | Run ESLint checks |

---

## How the App Works

### Data Flow

```
First visit:
  lib/seedData.ts → store/index.ts → localStorage → UI

Every visit after:
  localStorage → store/index.ts → UI

Every CRUD action:
  UI → store action → Zustand state (instant re-render) → localStorage (saved)
```

### Graph Layout

```
Left column          Right column
─────────────        ─────────────
[ Alice Chen ]  ───► ● React
[ Bob Martinez] ───► ● TypeScript
[ Carol Smith ] ───► ● Node.js
[ David Kim   ] ───► ● PostgreSQL
[ Eva Johnson ] ───► ● Docker
```

Edges are colored by proficiency:
- 🟡 **Yellow dashed** — Learning
- 🔵 **Blue solid** — Familiar
- 🟢 **Green thick** — Expert

---

## Features Walkthrough

### Add a Person
1. Click **+ Add Person** in the top toolbar
2. Enter name and role
3. Click **Add Person** → appears on graph instantly

### Add a Skill
1. Click **+ Add Skill** in the top toolbar
2. Enter skill name and select category
3. Click **Add Skill** → appears on graph instantly

### Connect Person to Skill
1. Click on a **Person node** on the graph
2. Sidebar opens on the right
3. Click **+ Add Skill**
4. Select skill and proficiency level
5. Click **Add Connection** → edge appears on graph

### Edit / Delete
1. Click any node → sidebar opens
2. Click **Edit** to modify name/role/category
3. Click **Delete** to remove — all connected edges are removed automatically

### View Skill Details
1. Click any **Skill node**
2. Sidebar shows all team members who have it
3. Proficiency breakdown bar chart shows expert/familiar/learning ratio

---

## Data Models

```typescript
// A team member
interface Person {
  id: string;
  name: string;
  role: string;
}

// A skill
interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'data' | 'design' | 'management';
}

// A person-skill link with proficiency
interface Connection {
  id: string;
  personId: string;
  skillId: string;
  proficiency: 'learning' | 'familiar' | 'expert';
}
>>>>>>> a7ac06b (fully detailed readme.md)
```

---

<<<<<<< HEAD
## 🌍 Deployment

The easiest way to deploy this app is using **Vercel**.

### Steps:

1. Push your code to GitHub
2. Go to Vercel
3. Import your repository
4. Click **Deploy**

---

## 📚 Learn More

- Next.js Documentation: https://nextjs.org/docs  
- Learn Next.js: https://nextjs.org/learn  

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make changes
4. Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Yogesh Kumar**

- Passionate Full Stack Developer
- Interested in building scalable web applications

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
=======
## Skill Categories & Colors

| Category | Color |
|---|---|
| Frontend | Indigo `#6366f1` |
| Backend | Sky Blue `#0ea5e9` |
| DevOps | Amber `#f59e0b` |
| Data | Green `#10b981` |
| Design | Pink `#ec4899` |
| Management | Purple `#8b5cf6` |

---

## Persistence

All data is saved in the browser's **localStorage** under the key `skill-matrix-data`.

```json
{
  "people": [...],
  "skills": [...],
  "connections": [...]
}
```

- Data survives page refresh ✅
- Data is lost if you clear browser storage ⚠️
- Data does not sync across devices ❌
- No backend or database required ✅

To reset to seed data — open DevTools → Application → Local Storage → delete `skill-matrix-data` → refresh.

---

## Build From Scratch (Without Cloning)

If you want to build this project yourself from zero:

```bash
# 1. Create Next.js app
npx create-next-app@latest cloudmotive --typescript --eslint --app --no-tailwind --no-src-dir --import-alias "@/*"

cd cloudmotive

# 2. Install dependencies
npm install reactflow zustand

# 3. Create folder structure
mkdir -p types lib store components/modals

# 4. Create files in this order:
#    types/index.ts
#    lib/constants.ts
#    lib/seedData.ts
#    lib/layout.ts
#    store/index.ts
#    components/PersonNode.tsx + .module.css
#    components/SkillNode.tsx + .module.css
#    components/SkillGraph.tsx + .module.css
#    components/modals/Modal.tsx + .module.css
#    components/modals/form.module.css
#    components/modals/PersonModal.tsx
#    components/modals/SkillModal.tsx
#    components/modals/ConnectionModal.tsx
#    components/Sidebar.tsx + .module.css
#    components/Toolbar.tsx + .module.css
#    components/SummaryPanel.tsx + .module.css
#    app/page.tsx
#    app/layout.tsx
#    app/globals.css

# 5. Run
npm run dev
```

---

## Key Concepts Used

### React Flow
React Flow renders the interactive graph. It takes `nodes[]` and `edges[]` arrays and handles zoom, pan, drag automatically. We registered custom node types (`personNode`, `skillNode`) to render our own card/pill designs instead of default boxes.

### Zustand
Zustand is a lightweight global state manager. Any component can read or update state without prop drilling. The store holds all people, skills, connections, and the selected node. Every mutation also writes to localStorage.

### CSS Modules
Each component has its own `.module.css` file. Class names are scoped locally so there are no naming conflicts. No Tailwind, no CSS-in-JS — just plain CSS.

### Dynamic Import
`SkillGraph` is loaded with `next/dynamic` and `ssr: false` because React Flow uses browser APIs (`window`, `document`) that don't exist during Next.js server-side rendering.

---

## Browser Support

Works in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## License

MIT
>>>>>>> a7ac06b (fully detailed readme.md)
