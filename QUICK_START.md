# Quick Start Guide

Get the AdasPH website up and running in minutes.

## Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

The static files will be in the `out/` directory.

## Project Structure Overview

```
├── app/              # Pages (routes)
├── components/       # Reusable components
├── lib/             # Utilities and content layer
├── data/            # Content files (JSON)
└── public/          # Static assets
```

## Customization

### Update Content

Edit JSON files in `data/`:
- `services.json` - Services offered
- `testimonials.json` - Client testimonials
- `company.json` - Company information
- `team.json` - Team members

### Update Styling

- Edit `tailwind.config.ts` for theme customization
- Edit `app/globals.css` for global styles
- Use Tailwind utility classes in components

### Add Pages

1. Create new directory in `app/` (e.g., `app/nueva-pagina/`)
2. Add `page.tsx` file
3. Export metadata for SEO
4. Add link to navigation in `components/layout/Header.tsx`

## Next Steps

- Read [README.md](./README.md) for detailed documentation
- Read [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions
- Read [ARCHITECTURE.md](./ARCHITECTURE.md) for architecture details
- Read [docs/FORM_INTEGRATION.md](./docs/FORM_INTEGRATION.md) for form integration

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run linter

# Production
npm run build        # Create static export
npm start            # Start production server (if not using static export)
```

## Troubleshooting

### Port already in use
Change port: `npm run dev -- -p 3001`

### Build errors
- Check Node.js version: `node --version` (should be 18+)
- Clear cache: `rm -rf .next out node_modules && npm install`

### TypeScript errors
- Run: `npm run lint` to see detailed errors

## Support

For issues or questions:
1. Check documentation files
2. Review error messages
3. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
