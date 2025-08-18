# Fantastic Octo Robot

A modern blog powered by Next.js and Tailwind CSS.

## Features

- **Next.js 15.2.4** with React 19.0.0 and TypeScript 5.1.3
- **Tailwind CSS 4.0.5** for styling with dark/light theme support
- **MDX** support for rich content with React components
- **Contentlayer2 (0.5.5)** for content management
- **SEO optimized** with sitemap, RSS feed, and meta tags
- **Performance optimized** with next/image and font optimization
- **Responsive design** that works on all devices
- **Analytics support** (Umami, Plausible, Google Analytics, etc.)
- **Comments system** (Giscus, Utterances, Disqus)
- **Newsletter integration** (Mailchimp, Buttondown, etc.)
- **Search functionality** with Kbar
- **Syntax highlighting** for code blocks
- **Math expressions** with KaTeX
- **Citation support** for academic content

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn 3.6.1 (recommended) or npm/pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd fantastic-octo-robot
```

2. Install dependencies:

```bash
yarn install
# or
npm install
# or
pnpm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. (Optional) Set up git hooks for code quality:

```bash
yarn prepare
```

## Configuration

### Site Metadata

Update `data/siteMetadata.js` with your site information:

- Site title and description
- Author information
- Social media links
- Analytics configuration
- Comments system setup

### Author Information

Edit `data/authors/default.mdx` to update your author bio and social links.

### Navigation

Customize navigation links in `data/headerNavLinks.ts`.

### Projects

Add your projects to `data/projectsData.ts` to showcase your work.

## Content Management

### Blog Posts

Create new blog posts in the `data/blog/` directory using MDX format:

```markdown
---
title: 'Your Post Title'
date: '2024-01-01'
tags: ['tag1', 'tag2']
draft: false
summary: 'Brief description of your post'
---

Your content here...
```

### Pages

Add custom pages in the `app/` directory following Next.js App Router conventions.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- GitHub Pages (with static export)
- AWS Amplify
- Railway
- And more

For static deployment, run:

```bash
EXPORT=1 UNOPTIMIZED=1 yarn build
```

## Customization

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `css/tailwind.css` for custom styles
- Customize code highlighting in `css/prism.css`

### Components

- Add custom MDX components in `components/MDXComponents.tsx`
- Create reusable components in the `components/` directory
- Customize layouts in the `layouts/` directory

### Content Processing

Configure content processing in `contentlayer.config.ts` to add:

- Custom frontmatter fields
- Additional MDX plugins
- Content validation rules

## Available Scripts

- `yarn dev` / `yarn start` - Start development server on http://localhost:3000
- `yarn build` - Build for production (includes Contentlayer processing and postbuild script)
- `yarn serve` - Start production server
- `yarn lint` - Run ESLint with auto-fix on pages, app, components, lib, layouts, scripts
- `yarn analyze` - Build with bundle analyzer enabled (set ANALYZE=true)
- `yarn prepare` - Set up Husky git hooks for code quality

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

This project is based on the [Tailwind CSS Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template by Timothy Lin.
