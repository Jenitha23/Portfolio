<div align="center">

# ✦ Jenitha Johnson Maxi — Portfolio

**More than a portfolio — a reflection of who I am, how I think, and what I love to build.**

*Crafted with care using React, Vite, and Framer Motion*

</div>

---

## 🔗 Live Demo

> 🌐 [https://jenitha-portfolio.vercel.app/](https://jenitha-portfolio.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Sections](#-sections)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customisation Guide](#️-customisation-guide)
- [Deployment](#-deployment)
- [Contact](#-contact)

---

## 🧠 Overview

This isn't just a portfolio — it's a digital space that reflects **who I am as a developer and as a person**.

I'm **Jenitha Johnson Maxi**, a Computer Science undergraduate at SLIIT with a deep passion for Full Stack Development, AI/ML, and Mathematics. I believe that great software is equal parts logic and artistry — and this site is my attempt to show both sides. Every section, animation, and interaction was built intentionally: not from a template, but from scratch, with care.

The emerald-teal gradient you see throughout isn't just aesthetic — it represents the energy I bring to my work: fresh, precise, and always growing. The smooth animations aren't decorative noise — they reflect my belief that user experience is never an afterthought. And the clean, structured code beneath it all mirrors how I approach every project: with clarity, consistency, and attention to detail.

Built component-by-component in React with CSS Modules for scoped styles, Framer Motion for scroll-triggered animations, and React Portals for accessible modals — this site is both a showcase of my work and a demonstration of my craft.

---

## 🧩 Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen landing with animated name, role, description, CTA buttons, profile photo, and social icons |
| **About** | Profile card with contact info and socials, bio with highlights, core interests grid, education timeline, and dev philosophy |
| **Skills** | Skills grouped into 4 categories — each rendered as animated `SkillCard` chips with icons and a pulsing colour dot |
| **Projects** | 3-column image card grid; clicking any card opens a detail **modal via React Portal** with description, tech stack, GitHub and Live Demo links |
| **Certifications** | Certificate thumbnails in a 3-column grid; clicking opens a **lightbox via React Portal** showing the full certificate image |
| **Contact** | Left column contact info (email, phone, location) + right column message form with animated focus states |
| **Footer** | Split layout — brand/bio/socials left, three nav columns right; animated divider and fixed back-to-top button |

---

## 🛠 Tech Stack

### Core Framework & Tooling

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18 | Component-based UI |
| **Vite** | 5 | Build tool and dev server |
| **Framer Motion** | latest | Animations and transitions |
| **React Icons** | latest | Icon library (Font Awesome, Simple Icons, etc.) |
| **Vercel** | — | Deployment and hosting |

### Styling Approach

- **CSS Modules** (`.css` files per component) — scoped, collision-free styles
- **Tailwind CSS** — utility classes used in tandem for spacing and layout
- **Custom CSS animations** — `@keyframes` for blobs, particles, underline bars, and spinners
- No global CSS framework conflicts — each section is fully self-contained

### Key Architectural Patterns

| Pattern | Where Used |
|---|---|
| **React Portal** (`createPortal`) | Projects modal, Certifications lightbox — rendered into `document.body` to avoid z-index/transform stacking issues |
| **AnimatePresence** | Wraps modal/lightbox components directly for correct mount/unmount animations |
| **`whileInView`** | Scroll-triggered entrance on every section, card, and content block |
| **`viewport={{ once: true }}`** | Animations fire once — no re-triggering on scroll back |
| **Escape key handler** | `useEffect` keydown listener in each modal/lightbox, cleaned up on unmount |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── profile.png                  # Profile photo (used in Hero + About)
│   ├── Project1.png                     # Verdant Plant Shop screenshot
│   ├── project2.png                     # Palm Beach Resort screenshot
│   ├── project3.png                     # Portfolio screenshot
│   ├── project4.png                     # PathFinder screenshot
│   ├── cert1.png                        # Agile Scrum Master certificate
│   ├── cert2.png                        # Mathematics for Data Science certificate
│   ├── cert3.png                        # Python for Beginners certificate
│   └── Jenitha_JohnsonMaxi_CV.pdf       # Downloadable CV (Navbar + Hero)
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx               # Fixed navbar, scroll-based active section tracking, mobile menu
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx               # Split layout footer, social icons, back-to-top button
│   │   │   └── Footer.css
│   │   └── cards/
│   │       ├── ProjectCard.jsx          # Standalone project card with GitHub/Demo buttons
│   │       ├── ProjectCard.css
│   │       ├── SkillCard.jsx            # Skill chip with dynamic icon, colour, and animated dot
│   │       └── SkillCard.css
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx                 # Landing screen, photo with organic blobs, scroll indicator
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx                # Profile card, bio, interests, education, philosophy
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx               # Category tabs / grid of SkillCards
│   │   │   └── Skills.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx             # Image card grid + React Portal detail modal
│   │   │   └── Projects.css
│   │   ├── Certifications/
│   │   │   ├── Certifications.jsx       # Thumbnail cards + React Portal lightbox
│   │   │   └── Certifications.css
│   │   └── Contact/
│   │       ├── Contact.jsx              # Contact info list + message form with success state
│   │       └── Contact.css
│   │
│   ├── data/
│   │   ├── projects.js                  # All project data (title, description, tech, github, demo, images)
│   │   ├── skills.js                    # Skill categories and skill names
│   │   └── certifications.js           # Certificate data (title, platform, year, icon, image)
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Jenitha23/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev       # Start local development server with HMR
npm run build     # Build optimised production output to /dist
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## ✏️ Customisation Guide

### Personal Information

| File | What to update |
|---|---|
| `src/sections/Hero/Hero.jsx` | Your name, role line, bio description, social links |
| `src/sections/About/About.jsx` | Bio text, contact info (email, phone, location), education details, dev philosophy list |
| `src/sections/Contact/Contact.jsx` | Email, phone number, location, map link |
| `src/components/common/Navbar.jsx` | Nav items, CV download filename |
| `src/components/common/Footer.jsx` | Name, bio, social links, nav column links |

### Content Data Files

| File | What to update |
|---|---|
| `src/data/projects.js` | Project entries — title, description, tech array, github URL, demo URL, image path |
| `src/data/skills.js` | Skill categories and skill names (icons are auto-mapped in `SkillCard.jsx`) |
| `src/data/certifications.js` | Certificate title, platform, year, icon key, image path |

### Adding a New Project

1. Add your screenshot to `public/` — e.g. `project5.png`
2. Add an entry in `src/data/projects.js`:

```js
{
  id: 5,
  title: "Your Project Title",
  description: "A short description of what the project does and its key features.",
  tech: ["React", "Node.js", "MySQL"],
  github: "https://github.com/Jenitha23/your-repo",
  demo: "https://your-demo.vercel.app",   // set to null if not live yet
  images: "/project5.png",
  featured: true   // shows a ⭐ Featured badge on the card
}
```

### Adding a New Certificate

1. Add the certificate image to `public/` — e.g. `cert4.png`
2. Add an entry in `src/data/certifications.js`:

```js
{
  id: 4,
  title: "Certificate Name",
  platform: "Issuing Platform",
  year: "2025",
  icon: "code",       // options: "code" | "chart" | "brain"
  description: "Brief description of what was covered.",
  image: "/cert4.png"
}
```

### Adding a New Skill

Open `src/data/skills.js` and add the skill name under the appropriate category:

```js
{ name: "TypeScript" }   // icon and colour are auto-resolved in SkillCard.jsx
```

To add icon and colour support for a new skill name, add entries to the `iconMap` and `colorMap` objects inside `src/components/cards/SkillCard.jsx`.

### Changing the Colour Theme

The palette is defined inline across CSS files. The key values to find-and-replace are:

| Role | Value |
|---|---|
| Primary emerald | `#10b981` |
| Mid teal | `#14b8a6` |
| Cyan accent | `#06b6d4` |
| Dark background | `#111827` / `#000000` |
| Card surface | `#0d1420` / `#080d16` |

---

## ☁️ Deployment

The portfolio is deployed on **Vercel** with automatic deployments on every push to `main`.

### Deploy Your Own Fork

**Option 1 — Vercel (recommended)**
1. Push your fork to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Vercel auto-detects Vite — click Deploy

**Option 2 — Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option 3 — Netlify**
```bash
npm run build
# Drag and drop the /dist folder at netlify.com/drop
```

**Option 4 — GitHub Pages**
```bash
npm install --save-dev gh-pages
# Add "homepage" to package.json and deploy scripts, then:
npm run deploy
```

---

## 📬 Contact

| Channel | Details |
|---|---|
| **Email** | [jenithamaxi17@gmail.com](mailto:jenithamaxi17@gmail.com) |
| **LinkedIn** | [jenitha-johnson-maxi-84631621b](https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b) |
| **GitHub** | [github.com/Jenitha23](https://github.com/Jenitha23) |
| **Portfolio** | [jenitha-portfolio.vercel.app](https://jenitha-portfolio.vercel.app/) |

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

<div align="center">

Made with ❤️ by **Jenitha Johnson Maxi**

*Built with React · Vite · Tailwind CSS · Framer Motion*

</div>
