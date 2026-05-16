import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// zhangdaman.github.io is a user-page repo → site lives at the root,
// so base is '/'. If you ever move to a project-page repo, change base
// to '/<repo-name>/'.
export default defineConfig({
    base: '/',
    plugins: [react()],
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
});
