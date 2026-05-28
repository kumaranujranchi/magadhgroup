# Magadh Group Website

Welcome to the official repository for the **Magadh Group Portal**. This is a modern, responsive, and performance-optimized React application designed to showcase the premium contracting, engineering, construction, and material supply services of Magadh Group.

---

## 🏗️ About Magadh Group

Magadh Group is a premier provider of professional construction, maintenance, and material supply services. This portal connects clients with certified professionals and high-quality materials:
- **Contracting Services:** Certified Site Engineers, General Contractors, Painters, Electricians, Plumbers, and AC Technicians.
- **Material Supplies:** Heavy Construction Concrete, Elevators, Modular Kitchens, TMT Steel, Paint, and Cement.

---

## ✨ Key Features

- **Responsive Layout:** Tailored with Bootstrap 5 and modern responsive grids for all device form-factors.
- **Glassmorphic Sticky Header:** Dynamic and smooth navigation headers (`HeaderOne`, `HeaderTwo`, `HeaderThree`, `HeaderFour`) that animate into a glassmorphic sticky state on scroll-up, featuring polished transparency overlay animations.
- **Asset Optimization:** Unified image structure (`src/assets/img`) leveraging WebP formats. Cleaned up redundant and unused media files (saving **61.56 MB** of workspace footprint).
- **Dynamic Content:** Markdown-powered blogging engine using `craco` config loader, `react-markdown`, and `remark-gfm`.
- **Interactive Elements:** Smooth Swiper carousels, numeric counters (`react-countup`), video modals, and dynamic animations (`wowjs`).

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Configuration:** [CRACO 7](https://craco.js.org/) (Create React App Configuration Override)
- **Styling:** Bootstrap 5, SASS / Vanilla CSS
- **Animations:** wow.js, animate.css
- **Dynamic Components:** Swiper, react-countup, react-markdown, react-modal-video
- **Hosting/Routing:** React Router v6, Netlify-optimized routing (`public/_redirects`)

---

## 📂 Project Structure

The project has been cleaned and restructured for developer convenience directly in the root workspace:

```text
magadhgroup/
├── craco.config.js       # CRACO build/loader overrides
├── package.json          # Node dependencies and project scripts
├── public/               # Public assets, manifest.json, robots.txt, _redirects
└── src/
    ├── App.js            # Main application entry point with routing
    ├── index.js          # DOM renderer
    ├── assets/
    │   └── img/          # Consolidated and optimized WebP images
    ├── components/       # Reusable components
    │   ├── layout/       # Headers, Footers, and Logos
    │   └── pages/        # Page-specific views (About, Portfolio, Blogs, etc.)
    ├── content/          # Markdown posts and pages
    └── utils/            # Helper utilities and custom scripts
```

---

## 🚀 Getting Started

To get a local copy of this project running, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (recommended version `v18` or `v20`).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kumaranujranchi/magadhgroup.git
   cd magadhgroup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run the following scripts:

#### `npm start`
Runs the app in development mode using CRACO.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will hot-reload if you make edits.

#### `npm run build`
Builds the app for production in the `build` folder.
It correctly bundles React in production mode and optimizes the build for best performance, creating minimized and hashed filenames.

#### `npm test`
Launches the test runner in interactive watch mode.

---

## 🛡️ License

This project is private and proprietary to Magadh Group.
