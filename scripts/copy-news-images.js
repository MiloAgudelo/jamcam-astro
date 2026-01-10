import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy full images from src/assets to public for OG images
const srcDir = path.join(__dirname, '../src/assets/images/news/full');
const destDir = path.join(__dirname, '../public/images/news');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy all -full.png images
fs.readdirSync(srcDir).forEach(file => {
  if (file.endsWith('-full.png')) {
    const newsId = file.replace('-full.png', '');
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, `${newsId}-full.png`);
    
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied OG image: ${newsId}-full.png`);
  }
});

console.log('✓ All OG images copied to public/images/news/');
