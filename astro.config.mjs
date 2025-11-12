import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  site: 'https://jamcam2025.com',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@logos': path.resolve(__dirname, './src/assets/images/logos')
      }
    }
  },

  adapter: vercel({
    imageService: true,
    // Activa analítica nativa de Vercel en modo estático
    webAnalytics: {
      enabled: true,
    }
  }),

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  output: 'static',
  integrations: [sitemap()]
});