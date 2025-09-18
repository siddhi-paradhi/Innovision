# TruthLens AI - Misinformation Checker

A modern React web application for analyzing text credibility using AI-powered detection.

## Prerequisites

Before running this project locally, make sure you have the following installed:

### Required Software
1. **Node.js** (v18.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js) or **yarn**
   - Verify npm: `npm --version`
   - Or install yarn: `npm install -g yarn`

3. **VS Code** (recommended)
   - Download from: https://code.visualstudio.com/

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- Auto Rename Tag

## Setup Instructions

1. **Extract the downloaded zip file** to your desired location

2. **Open the project in VS Code**
   ```bash
   cd path/to/your/extracted-folder
   code .
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or with yarn
   yarn dev
   ```

   **If you see unstyled content (plain HTML):** This means Tailwind CSS isn't processing. Try:
   ```bash
   # Stop the server (Ctrl+C) and restart
   npm run dev
   
   # Or clear cache and restart
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.html             # HTML template
├── components/            # React components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── ResultsSection.tsx
│   ├── HistorySection.tsx
│   ├── CredibilityGauge.tsx
│   └── ui/               # Reusable UI components (shadcn/ui)
├── styles/
│   └── globals.css       # Global styles and Tailwind config
└── package.json          # Dependencies and scripts
```

## Features

- ✨ Modern, clean UI with Tailwind CSS
- 🎯 AI-powered credibility analysis (mock implementation)
- 📊 Visual credibility scoring with circular gauge
- 📝 Analysis history with local storage
- 🎨 Responsive design for all devices
- ⚡ Fast development with Vite
- 🔧 TypeScript for type safety

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **shadcn/ui** components
- **Lucide React** for icons

## Development Notes

- The app currently uses mock analysis - replace the `performAnalysis` function in `App.tsx` to integrate with a real AI API
- All components are fully typed with TypeScript
- The design system follows modern UI patterns with proper accessibility
- Ready for deployment to any static hosting service

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change port: `npm run dev -- --port 3000`

2. **Dependencies installation fails**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **TypeScript errors**
   - Make sure you're using Node.js v18+
   - Restart VS Code TypeScript server: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

4. **Styles not loading**
   - Make sure Tailwind CSS is properly configured
   - Check that `globals.css` is imported in `main.tsx`

## Deployment

To deploy to production:

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure your server to serve `index.html` for all routes

Popular hosting options:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront