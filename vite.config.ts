import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'static-profile-handler',
        configureServer(server) {
          // Explicitly serve /profile.jpg from disk so SPA fallback never intercepts it even without file watching
          server.middlewares.use((req, res, next) => {
            if (req.url && (req.url === '/profile.jpg' || req.url.startsWith('/profile.jpg?'))) {
              const targetPath = path.resolve('public/profile.jpg');
              if (fs.existsSync(targetPath)) {
                const stat = fs.statSync(targetPath);
                res.writeHead(200, {
                  'Content-Type': 'image/jpeg',
                  'Content-Length': stat.size,
                  'Cache-Control': 'public, max-age=31536000, immutable',
                });
                fs.createReadStream(targetPath).pipe(res);
                return;
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
