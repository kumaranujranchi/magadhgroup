// Central blog registry — add new blog entries here
// Each entry maps to a .md file in src/content/blogs/
// 
// HOW TO ADD A NEW BLOG POST:
// 1. Create a new .md file in src/content/blogs/your-slug.md
// 2. Add an entry below with the matching slug
// 3. Push to GitHub — Netlify will auto-deploy

import tmt from './understanding-tmt-steel-bars-backbone-modern-construction.md';
import elevator from './choosing-right-elevator-residential-commercial-buildings.md';
import ecoPaint from './eco-friendly-paints-primers-improve-indoor-air-quality.md';
import rmc from './ready-mix-concrete-rmc-vs-site-mixed-concrete-best-choice.md';
import kitchen from './key-trends-modern-modular-kitchen-designs-compact-homes.md';
import cement from './role-high-grade-cement-earthquake-resistant-foundations.md';

const blogFiles = [
    tmt,
    elevator,
    ecoPaint,
    rmc,
    kitchen,
    cement,
];

export default blogFiles;
