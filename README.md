# Futuristic Developer Portfolio

A cutting-edge, tech/futuristic portfolio showcasing full-stack development and software architecture expertise, built with Next.js 14+, Three.js, and Framer Motion.

## 🚀 Features

### Design & Aesthetics
- **Dark Tech/Futuristic Theme**: Deep blacks, electric blues, neon purples, and cyber greens
- **Glass Morphism UI**: Translucent cards with backdrop blur and neon borders
- **Holographic Effects**: Color-shifting gradients and animated borders
- **Scanline Overlay**: Cyberpunk-inspired visual effects
- **Custom Cursor Trail**: Interactive glow effect following mouse movement

### 3D Animations (Three.js)
- **Hero Section**: Interactive particle field responding to mouse movement
- **About Section**: 3D network visualization with interconnected nodes
- **Experience Section**: Animated 3D timeline with floating geometric objects
- **Projects Section**: 3D carousel with floating card frames
- **Skills Section**: Dynamic orbiting skill sphere with rotating nodes

### Scroll Animations
- **Smooth Scrolling**: Powered by Lenis for buttery-smooth navigation
- **Scroll Progress Bar**: Gradient progress indicator
- **Parallax Effects**: Depth and motion on scroll
- **Stagger Animations**: Sequential reveal of content

### Sections
1. **Hero** - Full viewport introduction with typing animation and contact info
2. **About** - Summary, stats counter, and core expertise
3. **Experience** - 3 professional roles with expandable achievements
4. **Projects** - 8 projects with category filtering (Full-stack, Web3)
5. **Skills** - Languages, frameworks, and infrastructure with progress bars
6. **Certifications** - 5 certifications plus education
7. **Contact** - Interactive form with glassmorphism design

## 🛠️ Technologies

### Core
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling

### 3D Graphics
- **Three.js** - WebGL 3D library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Helper components for R3F

### Animations
- **Framer Motion** - Production-ready animations
- **Lenis** - Smooth scroll library

### UI
- **Lucide React** - Modern icon library
- **Custom Components** - Reusable Glass Cards, Neon Buttons, etc.

## 📦 Installation

\`\`\`bash
# Clone the repository
cd portfolio-futuristic

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🎨 Customization

### Update Personal Information
Edit `/lib/data.ts` to update:
- Personal info (name, email, phone, location, social links)
- Professional experience
- Projects
- Skills and certifications
- Education

### Modify Colors
Edit `/app/globals.css` to change:
- CSS variables in `:root`
- Neon colors (blue, purple, green)
- Background colors

### Adjust Animations
- **Three.js**: Modify components in `/components/three/`
- **Scroll**: Tune Lenis settings in `/components/ui/SmoothScroll.tsx`
- **Framer Motion**: Adjust timing in individual section components

## 📁 Project Structure

\`\`\`
portfolio-futuristic/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and custom CSS
├── components/
│   ├── sections/           # Main content sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── three/              # Three.js 3D scenes
│   │   ├── ParticleField.tsx
│   │   ├── NetworkVisualization.tsx
│   │   ├── TimelineScene.tsx
│   │   ├── ProjectCarousel.tsx
│   │   └── SkillSphere.tsx
│   └── ui/                 # Reusable UI components
│       ├── GlassCard.tsx
│       ├── NeonButton.tsx
│       ├── SectionWrapper.tsx
│       ├── ScrollProgress.tsx
│       ├── SmoothScroll.tsx
│       ├── CursorTrail.tsx
│       └── Footer.tsx
├── lib/
│   ├── data.ts             # Portfolio content data
│   └── utils.ts            # Utility functions
└── package.json
\`\`\`

## 🎯 Performance Optimizations

- **Lazy Loading**: Three.js scenes load on-demand
- **Code Splitting**: Heavy components split into chunks
- **Viewport Detection**: Animations trigger only when visible
- **Optimized Geometries**: Simplified 3D shapes for better performance
- **Static Generation**: Pre-rendered at build time

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Requires WebGL support for 3D effects

## 📝 License

MIT License - feel free to use this portfolio template for your own projects!

## 👨‍💻 Developer

**Noman Malik**
- Email: abidnoman888@gmail.com
- GitHub: [github.com/bwithnomi](https://github.com/bwithnomi)
- LinkedIn: [linkedin.com/in/bwithnomi](https://linkedin.com/in/bwithnomi)
- Location: Lahore, Pakistan

---

Built with ❤️ using Next.js, Three.js, and Framer Motion
