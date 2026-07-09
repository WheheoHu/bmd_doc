export function injectVars(tpl, vars) {
  return tpl.replace(/\{\{(\w+)\}\}/g, (m, k) => (k in vars ? vars[k] : m));
}

export function readVersion(versionsJsonText) {
  return JSON.parse(versionsJsonText)[0];
}

export function readLastUpdated(introText) {
  const m = introText.match(/Last Updated:\s*(.+)/);
  return m ? m[1].trim() : '';
}
