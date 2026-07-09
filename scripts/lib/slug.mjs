export function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export function extractHeadingSlugs(markdown) {
  const slugs = [];
  const seen = new Map();
  let inFence = false;
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const m = line.match(/^#{1,6}\s+(.*?)\s*$/);
    if (!m) continue;
    let s = slugify(m[1]);
    if (seen.has(s)) {
      const n = seen.get(s) + 1;
      seen.set(s, n);
      s = `${s}-${n}`;
    } else {
      seen.set(s, 0);
    }
    slugs.push(s);
  }
  return slugs;
}
