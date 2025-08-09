# Catwoman's Apology - Gotham Themed Website 🦇

A heartfelt Batman Gotham-inspired apology website from Catwoman, featuring dark Gothic aesthetics and an interactive image carousel.

## 🌟 Features

- **Dark Gotham Theme**: Batman-inspired color palette with purple, gold, and dark tones
- **Interactive Image Carousel**: Showcase precious memories with smooth transitions
- **Catwoman Aesthetics**: Cat ears, mask, and paw print animations
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Smooth Animations**: Hover effects, floating elements, and glowing accents
- **Personal Message**: Heartfelt apology with promises and commitments

## 🎨 Design Elements

- Gothic Gotham City skyline background
- Animated Bat-Signal effect
- Catwoman-themed headers with cat ears and mask
- Gradient text with shifting colors
- Glowing buttons and interactive elements
- Custom scrollbar styling

## 🖼️ Image Carousel Features

- Auto-playing slideshow (4-second intervals)
- Manual navigation with previous/next buttons
- Dot indicators for direct navigation
- Pause on hover functionality
- Play/pause toggle button
- Responsive image sizing
- Smooth transitions and hover effects

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 📸 Customizing Images

To add your own images to the carousel:

1. Open `src/components/ImageCarousel.jsx`
2. Replace the placeholder URLs in the `images` array with your actual image URLs:
   ```javascript
   const images = [
     {
       src: "your-image-url-1.jpg",
       alt: "Description of image 1",
       caption: "Caption for your first memory"
     },
     // Add more images...
   ]
   ```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and gradients
- **Modern JavaScript** - ES6+ features

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎭 Theme Colors

- **Gotham Dark**: `#0a0a0f`
- **Purple**: `#8b5a8c`
- **Gold**: `#d4af37`
- **Light Gold**: `#c9a96e`
- **Deep Purple**: `#4a0e4e`
- **Navy**: `#1a1a2e`
- **Slate**: `#2d1b38`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 💝 Customization

Feel free to customize:
- The apology message in `ApologyMessage.jsx`
- Colors in the CSS files
- Animation timings and effects
- Add more interactive elements
- Include sound effects or background music

---

*From the shadows of Gotham, with love* 🖤+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
