# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the Fantastic Octo Robot blog codebase.

## Development Commands

- `yarn dev` - Start development server on http://localhost:3000 (uses cross-env for Windows compatibility)
- `yarn build` - Build for production (runs Contentlayer processing, Next.js build, and postbuild script)
- `yarn serve` - Start production server (renamed from `start`)
- `yarn start` - Alias for `yarn dev` (development mode)
- `yarn lint` - Run ESLint with auto-fix on pages, app, components, lib, layouts, scripts directories
- `yarn analyze` - Build with bundle analyzer enabled (set ANALYZE=true)
- `yarn prepare` - Run Husky setup for git hooks

### Static Deployment Commands

For platforms like GitHub Pages or S3:

```bash
EXPORT=1 UNOPTIMIZED=1 yarn build
```

With custom base path:

```bash
EXPORT=1 UNOPTIMIZED=1 BASE_PATH=/myblog yarn build
```

## Architecture Overview

### Content Management System

This is a **Contentlayer-powered blog** where content and code are separate concerns:

- **Contentlayer** (`contentlayer.config.ts`) processes MDX files in `data/` directory into type-safe objects
- **Blog posts** live in `data/blog/*.mdx` with frontmatter schema (title, date, tags, draft, summary, etc.)
- **Authors** live in `data/authors/*.mdx` with author schema (name, avatar, occupation, social links)
- **Content processing** happens at build time, generating:
  - Tag counts (`app/tag-data.json`)
  - Search index (`public/search.json`)
  - Table of contents for posts
  - Structured data for SEO

### Routing Architecture (Next.js App Router)

- **Blog system**:
  - `/blog` - List all posts
  - `/blog/[...slug]` - Individual posts (supports nested paths)
  - `/blog/page/[page]` - Paginated blog listing
- **Tag system**:
  - `/tags` - List all tags
  - `/tags/[tag]` - Posts by tag
  - `/tags/[tag]/page/[page]` - Paginated tag listings
- **Other pages**: `/about`, `/projects`, static pages

### Component Architecture

- **Layout system**: `layouts/` contains multiple post layouts (PostLayout, PostSimple, PostBanner, AuthorLayout)
- **MDX integration**: `components/MDXComponents.tsx` defines which React components are available in MDX content
- **Theme system**: Dark/light theme with `next-themes` and Tailwind CSS
- **Search**: Integrated kbar search with local JSON index

### Configuration Files

- **Site metadata**: `data/siteMetadata.js` - Central config for site info, analytics, comments, newsletter
- **Navigation**: `data/headerNavLinks.ts` - Header navigation items
- **Projects**: `data/projectsData.ts` - Portfolio/projects data
- **Bibliography**: `data/references-data.bib` - BibTeX references for academic posts

### Content Processing Pipeline

1. **Build time**: Contentlayer processes MDX files
2. **Remark plugins**: Process Markdown (GFM, math, code titles, image conversion)
3. **Rehype plugins**: Process HTML (syntax highlighting, autolink headings, citations, KaTeX)
4. **Generated files**: Tag counts and search index are created automatically

### Security Headers

`next.config.js` includes comprehensive security headers (CSP, X-Frame-Options, etc.) and configures analytics/comments domains.

### Key Dependencies

- **Content**: Contentlayer2 (0.5.5), gray-matter, reading-time
- **Framework**: Next.js 15.2.4, React 19.0.0, TypeScript 5.1.3
- **MDX processing**: Remark/Rehype ecosystem for markdown transformation
- **UI**: Tailwind CSS 4.0.5, Headless UI 2.2.0, next-themes
- **Analytics/Comments**: Pliny package (0.4.1) provides analytics and comments integration
- **Search**: Kbar for command palette search functionality
- **Development**: Cross-env, Husky, lint-staged, ESLint 9.x, Prettier

## Development Setup

### Package Manager Configuration

This project uses Yarn 3.6.1 with specific plugins:

- **Interactive Tools Plugin**: Enables interactive dependency management
- **Node Modules Linker**: Uses traditional node_modules structure
- Plugin path: `.yarn/plugins/@yarnpkg/plugin-interactive-tools.cjs`

### Git Hooks Setup

Husky is configured for git hooks with lint-staged:

- **Pre-commit**: Runs ESLint --fix on JS/TS files, Prettier on all supported files
- **Setup**: Run `yarn prepare` to initialize Husky hooks

### Content Management Patterns

#### Blog Posts

- **Location**: `data/blog/*.mdx`
- **Required frontmatter**: `title`, `date`
- **Optional frontmatter**: `tags`, `draft`, `summary`, `authors`, `layout`, `canonicalUrl`
- **Example starter post**: `data/blog/welcome.mdx`

#### Author Management

- **Location**: `data/authors/*.mdx`
- **Default author**: `data/authors/default.mdx`
- **Schema**: name, avatar, occupation, social links

#### Site Configuration

- **Primary config**: `data/siteMetadata.js` (contains placeholders to customize)
- **Navigation**: `data/headerNavLinks.ts`
- **Projects**: `data/projectsData.ts`
- **Bibliography**: `data/references-data.bib`

## Implementation Guidelines

### Adding New Content Types

Modify `contentlayer.config.ts` and define schema with computed fields. Ensure proper TypeScript types are generated.

### Custom MDX Components

Add React components to `components/MDXComponents.tsx` to make them available in all MDX content. Components must be default exports.

### Analytics and Comments Setup

1. Configure providers in `data/siteMetadata.js`:
   - **Analytics**: Umami (default), Plausible, Google Analytics, Posthog
   - **Comments**: Giscus (default), Utterances, Disqus
   - **Newsletter**: Buttondown (default), Mailchimp, Convertkit, etc.

2. Update CSP in `next.config.js` when adding new third-party services

3. Set environment variables for external services (see siteMetadata.js for required vars)

### Image Handling

Images use next/image with custom component. Remote images must be configured in `next.config.js` remotePatterns.

### Theme and Styling

- **Tailwind config**: Uses Tailwind CSS 4.0.5 with PostCSS
- **CSS files**: Located in `css/` directory
- **Code highlighting**: Customize themes in `css/prism.css`
- **Dark/light mode**: Managed by next-themes package

### Deployment Considerations

- **Static export**: Use `EXPORT=1 UNOPTIMIZED=1 yarn build` for static hosting
- **Base path**: Add `BASE_PATH=/myblog` for subdirectory deployments
- **Environment variables**: Required for analytics, comments, and newsletter services
