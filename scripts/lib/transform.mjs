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
