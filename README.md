# SkillMatrix — Team Skill Graph

A production-quality interactive graph app to visualize your team's skills, proficiency levels, and skill gaps. Built with Next.js, React Flow, and Zustand.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
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
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── page.module.css
├── components/
│   ├── SkillGraph.tsx
│   ├── SkillGraph.module.css
│   ├── PersonNode.tsx
│   ├── PersonNode.module.css
│   ├── SkillNode.tsx
│   ├── SkillNode.module.css
│   ├── Sidebar.tsx
│   ├── Sidebar.module.css
│   ├── Toolbar.tsx
│   ├── Toolbar.module.css
│   ├── SummaryPanel.tsx
│   ├── SummaryPanel.module.css
│   └── modals/
│       ├── Modal.tsx
│       ├── Modal.module.css
│       ├── form.module.css
│       ├── PersonModal.tsx
│       ├── SkillModal.tsx
│       └── ConnectionModal.tsx
├── store/
│   └── index.ts
├── lib/
│   ├── seedData.ts
│   ├── constants.ts
│   └── layout.ts
├── types/
│   └── index.ts
├── package.json
└── tsconfig.json
```

### What Each File Does

**app/**

- `layout.tsx` — Root HTML wrapper, sets page title and imports global CSS
- `page.tsx` — Main entry point, composes Toolbar + SummaryPanel + SkillGraph + Sidebar
- `globals.css` — Global CSS reset and base font styles
- `page.module.css` — App shell layout (full height flex container)

**components/**

- `SkillGraph.tsx` — React Flow canvas with nodes, edges, zoom, pan, minimap, legend
- `PersonNode.tsx` — Custom person card node (name, role, initials avatar, accent color by role)
- `SkillNode.tsx` — Custom skill pill node (colored dot by category, name, category label)
- `Sidebar.tsx` — Detail panel that slides in when a node is clicked
- `Toolbar.tsx` — Top header bar with Add Person and Add Skill buttons
- `SummaryPanel.tsx` — Left stats panel with member count, top skills, gaps, category breakdown

**components/modals/**

- `Modal.tsx` — Reusable modal shell (overlay + dialog + close button)
- `form.module.css` — Shared input, select, label, and button styles for all forms
- `PersonModal.tsx` — Add or edit a person (name + role fields)
- `SkillModal.tsx` — Add or edit a skill (name + category dropdown)
- `ConnectionModal.tsx` — Link a person to a skill with a proficiency level

**store/**

- `index.ts` — Zustand global store holding all people, skills, connections, selected node, and all CRUD actions with localStorage sync

**lib/**

- `seedData.ts` — Initial demo data loaded on first visit (5 people, 8 skills, 15 connections)
- `constants.ts` — Color maps for skill categories and proficiency levels
- `layout.ts` — Converts store data into React Flow node objects with x/y positions

**types/**

- `index.ts` — TypeScript interfaces for Person, Skill, Connection, Proficiency, SkillCategory

---

## Getting Started

### Prerequisites

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

```bash
npm install
```

This installs:

- `next` — Next.js framework
- `react` + `react-dom` — React
- `reactflow` — graph canvas library
- `zustand` — state management
- `typescript` — type safety
- `@types/react`, `@types/node` — TypeScript definitions

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
Left column           Right column
──────────────        ──────────────
[ Alice Chen  ]  ───► ● React
[ Bob Martinez]  ───► ● TypeScript
[ Carol Smith ]  ───► ● Node.js
[ David Kim   ]  ───► ● PostgreSQL
[ Eva Johnson ]  ───► ● Docker
```

Edges are colored by proficiency:

- Yellow dashed — Learning
- Blue solid — Familiar
- Green thick — Expert

---

## Features Walkthrough

### Add a Person
1. Click **+ Add Person** in the top toolbar
2. Enter name and role
3. Click **Add Person** — appears on graph instantly

### Add a Skill
1. Click **+ Add Skill** in the top toolbar
2. Enter skill name and select category
3. Click **Add Skill** — appears on graph instantly

### Connect Person to Skill
1. Click on a Person node on the graph
2. Sidebar opens on the right
3. Click **+ Add Skill**
4. Select skill and proficiency level
5. Click **Add Connection** — edge appears on graph

### Edit or Delete
1. Click any node — sidebar opens
2. Click **Edit** to modify name, role, or category
3. Click **Delete** to remove — all connected edges are removed automatically

### View Skill Details
1. Click any Skill node
2. Sidebar shows all team members who have it
3. Proficiency breakdown bar chart shows expert/familiar/learning ratio

---

## Data Models

```typescript
interface Person {
  id: string;
  name: string;
  role: string;
}

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'data' | 'design' | 'management';
}

interface Connection {
  id: string;
  personId: string;
  skillId: string;
  proficiency: 'learning' | 'familiar' | 'expert';
}
```

---

## Skill Categories and Colors

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

All data is saved in the browser's localStorage under the key `skill-matrix-data`.

```json
{
  "people": [],
  "skills": [],
  "connections": []
}
```

- Data survives page refresh ✅
- Data is lost if you clear browser storage ⚠️
- Data does not sync across devices ❌
- No backend or database required ✅

To reset to seed data — open DevTools → Application → Local Storage → delete `skill-matrix-data` → refresh.

---

## Build From Scratch Without Cloning

```bash
# 1. Create Next.js app
npx create-next-app@latest cloudmotive --typescript --eslint --app --no-tailwind --no-src-dir --import-alias "@/*"

cd cloudmotive

# 2. Install dependencies
npm install reactflow zustand

# 3. Create folder structure
mkdir -p types lib store components/modals

# 4. Create files in this order
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

## Key Concepts

**React Flow** renders the interactive graph. It takes `nodes[]` and `edges[]` arrays and handles zoom, pan, and drag automatically. Custom node types replace default boxes with our own card and pill designs.

**Zustand** is a lightweight global state manager. Any component reads or updates state without prop drilling. The store holds all people, skills, connections, and the selected node. Every mutation also writes to localStorage.

**CSS Modules** scope class names locally per component so there are no naming conflicts. No Tailwind, no CSS-in-JS — just plain CSS.

**Dynamic Import** loads SkillGraph with `next/dynamic` and `ssr: false` because React Flow uses browser APIs that don't exist during Next.js server-side rendering.

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Author

**Yogesh Kumar** — Full Stack Developer

---

## License

MIT
