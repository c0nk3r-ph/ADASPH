# Architecture Documentation

This document explains the architectural decisions and design patterns used in the AdasPH website.

## Overview

The AdasPH website is built as a static site using Next.js with Static Site Generation (SSG). The architecture is designed to be:

- **Scalable**: Easy to extend with new features (blog, CMS, private areas)
- **Migrable**: Can be deployed to any static hosting platform
- **Maintainable**: Clear separation of concerns
- **Performant**: Pre-rendered static HTML for optimal performance

## Architecture Layers

### 1. Presentation Layer (`app/` and `components/`)

**Purpose**: UI components and page layouts

**Structure**:
- `app/`: Next.js App Router pages (routes)
- `components/`: Reusable UI components
  - `layout/`: Header, Footer
  - `forms/`: Form components

**Principles**:
- Components are pure and focused on presentation
- No business logic in components
- TypeScript for type safety
- Responsive design (mobile-first)

### 2. Content Layer (`lib/content.ts`)

**Purpose**: Abstraction layer for content management

**Current Implementation**:
- Loads content from local JSON files
- Provides typed interfaces for content

**Future Migration**:
- Replace JSON imports with API calls to headless CMS
- No changes needed in presentation layer
- Supports ISR (Incremental Static Regeneration) for dynamic content

**Example Migration**:
```typescript
// Current (local files)
export async function getServices(): Promise<Service[]> {
  const services = await import("@/data/services.json");
  return services.default;
}

// Future (headless CMS)
export async function getServices(): Promise<Service[]> {
  const response = await fetch(`${CMS_API_URL}/services`, {
    headers: { Authorization: `Bearer ${CMS_API_KEY}` }
  });
  return response.json();
}
```

### 3. Data Layer (`data/`)

**Purpose**: Content storage (current: JSON files)

**Structure**:
- `services.json`: Service offerings
- `testimonials.json`: Client testimonials
- `company.json`: Company information
- `team.json`: Team members

**Future Options**:
- Markdown files for blog posts
- Headless CMS (Contentful, Strapi, Sanity)
- Database (if dynamic features needed)

## Design Patterns

### Static Site Generation (SSG)

**Pattern**: Pre-render all pages at build time

**Implementation**:
- `export const dynamic = "force-static"` on each page
- `output: "export"` in `next.config.ts`
- All routes are statically generated

**Benefits**:
- Zero server costs
- Maximum performance
- Perfect SEO
- Edge/CDN friendly

**Trade-offs**:
- Content updates require rebuild
- No server-side features

**Mitigation**:
- Content layer abstraction allows easy migration to ISR
- Can add webhooks for automatic rebuilds

### Content Abstraction Pattern

**Pattern**: Separate content fetching from presentation

**Implementation**:
- `lib/content.ts` provides typed functions
- Components import from content layer, not data files directly
- Easy to swap data sources

**Benefits**:
- Single source of truth for content structure
- Easy to test
- Simple migration path to CMS

### Component Composition

**Pattern**: Build complex UIs from simple components

**Implementation**:
- Reusable Header/Footer in layout
- Form components with validation
- Consistent styling with Tailwind utilities

**Benefits**:
- DRY (Don't Repeat Yourself)
- Consistent UI
- Easy to maintain

## File Structure Rationale

```
app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx            # Home page (/)
├── servicios/          # Services page (/servicios)
├── quienes-somos/      # About page (/quienes-somos)
├── casos/              # Testimonials (/casos)
└── contacto/           # Contact page (/contacto)

components/
├── layout/             # Layout components
│   ├── Header.tsx
│   └── Footer.tsx
└── forms/              # Form components
    └── ContactForm.tsx

lib/
└── content.ts          # Content management layer

data/                   # Content files (JSON)
├── services.json
├── testimonials.json
├── company.json
└── team.json
```

**Rationale**:
- `app/` follows Next.js App Router conventions
- `components/` groups by feature/type
- `lib/` contains utilities and business logic
- `data/` contains content (easily replaceable)

## SEO Strategy

### Metadata Management

**Implementation**:
- Per-page metadata in `metadata` export
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready (can add JSON-LD)

**Location**: Each page exports `metadata` object

### Performance Optimization

**Current**:
- Static HTML (fastest possible)
- Tailwind CSS (minimal CSS)
- No JavaScript for content (progressive enhancement)

**Future Options**:
- Image optimization (Next.js Image component when removing static export)
- Font optimization (already using Next.js font optimization)
- Code splitting (automatic with Next.js)

## Form Handling Strategy

### Current Implementation

**Pattern**: Client-side validation + ready for external service

**Features**:
- Client-side validation
- Loading states
- Error handling
- Success feedback

**Integration Points**:
- Formspree: Add endpoint URL
- Netlify Forms: Add `netlify` attribute
- EmailJS: Use EmailJS SDK
- Custom API: Replace with API route (requires server)

### Future Enhancements

- Server-side validation (if adding API routes)
- Rate limiting
- Spam protection (reCAPTCHA, etc.)
- Email notifications

## Scalability Considerations

### Adding a Blog

**Path**:
1. Create `app/blog/` directory
2. Add `app/blog/[slug]/page.tsx` for dynamic routes
3. Add blog posts in `data/blog/` (Markdown or JSON)
4. Use `generateStaticParams` for all blog posts
5. Add RSS feed generation

**No Breaking Changes**: Existing structure remains intact

### Adding Headless CMS

**Path**:
1. Install CMS SDK
2. Update `lib/content.ts` functions
3. Add environment variables
4. Optionally add ISR for dynamic content
5. Remove `output: "export"` if using ISR

**Migration Effort**: Low (content layer abstraction)

### Adding Private Areas

**Path**:
1. Add authentication (NextAuth.js, Clerk, etc.)
2. Create `app/dashboard/` with protected routes
3. Add API routes for authenticated endpoints
4. Remove `output: "export"` (requires server)

**Consideration**: Requires server-side features

## Technology Choices

### Next.js App Router

**Why**: Modern routing, server components, excellent DX

**Alternatives Considered**:
- Pages Router: Older, less flexible
- Remix: Good but less ecosystem
- Astro: Great for static, but less React features

### TypeScript

**Why**: Type safety, better DX, catch errors early

**Trade-off**: Slightly more verbose, but worth it for maintainability

### Tailwind CSS

**Why**: Utility-first, fast development, small bundle size

**Alternatives Considered**:
- CSS Modules: More verbose
- Styled Components: Runtime overhead
- CSS-in-JS: Bundle size concerns

### Static Export

**Why**: Zero server costs, maximum performance

**Trade-off**: No server features, but can be removed later if needed

## Performance Targets

- **Lighthouse Score**: 90+ (all categories)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

**Achieved Through**:
- Static HTML (instant load)
- Minimal JavaScript
- Optimized CSS (Tailwind)
- No blocking resources

## Security Considerations

### Current (Static Site)

- No server = no server vulnerabilities
- HTTPS enforced by hosting platform
- No user input processing (forms go to external services)

### Future (If Adding Dynamic Features)

- Input validation (already in forms)
- CSRF protection (if adding API routes)
- Rate limiting (if adding API routes)
- Authentication best practices (if adding private areas)

## Testing Strategy

### Current

- Manual testing during development
- TypeScript catches type errors
- ESLint catches code quality issues

### Future Recommendations

- Unit tests for utilities (`lib/`)
- Component tests (React Testing Library)
- E2E tests (Playwright, Cypress)
- Visual regression tests (Percy, Chromatic)

## Monitoring and Analytics

### Recommended Additions

- **Analytics**: Google Analytics, Plausible, or Vercel Analytics
- **Error Tracking**: Sentry (if adding dynamic features)
- **Performance**: Web Vitals monitoring
- **Uptime**: UptimeRobot, Pingdom

## Conclusion

This architecture provides a solid foundation that can grow with business needs while maintaining simplicity and performance. The abstraction layers ensure that future enhancements (CMS, blog, private areas) can be added without major refactoring.
