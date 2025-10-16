const fs = require('fs');
const path = require('path');
const pkgPath = path.resolve(__dirname, '..', 'package.json');
let content = fs.readFileSync(pkgPath, 'utf8');
// Strip UTF-8 BOM if present
if (content.charCodeAt(0) === 0xFEFF) {
  content = content.slice(1);
}
// Validate JSON parses
const parsed = JSON.parse(content);
// Re-write without BOM
fs.writeFileSync(pkgPath, JSON.stringify(parsed, null, 2) + '\n', { encoding: 'utf8' });
console.log('package.json normalized (UTF-8 without BOM)');
