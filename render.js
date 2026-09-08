function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderAppCard(app) {
  return `
    <article class="app-card">
      <h2 class="app-card-title">${escapeHtml(app.name)}</h2>
      <p class="app-card-description">${escapeHtml(app.description)}</p>
      <a class="app-card-link" href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer">
        使ってみる
      </a>
    </article>`;
}

export function renderAppList(apps) {
  if (apps.length === 0) {
    return '<p class="empty-state">近日公開のアプリをお楽しみに♪</p>';
  }
  return apps.map(renderAppCard).join('');
}
