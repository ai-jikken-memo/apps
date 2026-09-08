# AI実験メモ アプリ一覧

「AI実験メモ」ブランドで作った静的Webアプリをまとめて紹介する1枚のページです。

## 新しいアプリを追加するには

`data/apps.json` に1件追加するだけです。ページ側のコード変更は不要です。

```json
{
  "id": "新しいアプリのid",
  "name": "アプリ名",
  "description": "一言説明",
  "url": "https://uranai-raiza.github.io/新しいアプリ/"
}
```

## 技術構成

- 素のHTML/CSS/JS(ビルド不要、ES Modules)、依存パッケージなし
- テストはNode.js組み込みの`node --test`

```bash
npm test     # 単体テストを実行
npm run dev  # http://localhost:5174/ で開発用サーバーを起動
```
