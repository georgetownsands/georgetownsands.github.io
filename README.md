# Georgetown Sands Website

Official website for the Georgetown Sands townhome community located in Duck, North Carolina ([georgetownsands.com](https://georgetownsands.com)).

Built with **Astro 5** and **Tailwind CSS**, deployed automatically to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (tested through Node 24)
- npm

### Development
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```
Open `http://localhost:4321` in your browser.

### Production Build & Preview
```bash
# Build static files into ./dist
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
├── .github/workflows/
│   └── gh-pages.yaml       # GitHub Actions automated build & deployment
├── public/
│   ├── CNAME               # Custom domain: georgetownsands.com
│   ├── favicon.png         # Site favicon
│   └── images/             # Static images
├── src/
│   ├── components/         # Reusable Astro components (Navbar, DirectoryCard, FilterableDirectory)
│   ├── data/
│   │   └── area.ts         # Directory data (Restaurants, Shopping, Activities, HOA)
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML layout with SEO metadata & AdSense
│   └── pages/              # Astro routes (/, /rent, /restaurants, /shopping, /activities, /404)
├── astro.config.mjs        # Astro configuration & integrations
└── tailwind.config.mjs     # Tailwind CSS theme configuration (coastal & ocean palettes)
```

## 🌐 Community Links
- **Property Owners Portal**: [Enumerate / GoEnumerate](https://engage.goenumerate.com/s/GSP/)
- **Town of Duck**: [Town of Duck Official Website](https://www.townofduck.com/)
