export function buildIndex({ apiNames, settings }) {
  let out = '### API Objects\n\n';
  for (const n of [...apiNames].sort((a, b) => a.localeCompare(b))) {
    out += `- [${n}](references/api/${n}.md)\n`;
  }
  out += '\n### Settings & Constants\n\n';
  for (const s of [...settings].sort((a, b) => a.name.localeCompare(b.name))) {
    out += `- [${s.title}](references/settings/${s.name}.md)\n`;
  }
  return out;
}
