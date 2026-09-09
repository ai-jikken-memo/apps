import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const apps = JSON.parse(readFileSync(new URL('../data/apps.json', import.meta.url), 'utf8'));

test('3つのアプリが登録されている', () => {
  assert.equal(apps.length, 3);
});

test('各アプリはid・name・description・urlを持つ', () => {
  for (const app of apps) {
    assert.equal(typeof app.id, 'string');
    assert.equal(typeof app.name, 'string');
    assert.equal(typeof app.description, 'string');
    assert.match(app.url, /^https:\/\//);
  }
});

test('idはすべて一意', () => {
  const ids = apps.map((a) => a.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('宅飲みミックスとAI動画コストチェッカーが含まれる', () => {
  const names = apps.map((a) => a.name);
  assert.ok(names.includes('宅飲みミックス'));
  assert.ok(names.includes('AI動画コストチェッカー'));
});
