# misc-tools

![](./assets/logo.svg)

misc-toolsはツール群である。

## 使う

- [Webアプリケーションを使う](https://dist.kkawahara.net/development/misc-tools/)
- [デスクトップアプリケーションを使う](https://github.com/kkawaharanet/misc-tools/releases)

## 開発する

```bash
# 開発サーバーを起動する
$ npm i
$ npm run dev

# Webアプリケーションをビルドする
$ npm run build

# デスクトップアプリケーションをビルドする
$ npm run release
```

## デスクトップアプリケーションをアップデートする

デスクトップアプリケーションはキャッシュが残っていると前バージョンが起動する。

`%LOCALAPPDATA%`にある`net.kkawahara.misc-tools`のディレクトリを削除する。
