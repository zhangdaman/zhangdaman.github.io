import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// zhangdaman.github.io is a user-page repo → site lives at the root,
// so base is '/'. Build output goes to vite's default `dist/` (ignored by git),
// then GitHub Actions builds and deploys it on every push.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
