const appImages = {
  'cocktail-finder': './assets/cocktail-mix.webp',
  'ai-video-cost-checker': './assets/ai-video-cost.webp',
  'warikan-calculator': './assets/warikan.webp',
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderAppCard(app) {
  const image = appImages[app.id] ?? '';
  return `
    <article class="app-showcase app-showcase--${escapeHtml(app.id)}">
      ${image ? `<a class="app-visual" href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(app.name)}を開く">
        <img src="${image}" alt="" width="1600" height="780" loading="${app.id === 'cocktail-finder' ? 'eager' : 'lazy'}" ${app.id === 'cocktail-finder' ? 'fetchpriority="high"' : ''} decoding="async">
      </a>` : ''}
      <div class="app-copy">
        <h2>${escapeHtml(app.name)}</h2>
        <p>${escapeHtml(app.description)}</p>
        <a class="app-link" href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer">
          <span>使ってみる</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5"/></svg>
        </a>
      </div>
    </article>`;
}

export function renderAppList(apps) {
  if (apps.length === 0) {
    return '<p class="empty-state">近日公開のアプリをお楽しみに。</p>';
  }
  return apps.map(renderAppCard).join('');
}
