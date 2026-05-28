// Blog loader utility
// Reads all .md files registered in src/content/blogs/index.js
// Parses frontmatter + markdown content at build time — no backend needed

import blogFiles from '../content/blogs/index.js';

/**
 * Parses frontmatter from a raw markdown string.
 * Extracts the YAML block between --- delimiters.
 */
function parseFrontmatter(rawContent) {
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
    const match = rawContent.match(frontmatterRegex);
    if (!match) return { frontmatter: {}, content: rawContent };

    const yamlBlock = match[1];
    const content = match[2].trim();

    const frontmatter = {};
    yamlBlock.split('\n').forEach(line => {
        line = line.replace(/\r$/, '');
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) return;
        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();
        // Remove surrounding quotes
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        // Parse arrays like ["tag1", "tag2"]
        if (value.startsWith('[') && value.endsWith(']')) {
            try { value = JSON.parse(value); } catch (e) { value = []; }
        }
        frontmatter[key] = value;
    });

    return { frontmatter, content };
}

let _cache = null;

/**
 * Load all blog posts sorted by date (newest first)
 */
export function getAllBlogs() {
    if (_cache) return _cache;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const posts = blogFiles.map((rawContent) => {
        const { frontmatter, content } = parseFrontmatter(rawContent);
        
        // Parse date dynamically from frontmatter
        const d = frontmatter.date ? new Date(frontmatter.date) : new Date();
        const formattedDay = !isNaN(d.getDate()) ? String(d.getDate()).padStart(2, '0') : (frontmatter.day || '01');
        const formattedMonth = !isNaN(d.getMonth()) ? monthNames[d.getMonth()] : (frontmatter.month || 'May');
        const formattedYear = !isNaN(d.getFullYear()) ? String(d.getFullYear()) : '2026';

        return {
            ...frontmatter,
            day: formattedDay,
            month: formattedMonth,
            year: formattedYear,
            markdownContent: content,
            // Ensure slug falls back to id
            slug: frontmatter.id || '',
        };
    });
    _cache = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return _cache;
}

/**
 * Get a single blog post by slug/id
 */
export function getBlogBySlug(slug) {
    return getAllBlogs().find(post => post.slug === slug || post.id === slug) || null;
}

/**
 * Get N recent posts, optionally excluding one slug
 */
export function getRecentBlogs(count = 3, excludeSlug = null) {
    return getAllBlogs()
        .filter(post => post.slug !== excludeSlug)
        .slice(0, count);
}
