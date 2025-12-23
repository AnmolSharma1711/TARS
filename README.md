# TARS Website - Project Structure

## 🚀 Overview
A modern, high-performance React application featuring 3D graphics, animations, and a clean modular architecture. Built with React 18, Vite 6, Three.js, and Tailwind CSS.

## 📋 Prerequisites
- **Node.js**: v22.21.1 or higher (Required)
- **npm**: v10.9.2 or higher

**Important:** This project requires Node.js v22. Use the `.nvmrc` file:
```bash
nvm use  # Automatically uses version from .nvmrc
node --version  # Verify: should show v22.x.x
```

## 🛠️ Tech Stack
- **Framework**: React 18.3
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS 3.4
- **3D Graphics**: Three.js 0.171, React Three Fiber, React Three Drei
- **Animations**: Framer Motion 12, GSAP 3
- **Routing**: React Router DOM 7
- **Code Quality**: ESLint, Prettier

## 🚀 Quick Start

### Installation
```bash
# Ensure you're using Node.js v22
nvm use 22
# or
nvm use

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 📜 Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
npm run clean    # Clean node_modules and dist
```

## Project Structure

```
src/
├── components/           # All reusable components
│   ├── FeatureCards.jsx  # Feature cards component
│   ├── FeatureCards.css  # Feature cards styling
│   ├── TeamCard.jsx      # Team cards component
│   ├── TeamCard.css      # Team cards styling
│   ├── EventCards.jsx    # Event cards component
│   ├── EventCards.css    # Event cards styling
│   ├── Header.jsx        # Navigation header
│   ├── Header.css
│   ├── Footer.jsx        # Footer with links
│   ├── Footer.css
│   └── ... (other components)
│
├── pages/                # Page components
│   ├── HomePage.jsx      # Home page wrapper
│   ├── AboutPage.jsx     # About page (Features)
│   ├── TeamPage.jsx      # Team page
│   └── EventsPage.jsx    # Events page
│
├── data/                 # Data files (easy to edit)
│   ├── featuresData.js   # Features data array
│   ├── teamMembersData.js # Team members data array
│   └── eventsData.js     # Events data array
│
├── App.jsx               # Main app with routing
├── index.css             # Global styles only
└── main.jsx              # Entry point
```

## How to Add/Remove Cards

### Adding a New Feature Card
Open `src/data/featuresData.js` and add a new object to the array:

```javascript
{
  id: 5,  // Make sure ID is unique
  icon: '🚀',  // Emoji icon
  title: 'Your Feature Title',
  description: 'Your feature description here',
}
```

### Adding a New Team Member
Open `src/data/teamMembersData.js` and add a new object:

```javascript
{
  id: 7,  // Make sure ID is unique
  name: 'John Doe',
  role: 'Position',
  subtitle: 'Specialty',
  image: 'https://your-image-url.com/image.jpg',
  linkedin: 'https://linkedin.com/in/johndoe',
  github: 'https://github.com/johndoe',
}
```

### Adding a New Event
Open `src/data/eventsData.js` and add a new object:

```javascript
{
  id: 7,  // Make sure ID is unique
  title: 'Event Name',
  date: 'March 15, 2024',
  time: '10:00 AM - 2:00 PM',
  location: 'Event Location',
  description: 'Full event description here...',
  attendees: 100,
  image: 'https://your-image-url.com/event.jpg',
  category: 'Workshop',  // Workshop, Seminar, Hackathon, etc.
}
```

## Color Scheme
The website uses a cyan/blue color palette:
- Primary: `#22d3ee` (cyan-400)
- Secondary: `#06b6d4` (cyan-500)
- Muted: `#bae6fd` (sky-200)
- Dark Background: `#020617` (slate-950)

## 🏗️ CSS Organization
- **index.css**: Global styles, Tailwind directives
- **Component CSS files**: Component-specific styles
- **Tailwind CSS**: Utility-first styling throughout

## 🌐 Navigation
The app uses custom routing in [App.jsx](src/App.jsx):
- Home → Hero component
- About → FeatureCards component
- Team → TeamCard component
- Events → EventCards component

To add a new page:
1. Create component in `src/components/` or `src/pages/`
2. Add case in `App.jsx` navigation logic
3. Add navigation link in `Header.jsx`

## 💡 Tips
- IDs must be unique within each data array
- Images should be optimized and properly sized
- Keep descriptions concise for better UX
- The grid system automatically handles responsive layouts

## 📦 Production Build
The production build is optimized with:
- Code splitting for React, Three.js, and animation libraries
- CSS minification
- ESNext target for modern browsers
- Tree shaking for minimal bundle size

## 🔧 Configuration Files
- `.nvmrc` - Node version specification (v22.21.1)
- `vite.config.js` - Vite configuration with optimizations
- `tailwind.config.js` - Tailwind CSS customization
- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Prettier formatting rules

## 📝 License
MIT

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
