import { renderAppList } from './render.js';

const appListEl = document.getElementById('app-list');

async function main() {
  let apps;
  try {
    const res = await fetch('./data/apps.json', { cache: 'no-store' });
    apps = await res.json();
  } catch {
    appListEl.innerHTML = '<p class="empty-state">データを読み込めませんでした</p>';
    return;
  }
  appListEl.innerHTML = renderAppList(apps);
}

main();
