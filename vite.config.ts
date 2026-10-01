import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * `vite preview` falls back to the root index.html for "/contact". Real static
 * hosts serve "/contact/index.html", so mirror that locally.
 */
function prerenderedRoutes(): Plugin {
  return {
    name: 'prerendered-routes',
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir);
      server.middlewares.use((req, _res, next) => {
        const url = (req.url ?? '/').split('?')[0];
        if (url !== '/' && !path.extname(url)) {
          const file = path.join(outDir, url.replace(/\/$/, ''), 'index.html');
          if (fs.existsSync(file)) req.url = `${url.replace(/\/$/, '')}/index.html`;
          else if (fs.existsSync(path.join(outDir, '404.html'))) req.url = '/404.html';
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), prerenderedRoutes()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
  preview: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
