import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';


export default defineConfig({
  site: 'https://jamcam2025.com',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel(),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'server'
});