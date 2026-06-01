import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'fs';

// Auto-copy assets on configuration load
try {
  const srcAboutHero = '/home/sivaraj/.gemini/antigravity/brain/0731b76f-4d91-47b4-a6cd-3554824111d6/about_hero_1780341984220.png';
  const destAboutHero = 'src/assets/images/about-hero.png';
  if (fs.existsSync(srcAboutHero)) {
    fs.copyFileSync(srcAboutHero, destAboutHero);
    console.log('Auto-copied: src/assets/images/about-hero.png');
  }

  const srcOfficeMap = '/home/sivaraj/.gemini/antigravity/brain/0731b76f-4d91-47b4-a6cd-3554824111d6/office_map_1780342214772.png';
  const destOfficeMap = 'src/assets/images/office-map.png';
  if (fs.existsSync(srcOfficeMap)) {
    fs.copyFileSync(srcOfficeMap, destOfficeMap);
    console.log('Auto-copied: src/assets/images/office-map.png');
  }
} catch (e) {
  console.error('Asset auto-copy failed:', e);
}

export default defineConfig({
  site: 'https://properties.example.com',
  output: 'static',
  image: {
    service: {
      config: {
        jpeg: { mozjpeg: true },
        webp: { effort: 6, alphaQuality: 80 },
        avif: { effort: 4, chromaSubsampling: '4:2:0' },
        png: { compressionLevel: 9 },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
  ],
});
