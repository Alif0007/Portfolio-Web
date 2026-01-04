# Deployment Guide

## Quick Deployment Options

### Option 1: Netlify (Recommended)

#### Method A: Drag & Drop
1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to deploy

#### Method B: Git-based Deployment
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and your site will be live!

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Before Deployment Checklist

- [ ] Add your actual resume PDF to `/public/resume.pdf`
- [ ] Update all social media links (LinkedIn, Twitter, Facebook)
- [ ] Replace placeholder phone numbers with real ones
- [ ] Update project GitHub links and live demo URLs
- [ ] Test all links and buttons
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Test both dark and light modes
- [ ] Verify all images load correctly
- [ ] Run build command and check for errors

## Post-Deployment

1. Set up custom domain (optional):
   - Netlify: Site settings > Domain management
   - Vercel: Project settings > Domains

2. Enable HTTPS (automatically enabled on Netlify/Vercel)

3. Test the live site thoroughly

4. Share your portfolio link on:
   - LinkedIn
   - GitHub profile README
   - Resume
   - Job applications

## Environment Variables (if needed later)

Create a `.env` file:
```
VITE_API_URL=your_api_url
VITE_EMAIL_SERVICE_ID=your_email_service_id
```

Access in code: `import.meta.env.VITE_API_URL`

## Troubleshooting

### Build fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Images not loading
- Ensure images are in `public` folder or imported correctly
- Check image URLs in production

### Links not working
- Verify all `href` attributes
- Check that external links have `https://`

## Performance Optimization

1. Optimize images:
   - Use WebP format where possible
   - Compress images before uploading
   - Use appropriate image sizes

2. Lighthouse score:
   - Run in Chrome DevTools
   - Address any performance issues

3. Enable caching on hosting platform

## Support

If you encounter issues:
1. Check browser console for errors
2. Review Netlify/Vercel build logs
3. Ensure all dependencies are installed
4. Verify Node.js version compatibility

---

Good luck with your deployment! 🚀
