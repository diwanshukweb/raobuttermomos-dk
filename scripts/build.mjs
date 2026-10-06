import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
process.chdir(fileURLToPath(new URL('../', import.meta.url))); 
const menu = JSON.parse(fs.readFileSync('dist/menu.json', 'utf8'));
const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
if (new Set(menu.map(i => i.id)).size !== menu.length) throw Error('Menu IDs must be unique');
for (const item of menu) {
  if (!item.id || !item.name || !item.category || !item.variants?.length) throw Error('Incomplete menu item');
  for (const variant of item.variants) {
    if (!Number.isInteger(variant.price) || variant.price < 0 || !['veg','nonveg'].includes(variant.diet)) throw Error(`Invalid variant: ${item.id}`);
  }
}
const fallback = [...new Set(menu.map(i => i.category))].map(category => `<section><h3>${escape(category)}</h3>${menu.filter(i => i.category === category).map(item => `<article><h4>${escape(item.name)}</h4><p>${item.variants.map(v => `${escape(v.name)} — ₹${v.price} (${v.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'})${!v.enabled ? ' · Awaiting confirmation' : ''}`).join(' · ')}${!item.available ? ' · Awaiting confirmation' : ''}</p></article>`).join('')}</section>`).join('');
const path = 'dist/index.html';
let html = fs.readFileSync(path, 'utf8');
const pattern = /<div id="menucontent">[\s\S]*?<\/div><p class="muted">Sample menu data/;
if (!pattern.test(html)) throw Error('Static menu placeholder missing');
html = html.replace(pattern, `<div id="menucontent">${fallback}</div><p class="muted">Sample menu data`);
// Independent concepts must not be indexed as official restaurant websites.
fs.writeFileSync(path, html);
fs.writeFileSync('dist/robots.txt', 'User-agent: *\nDisallow: /\n');
if (fs.existsSync('dist/sitemap.xml')) fs.unlinkSync('dist/sitemap.xml');
console.log(`Prepared ${menu.length} sample menu items for deployment.`);
