import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

  return {
    base: isGitHubPages ? '/portfolio/' : '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR can be disabled in constrained environments to avoid flicker during edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
