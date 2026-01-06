# Modern Portfolio Website

A stunning, professional personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and a beautiful emerald-teal gradient theme.

## Live Demo

🚀 [View Live Demo](https://jenitha-portfolio.vercel.app/)

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons (Lucide React, Font Awesome)
- **Deployment:** Vercel

## Features

- Modern, responsive design optimized for all devices
- Smooth scroll animations and micro-interactions
- Dark theme with emerald-teal gradient accents
- Glassmorphism effects and subtle shadows
- Interactive project showcases with live demos
- Comprehensive skills categorization
- Certifications display
- Contact form with social links
- SEO-friendly structure

## Folder Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with smooth scroll
│   ├── Footer.jsx      # Footer with social links
│   ├── ProjectCard.jsx # Individual project card
│   └── SkillCard.jsx   # Skill display card
├── sections/            # Main page sections
│   ├── Hero.jsx        # Landing hero section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Technical skills showcase
│   ├── Projects.jsx    # Featured projects
│   ├── Certifications.jsx # Achievements
│   └── Contact.jsx     # Contact form and info
├── data/                # Static data and content
│   ├── projects.js     # Project information
│   ├── skills.js       # Skills with icons
│   └── certifications.js # Certification details
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Personal Information

Update the following files with your information:

1. **src/sections/Hero.jsx** - Your name and tagline
2. **src/sections/About.jsx** - Bio and education details
3. **src/data/projects.js** - Your projects
4. **src/data/skills.js** - Your technical skills
5. **src/data/certifications.js** - Your certifications
6. **src/sections/Contact.jsx** - Contact information and social links

### Color Theme

To change the color scheme, update the gradient colors in:
- Tailwind classes (from-emerald-* to-teal-*)
- src/index.css for scrollbar styling

## Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Deployment Options

- **Netlify:** Drag and drop the `dist` folder
- **GitHub Pages:** Use `gh-pages` package
- **Firebase Hosting:** Use Firebase CLI

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint



## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email:** jenithamaxi17@gmail.com
- **GitHub:** [[github.com/yourusername](https://github.com/Jenitha23)](https://github.com/Jenitha23)
- **LinkedIn:** [www.linkedin.com/in/jenitha-johnson-maxi-84631621b](www.linkedin.com/in/jenitha-johnson-maxi-84631621b)

---

Made with ❤️ using React + Vite
