const fs = require('fs');
const path = require('path');

const GA_ID = process.env.GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
const REDIRECT_URL = process.env.REDIRECT_URL || 'https://google.com';

const templatePath = path.join(__dirname, 'index.template.html');
const distDir = path.join(__dirname, 'dist');
const outputPath = path.join(distDir, 'index.html');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

let html = fs.readFileSync(templatePath, 'utf8');

html = html.replace(/GA_MEASUREMENT_ID/g, GA_ID);
html = html.replace(/REDIRECT_URL/g, REDIRECT_URL);

fs.writeFileSync(outputPath, html);

console.log('Build complete: dist/index.html created.');
