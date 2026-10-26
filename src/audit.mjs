import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(target);
    else if (entry.name.endsWith('.html') && !/^yandex_[a-f0-9]+\.html$/.test(entry.name)) files.push(target);
  }
}

walk(dist);
const errors = [];
const titles = new Map();
const descriptions = new Map();
const h1s = new Map();

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(dist, file);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="(.*?)">/s)?.[1];
  const h1 = [...html.matchAll(/<h1\b/g)].length;
  const canonical = [...html.matchAll(/<link rel="canonical"/g)].length;
  const lang = html.includes('<html lang="tr-TR">');
  const schema = [...html.matchAll(/application\/ld\+json/g)].length;
  if (!title || !description) errors.push(`${rel}: missing title or description`);
  if (h1 !== 1) errors.push(`${rel}: expected one H1, found ${h1}`);
  if (canonical !== 1) errors.push(`${rel}: expected one canonical, found ${canonical}`);
  if (!lang) errors.push(`${rel}: missing tr-TR`);
  if (schema < 3) errors.push(`${rel}: schema count ${schema}`);
  if (/[—–]/.test(html)) errors.push(`${rel}: long dash found`);
  if (/independent guide|bağımsız rehber|inceleme portalı|disclaimer/i.test(html)) errors.push(`${rel}: forbidden phrase found`);
  if (/telegram|tarafbetduyuru|tarafguncel/i.test(html)) errors.push(`${rel}: unwanted social channel found`);
  const visibleWords = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .trim().split(/\s+/).filter(Boolean).length;
  if (rel === 'index.html' && visibleWords < 1000) errors.push(`${rel}: only ${visibleWords} visible words`);
  if (rel !== 'index.html' && rel !== '404.html' && visibleWords < 430) errors.push(`${rel}: only ${visibleWords} visible words`);
  for (const match of html.matchAll(/<a[^>]+href="(https?:\/\/[^\"]+)"/g)) {
    if (match[1] !== 'https://r1wbjhb.com/?p=ihfk') errors.push(`${rel}: unexpected external CTA ${match[1]}`);
  }
  for (const [value, map, label] of [[title,titles,'title'],[description,descriptions,'description']]) {
    if (map.has(value)) errors.push(`${rel}: duplicate ${label} with ${map.get(value)}`);
    else map.set(value, rel);
  }
  const h1Text = html.match(/<h1>(.*?)<\/h1>/s)?.[1];
  if (h1s.has(h1Text)) errors.push(`${rel}: duplicate H1 with ${h1s.get(h1Text)}`);
  else h1s.set(h1Text, rel);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const clean = match[1].split('#')[0].split('?')[0];
    if (!clean || clean === '/') continue;
    const target = path.join(dist, clean);
    const exists = clean.endsWith('/') ? fs.existsSync(path.join(target, 'index.html')) : fs.existsSync(target);
    if (!exists) errors.push(`${rel}: broken local reference ${clean}`);
  }
}

const index = fs.readFileSync(path.join(dist, 'index.html'),'utf8');
const affiliateCount = (index.match(/https:\/\/r1wbjhb\.com\/\?p=ihfk/g) || []).length;
if (affiliateCount < 8) errors.push(`home: affiliate CTA count ${affiliateCount}`);
const requiredVisuals = [
  '/assets/tarafbet-mobil-ana-sayfa-giris.webp',
  '/assets/tarafbet-casino-slot-canli-casino-mobil.webp',
  '/assets/tarafbet-500-bonus-promokod-getmy500.webp',
  '/assets/tarafbet-slot-lucky-jaguar-500.webp',
  '/assets/tarafbet-slot-jungle-volcano.webp',
  '/assets/tarafbet-slot-sweet-bonanza-2500.webp',
  '/assets/tarafbet-canli-casino-turkish-blackjack.webp',
  '/assets/tarafbet-canli-casino-turkish-mega-roulette.webp',
  '/assets/tarafbet-canli-casino-turkish-vip-blackjack.webp'
];
const screenshotCount = requiredVisuals.filter(asset => index.includes(asset)).length;
if (screenshotCount !== requiredVisuals.length) errors.push(`home: expected ${requiredVisuals.length} optimized product visuals, found ${screenshotCount}`);
if (!index.includes('GETMY500') || !index.includes('%500 BONUS')) errors.push('home: confirmed GETMY500 offer missing');
if (/screenshot-(lobby|slots|casino|winners|support)-v2/.test(index)) errors.push('home: sliced screenshot asset found');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`PASS: ${files.length} HTML files, ${titles.size} unique titles, ${h1s.size} unique H1, ${screenshotCount} product visuals, ${affiliateCount} home CTAs`);
