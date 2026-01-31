# AdasPH - Administración de Propiedad Horizontal

Professional, scalable, and migrable website for property horizontal administration company.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: Static Site Generation (SSG)
- **Hosting**: Edge/CDN-friendly (Cloudflare Pages, Vercel, Netlify)

## Project Structure

```
adasph/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── servicios/         # Services page
│   ├── quienes-somos/     # About Us page
│   ├── casos/             # Success cases/Testimonials page
│   └── contacto/          # Contact page
├── components/            # Reusable UI components
│   ├── layout/           # Header, Footer
│   └── forms/            # Contact form
├── lib/                  # Utilities and business logic
│   └── content.ts        # Content management layer
├── data/                 # Content files (JSON/Markdown)
│   ├── services.json
│   ├── testimonials.json
│   ├── company.json
│   └── team.json
└── public/               # Static assets
```

## Architecture Decisions

### Static Site Generation (SSG)

**Decision**: Use `export const dynamic = "force-static"` and `output: "export"` in Next.js config.

**Rationale**:
- Minimizes hosting costs (no server required)
- Maximum performance (pre-rendered HTML)
- Edge/CDN-friendly deployment
- Better SEO (fully rendered content)

**Trade-offs**:
- No server-side features (API routes, middleware)
- Content updates require rebuild
- **Mitigation**: Content layer abstraction allows easy migration to headless CMS with ISR

### Content Management Layer

**Decision**: Local JSON files with abstraction layer (`lib/content.ts`).

**Rationale**:
- Simple and fast for initial development
- Easy to replace with CMS API calls
- No external dependencies
- Version-controlled content

**Future Migration Path**:
Replace `getServices()`, `getTestimonials()`, etc. with API calls to headless CMS (Contentful, Strapi, Sanity, etc.) without changing component code.

### Component Architecture

**Decision**: Separation of concerns: UI Components, Layouts, Content Layer.

**Rationale**:
- Maintainable and testable
- Easy to extend (blog, private areas)
- Reusable components
- Clear responsibilities

### Form Handling

**Decision**: Client-side form with validation, ready for external service integration.

**Rationale**:
- No backend required (static site)
- Flexible integration options (Formspree, Netlify Forms, EmailJS, custom API)
- Good UX with validation and loading states

**Integration Options**:
- Formspree: Add endpoint URL in `ContactForm.tsx`
- Netlify Forms: Add `netlify` attribute to form
- EmailJS: Use EmailJS SDK
- Custom API: Replace fetch call with API route (requires server)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (if not using static export)
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Cloudflare Pages

1. Push code to GitHub repository
2. Go to Cloudflare Dashboard → Pages
3. Connect repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 18 or higher
5. Deploy

**Note**: Cloudflare Pages automatically detects Next.js and configures accordingly. The static export will be served from the `out` directory.

### Vercel

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Vercel auto-detects Next.js configuration
5. Deploy

**Note**: For static export, ensure `output: "export"` is set in `next.config.ts`. Vercel will build and deploy automatically.

### Netlify

1. Push code to GitHub repository
2. Go to Netlify Dashboard
3. Add new site from Git
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
5. Deploy

### Manual Static Export

```bash
npm run build
```

The static files will be in the `out/` directory. Upload this directory to any static hosting service.

## Environment Variables

Currently, no environment variables are required. For future CMS integration, add:

```env
NEXT_PUBLIC_CMS_API_URL=...
NEXT_PUBLIC_CMS_API_KEY=...
```

## Future Enhancements

### Blog System

1. Create `app/blog/` directory
2. Add blog posts in `data/blog/` (Markdown or JSON)
3. Use Next.js dynamic routes: `app/blog/[slug]/page.tsx`
4. Implement RSS feed generation

### Headless CMS Integration

1. Install CMS SDK (e.g., `contentful`, `@sanity/client`)
2. Update `lib/content.ts` functions to fetch from CMS
3. Add environment variables for API keys
4. Consider ISR (Incremental Static Regeneration) for dynamic content

### Private Areas

1. Add authentication (NextAuth.js, Clerk, etc.)
2. Create protected routes: `app/dashboard/`
3. Implement role-based access control
4. Add API routes for authenticated endpoints

## Contributing

1. Follow TypeScript best practices
2. Use semantic HTML
3. Ensure responsive design (mobile-first)
4. Write comments in English
5. Commit messages in English

## License

Private - All rights reserved
