import fs from 'fs';

try {
  fs.copyFileSync(
    '/home/sivaraj/.gemini/antigravity/brain/0731b76f-4d91-47b4-a6cd-3554824111d6/about_hero_1780341984220.png',
    'src/assets/images/about-hero.png'
  );
  console.log('Successfully copied about-hero.png');

  fs.copyFileSync(
    '/home/sivaraj/.gemini/antigravity/brain/0731b76f-4d91-47b4-a6cd-3554824111d6/office_map_1780342214772.png',
    'src/assets/images/office-map.png'
  );
  console.log('Successfully copied office-map.png');
} catch (e) {
  console.error('Error copying files:', e);
}
