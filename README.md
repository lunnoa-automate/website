# Lunnoa Automate Website

A modern, professional website for Lunnoa Automate built with React, Vite, and Tailwind CSS. Design inspired by the nextPro template with styling optimized for the finance and private equity industry.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Deploying to Hostinger

After running `npm run build`, the `dist` folder will contain all the static files you need:

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your Hostinger `public_html` directory
3. That's it! Your site is live.

## 🎨 Design System

### Based on nextPro Template (Home v2)

This website uses styling patterns from the nextPro template:

- **Tailwind CSS** for all styling
- **Framer Motion** for smooth animations
- **Plus Jakarta Sans** font for modern, professional typography

### Color Palette

```css
--primary: #2E4DFE;        /* Primary blue */
--secondary: #6495ED;      /* Secondary blue */
--muted: #001F3F;          /* Dark navy for text */
--accent: #E2E7FF;         /* Light blue accent */
--green: #32A552;          /* Success green */
--purple: #A22EFE;         /* Purple accent */
```

### Key Design Elements

- Rounded corners (20px-30px border radius)
- Subtle gradient backgrounds
- Grid patterns for visual interest
- Smooth slide-up animations on scroll
- Interactive tabs and accordions

## 📂 Project Structure

```
website/
├── dist/                          # Production build output
├── src/
│   ├── components/
│   │   ├── animations/            # Framer Motion animations
│   │   │   ├── FadeIn.jsx
│   │   │   └── SlideUp.jsx
│   │   ├── sections/              # Page sections
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx       # Vorteile/Benefits
│   │   │   ├── Story.jsx          # Our Story
│   │   │   ├── Features.jsx       # Features + Integrations
│   │   │   ├── UseCases.jsx       # Use Cases with tabs
│   │   │   ├── Team.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── CTA.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/                    # Reusable UI components
│   │       ├── Button.jsx
│   │       ├── Title.jsx
│   │       └── SectionLabel.jsx
│   ├── lib/
│   │   └── utils.js               # cn() utility for Tailwind
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Tailwind + CSS variables
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## ✏️ Customization

### Adding Images/Videos

Replace placeholder elements in these files:

- **Hero Section**: `src/components/sections/Hero.jsx`
- **Story Image**: `src/components/sections/Story.jsx`
- **Feature Screenshots**: `src/components/sections/Features.jsx`
- **Team Photos**: `src/components/sections/Team.jsx`
- **Partner Logos**: `src/components/sections/Team.jsx`

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: #2E4DFE;      /* Change primary color */
  --accent: #E2E7FF;       /* Change accent background */
  --muted: #001F3F;        /* Change heading color */
}
```

### Adding Dark Mode

The CSS variables already support dark mode. Add dark mode toggle and use:

```jsx
document.documentElement.classList.add('dark')
```

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered slide-up effects
- **Interactive Components**: Tab navigation, accordion FAQ
- **Modern Typography**: Plus Jakarta Sans font family
- **Tailwind CSS**: Utility-first styling for easy customization
- **Fast Performance**: Vite build with optimized output
- **SEO Ready**: Proper meta tags and semantic HTML

## 📱 Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Main headline with stats and video placeholder
3. **Services** - 6 benefit cards with icons
4. **Story** - About section with image placeholder
5. **Features** - 4 feature cards with screenshots
6. **Use Cases** - Industry tabs (Finance, Legal, Admin, etc.)
7. **Team** - Team member cards + partner section
8. **FAQ** - Expandable accordion
9. **CTA** - Call-to-action for demo booking
10. **Footer** - Links, address, social icons

## 📝 License

© Lunnoa GmbH - All rights reserved
