import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { transformDoc } from './lib/transform.mjs';
import { stripFrontmatter } from './lib/frontmatter.mjs';
import { scanMoves, buildDeprecated } from './lib/deprecated.mjs';
import { injectVars, readVersion, readLastUpdated } from './lib/templates.mjs';
import { buildIndex } from './lib/skillindex.mjs';
import { validateSkill } from './validate-skill.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs/ResolveAPI');
const TPL = path.join(ROOT, 'scripts/skill-templates');
const OUT = path.join(ROOT, 'skill/davinci-resolve-scripting');

function mdFiles(dir) {
  return readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
}

export function buildSkill() {
  const version = readVersion(readFileSync(path.join(ROOT, 'ResolveAPI_versions.json'), 'utf8'));
  const lastUpdated = readLastUpdated(readFileSync(path.join(DOCS, 'intro.md'), 'utf8'));

  // clean output
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(path.join(OUT, 'references/api'), { recursive: true });
  mkdirSync(path.join(OUT, 'references/settings'), { recursive: true });

  // api files
  const apiNames = [];
  const moves = [];
  for (const file of mdFiles(path.join(DOCS, 'resolve_api'))) {
    const name = file.replace(/\.md$/, '');
    const raw = readFileSync(path.join(DOCS, 'resolve_api', file), 'utf8');
    apiNames.push(name);
    moves.push(...scanMoves(raw, name));
    writeFileSync(path.join(OUT, 'references/api', `${name}.md`), transformDoc(raw, { kind: 'api', name }));
  }

  // settings files (normalize the space filename on output)
  const settings = [];
  for (const file of mdFiles(path.join(DOCS, 'resolve_settings'))) {
    const raw = readFileSync(path.join(DOCS, 'resolve_settings', file), 'utf8');
    const outName = file.replace(/\.md$/, '').replace(/\s+/g, '');
    const { data } = stripFrontmatter(raw);
    settings.push({ name: outName, title: data.title || outName });
    writeFileSync(
      path.join(OUT, 'references/settings', `${outName}.md`),
      transformDoc(raw, { kind: 'settings', name: outName })
    );
  }

  // deprecated page
  const misc = readFileSync(path.join(DOCS, 'other/misc.md'), 'utf8');
  writeFileSync(path.join(OUT, 'references/deprecated.md'), buildDeprecated(misc, moves));

  // templates
  const vars = { VERSION: version, LAST_UPDATED: lastUpdated };
  writeFileSync(
    path.join(OUT, 'references/getting-started.md'),
    injectVars(readFileSync(path.join(TPL, 'getting-started.md'), 'utf8'), vars)
  );
  writeFileSync(
    path.join(OUT, 'references/object-map.md'),
    readFileSync(path.join(TPL, 'object-map.md'), 'utf8')
  );
  writeFileSync(
    path.join(OUT, 'SKILL.md'),
    injectVars(readFileSync(path.join(TPL, 'SKILL.head.md'), 'utf8'), {
      ...vars,
      INDEX: buildIndex({ apiNames, settings }),
    })
  );

  return { apiCount: apiNames.length, settingsCount: settings.length, moves };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const res = buildSkill();
  console.log(`Built skill: ${res.apiCount} api, ${res.settingsCount} settings, ${res.moves.length} moves.`);
  const problems = validateSkill(OUT);
  if (problems.length) {
    console.error(`Skill validation FAILED (${problems.length}):`);
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }
  console.log('Skill validation passed.');
}
