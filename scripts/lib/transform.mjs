import { stripFrontmatter } from './frontmatter.mjs';

export function unescapeBraces(text) {
  return text.replaceAll('\\{', '{').replaceAll('\\}', '}');
}

const ADMONITION_ICON = { warning: '⚠️ ', danger: '❗ ', note: '' };

export function convertAdmonitions(text) {
  return text.replace(
    /^:::(warning|danger|note)[ \t]*\r?\n([\s\S]*?)\r?\n:::[ \t]*$/gm,
    (_match, type, inner) => {
      const body = inner
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean)
        .join(' ');
      return `> ${ADMONITION_ICON[type]}${body}\n`;
    }
  );
}

export function rewriteLinks(text) {
  return text
    .replaceAll('TimelineItemPropertie s.md', 'TimelineItemProperties.md')
    .replaceAll('resolve_settings/', 'settings/')
    .replaceAll('resolve_api/', 'api/')
    .replaceAll('other/misc.md', 'deprecated.md');
}

export function transformDoc(raw, { kind, name }) {
  const { data, body } = stripFrontmatter(raw);
  const title = kind === 'settings' ? (data.title || name) : name;
  let out = `# ${title}\n\n${body.replace(/^\s+/, '')}`;
  out = unescapeBraces(out);
  out = convertAdmonitions(out);
  out = rewriteLinks(out);
  return `${out.replace(/\s+$/, '')}\n`;
}
