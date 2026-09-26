import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repository name exactly for GitHub Pages
// project sites, e.g. if your repo is "portfolio", base should be "/portfolio/".
// If you deploy to a custom domain or a "<username>.github.io" repo, set base to "/".
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
