import test from 'node:test';
import assert from 'node:assert/strict';
import { renderAppCard, renderAppList } from '../render.js';

const app = {
  id: 'sample-app',
  name: 'サンプルアプリ',
  description: 'テスト用の説明文',
  url: 'https://example.com/sample-app/',
};

test('renderAppCardは名前・説明・リンクを含む', () => {
  const html = renderAppCard(app);
  assert.match(html, /サンプルアプリ/);
  assert.match(html, /テスト用の説明文/);
  assert.match(html, /href="https:\/\/example\.com\/sample-app\/"/);
});

test('renderAppCardのリンクは新しいタブで開く', () => {
  const html = renderAppCard(app);
  assert.match(html, /target="_blank"/);
  assert.match(html, /rel="noopener/);
});

test('renderAppListは複数のカードを連結する', () => {
  const html = renderAppList([app, { ...app, id: 'x', name: '別アプリ' }]);
  assert.match(html, /サンプルアプリ/);
  assert.match(html, /別アプリ/);
});

test('renderAppListは空配列で空状態メッセージを返す(将来アプリが0件になった場合)', () => {
  const html = renderAppList([]);
  assert.match(html, /class="empty-state"/);
});
