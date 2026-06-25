# Portfolio — BSIT Graduate & Web Developer

A modern, production-ready personal portfolio website built with React + Vite + Tailwind CSS.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **Lucide React** — Icon library
- **React Router DOM** — Client-side routing

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Navigate to the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Customization

All personal data is centralized in `src/utils/constants.js`:

- **`PERSONAL_INFO`** — name, bio, email, phone, social links, resume URL
- **`SKILLS`** — categorized skill groups
- **`PROJECTS`** — featured project cards with tech, highlights, descriptions
- **`ACHIEVEMENTS`** — awards and milestones
- **`EDUCATION`** — degree, school, courses, achievements
- **`EXPERIENCE`** — work history and responsibilities

### Adding a Profile Photo

Replace the initials placeholder in `HeroSection.jsx`:

```jsx
// Find the profile image container and replace with:
<img
  src="/profile.jpg"  // Add your photo to /public/
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

### Connecting the Contact Form

The contact form currently simulates a submission. To connect a real email service:

**Option A — Formspree:**
```jsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option B — EmailJS:**
```bash
npm install @emailjs/browser
```

### Resume Download

Place your resume PDF at `public/resume.pdf` — the Download Resume button links to it automatically.

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Add your resume here
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   ├── AchievementsSection.jsx
│   │   │   └── ContactSection.jsx
│   │   └── ui/
│   │       ├── ScrollProgress.jsx
│   │       ├── BackToTop.jsx
│   │       └── SectionHeader.jsx
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useScrollProgress.js
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── utils/
│   │   └── constants.js    # ← Edit your info here
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Features

- ✅ Dark mode by default with professional deep dark theme
- ✅ Animated scroll progress indicator
- ✅ Active section tracking in navbar
- ✅ Smooth animations with Framer Motion
- ✅ Project category filtering
- ✅ Validated contact form
- ✅ Back to top button
- ✅ Smooth scroll navigation
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO meta tags
- ✅ Accessible (ARIA labels, focus management, semantic HTML)
- ✅ Performance optimized (code splitting, passive listeners)
- ✅ Professional recruiter-focused design
- ✅ Clean cyan accent color on dark background
- ✅ Mobile navigation menu

## Design Philosophy

- **Recruiter-Focused**: Clean, professional layout optimized for job applications
- **Performance First**: Fast loading times and optimized animations
- **Minimal & Modern**: No excessive effects, focus on content and readability
- **Professional Color Scheme**: Deep dark background (#0a0a0a) with cyan accents (#06b6d4)
- **Responsive**: Perfect experience on all devices

## License

MIT — free to use and customize.
