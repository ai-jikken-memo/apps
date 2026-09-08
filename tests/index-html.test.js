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
