import { stripFrontmatter } from './frontmatter.mjs';
import { unescapeBraces } from './transform.mjs';

export function scanMoves(raw, objectName) {
  const moves = [];
  let lastHeading = null;
  for (const line of raw.split(/\r?\n/)) {
    const h = line.match(/^#{3,4}\s+(.*?)\s*$/);
    if (h) lastHeading = h[1];
    const mv = line.match(/Move to\s+(\[[^\]]+\]\([^)]+\))\s+since\s+([\d.]+)/);
    if (mv && lastHeading) {
      moves.push({ object: objectName, method: lastHeading, target: mv[1], since: mv[2] });
    }
  }
  return moves;
}

export function buildDeprecated(miscRaw, moves) {
  const { data, body } = stripFrontmatter(miscRaw);
  const title = data.title || 'Deprecated API';
  let out = `# ${title}\n\n${body.replace(/^\s+/, '')}`;
  const seen = new Set();
  const rows = [];
  for (const m of moves) {
    const key = `${m.object}.${m.method}.${m.since}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const target = unescapeBraces(m.target)
      .replaceAll('](./', '](./api/')
      .replaceAll('](../resolve_api/', '](./api/')
      .replaceAll('](../resolve_settings/', '](./settings/');
    rows.push(`- \`${m.object}.${unescapeBraces(m.method)}\` → moved to ${target} since ${m.since}`);
  }
  if (rows.length) out += `\n\n## Moved methods\n\n${rows.join('\n')}`;
  return `${out.replace(/\s+$/, '')}\n`;
}
