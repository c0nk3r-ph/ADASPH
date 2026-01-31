# Deployment Guide

This document provides detailed instructions for deploying the AdasPH website to various hosting platforms.

## General Prerequisites

- Git repository with code pushed
- Node.js 18+ installed (for local builds)
- Account on chosen hosting platform

## Cloudflare Pages

### Step-by-Step Deployment

1. **Prepare Repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Authorize Cloudflare to access your repository
   - Select your repository

3. **Configure Build Settings**
   - **Project name**: `adasph` (or your preferred name)
   - **Production branch**: `main` (or `master`)
   - **Framework preset**: `Next.js` (auto-detected)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty if root)

4. **Environment Variables** (if needed in future)
   - Add any required environment variables in the dashboard
   - Currently none required

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for build to complete
   - Your site will be available at `https://your-project.pages.dev`

6. **Custom Domain** (Optional)
   - Go to **Custom domains** tab
   - Add your domain (e.g., `adasph.com`)
   - Follow DNS configuration instructions

### Cloudflare Pages Advantages

- Free tier with generous limits
- Global CDN included
- Automatic HTTPS
- Preview deployments for PRs
- Fast builds and deployments

## Vercel

### Step-by-Step Deployment

1. **Install Vercel CLI** (Optional, for CLI deployment)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Log in with GitHub
   - Click **Add New Project**
   - Import your repository
   - Vercel auto-detects Next.js configuration

3. **Build Settings** (Auto-configured)
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out` (for static export)
   - Install Command: `npm install`

4. **Environment Variables** (if needed)
   - Add in project settings → Environment Variables

5. **Deploy**
   - Click **Deploy**
   - Wait for build
   - Site available at `https://your-project.vercel.app`

6. **Custom Domain**
   - Go to **Settings** → **Domains**
   - Add your domain
   - Configure DNS as instructed

### Vercel Advantages

- Optimized for Next.js
- Automatic deployments on git push
- Preview deployments
- Edge functions support (if needed later)
- Analytics included

### Important Note for Static Export

If using `output: "export"` in `next.config.ts`, Vercel will build a static site. For dynamic features later, remove this setting and use Vercel's serverless functions.

## Netlify

### Step-by-Step Deployment

1. **Prepare for Netlify Forms** (Optional)
   - If using Netlify Forms, add `netlify` attribute to contact form
   - Update `components/forms/ContactForm.tsx`:
   ```tsx
   <form onSubmit={handleSubmit} netlify data-netlify="true" ...>
   ```

2. **Deploy via Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Log in
   - Click **Add new site** → **Import an existing project**
   - Connect to Git provider
   - Select repository

3. **Build Settings**
   - **Base directory**: `/` (if root)
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: 18 (or higher)

4. **Environment Variables** (if needed)
   - Go to **Site settings** → **Environment variables**

5. **Deploy**
   - Click **Deploy site**
   - Site available at `https://random-name.netlify.app`

6. **Custom Domain**
   - Go to **Domain settings**
   - Add custom domain
   - Configure DNS

### Netlify Advantages

- Built-in form handling (no backend needed)
- Free SSL certificates
- Branch previews
- Split testing
- Edge functions support

## AWS S3 + CloudFront

### Step-by-Step Deployment

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   - Create S3 bucket
   - Enable static website hosting
   - Upload contents of `out/` directory
   - Set bucket policy for public read access

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure custom domain and SSL certificate
   - Deploy

### AWS Advantages

- Enterprise-grade infrastructure
- Full control over configuration
- Scalable and reliable
- Cost-effective for high traffic

## GitHub Pages

### Step-by-Step Deployment

1. **Install gh-pages** (Optional)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add Script to package.json**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d out"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository settings → Pages
   - Select `gh-pages` branch
   - Site available at `https://username.github.io/repo-name`

### GitHub Pages Advantages

- Free for public repositories
- Integrated with GitHub workflow
- Simple deployment process

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form (if integrated)
- [ ] Check mobile responsiveness
- [ ] Verify SEO metadata
- [ ] Test all internal links
- [ ] Configure custom domain (if applicable)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure redirects (if needed)
- [ ] Test form submissions
- [ ] Verify HTTPS is enabled

## Troubleshooting

### Build Fails

- Check Node.js version (18+ required)
- Verify all dependencies are installed
- Check for TypeScript errors: `npm run lint`
- Review build logs for specific errors

### Static Export Issues

- Ensure `output: "export"` is set in `next.config.ts`
- Remove any server-side features (API routes, middleware)
- Check for dynamic routes that need `generateStaticParams`

### Form Not Working

- Verify form service integration (Formspree, Netlify Forms, etc.)
- Check network tab for API errors
- Ensure CORS is configured if using external API

### Images Not Loading

- For static export, ensure `images.unoptimized: true` in `next.config.ts`
- Use relative paths or absolute URLs
- Check image file paths in `public/` directory

## Continuous Deployment

All platforms support automatic deployments:

- **Cloudflare Pages**: Auto-deploys on push to main branch
- **Vercel**: Auto-deploys on push, creates previews for PRs
- **Netlify**: Auto-deploys on push, branch previews available

Configure in platform settings to enable/disable auto-deployments.

## Monitoring and Analytics

Consider adding:

- Google Analytics
- Vercel Analytics (if using Vercel)
- Cloudflare Web Analytics (if using Cloudflare)
- Error tracking (Sentry, etc.)

## Support

For platform-specific issues, consult:

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
