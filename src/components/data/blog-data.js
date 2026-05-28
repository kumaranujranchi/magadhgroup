// blog-data.js — now powered by markdown files in src/content/blogs/
// DO NOT add posts here manually. Instead:
//   1. Create a new .md file in src/content/blogs/your-slug.md
//   2. Register it in src/content/blogs/index.js
//   3. Push to GitHub — done!

import { getAllBlogs } from '../../utils/blogLoader';

const blogData = getAllBlogs();

export default blogData;