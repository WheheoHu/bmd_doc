import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { extractHeadingSlugs } from './lib/slug.mjs';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const abs = path.join(dir, entry);
    if (statSync(abs).isDirectory()) out.push(...walk(abs));
    else if (entry.endsWith('.md')) out.push(abs);
  }
  return out;
}

function stripFences(md) {
  return md.replace(/```[\s\S]*?```/g, '');
}

export function validateSkill(dir) {
  const problems = [];
  const files = walk(dir);

  for (const file of files) {
    const rel = path.relative(dir, file);
    const raw = readFileSync(file, 'utf8');
    const isSkillMd = rel === 'SKILL.md';

    // artifact checks
    if (raw.includes(':::')) problems.push(`${rel}: leftover admonition (:::)`);
    if (/\\\{|\\\}/.test(raw)) problems.push(`${rel}: leftover escaped brace`);
    if (/\{\{\w+\}\}/.test(raw)) problems.push(`${rel}: unreplaced template placeholder`);
    if (!isSkillMd && /^\s*displayed_sidebar\s*:/m.test(raw)) {
      problems.push(`${rel}: leftover frontmatter (displayed_sidebar)`);
    }

    // link + anchor checks (ignore fenced code and external/absolute urls)
    const body = stripFences(raw);
    for (const m of body.matchAll(/\]\(([^)]+)\)/g)) {
      const url = m[1].trim();
      if (/^(https?:|mailto:)/.test(url)) continue;
      const [target, anchor] = url.split('#');
      let targetFile = file;
      if (target) {
        targetFile = path.resolve(path.dirname(file), target);
        if (!existsSync(targetFile)) {
          problems.push(`${rel}: broken link -> ${url}`);
          continue;
        }
      }
      if (anchor) {
        const slugs = new Set(extractHeadingSlugs(readFileSync(targetFile, 'utf8')));
        if (!slugs.has(anchor)) problems.push(`${rel}: broken anchor -> ${url}`);
      }
    }
  }
  return problems;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const dir = path.join(ROOT, 'skill/davinci-resolve-scripting');
  const problems = validateSkill(dir);
  if (problems.length) {
    console.error(`Skill validation FAILED (${problems.length}):`);
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }
  console.log('Skill validation passed.');
}
