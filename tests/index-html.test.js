import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('アプリ一覧の入れ物を持つ', () => {
  assert.match(html, /id="app-list"/);
});

test('ブランド名「AI実験メモ」を含む', () => {
  assert.match(html, /AI実験メモ/);
});

test('script.jsをモジュールとして読み込む', () => {
  assert.match(html, /<script[^>]*type="module"[^>]*src="script\.js"/);
});

test('style.cssを読み込む', () => {
  assert.match(html, /<link[^>]*href="style\.css"/);
});

test('viewportメタタグを持つ(レスポンシブ対応)', () => {
  assert.match(html, /name="viewport"/);
});

test('見出し下にタップを促す案内文がある', () => {
  assert.match(html, /class="page-lead"/);
  assert.match(html, /タップ/);
});

test('ホーム画面追加の案内(iPhone/Android両方)がある', () => {
  assert.match(html, /class="home-screen-guide"/);
  assert.match(html, /iPhone/);
  assert.match(html, /Android/);
  assert.match(html, /Safari/);
  assert.match(html, /Chrome/);
  assert.match(html, /ホーム画面に追加/);
});
