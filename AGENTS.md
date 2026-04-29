# AGENTS.md

## Development Containers

本リポジトリの開発にはDevelopment Containers(`.devcontainers`)を用いる。

## 開発用コマンドの一覧

| コマンド            | 説明                     |
| ------------------- | ------------------------ |
| `npm run dev`       | 開発用サーバーを起動する |
| `npm run typecheck` | 型チェックを行う         |
| `npm run test`      | 全てのテストを実行する   |

## CICDパイプライン

CICDパイプラインの変更が必要な場合、以下を編集すること。

- `.gitea/workflows/workflow.yml`

## 注意点

現状`vite-plugin-pwa`はVite 8に対応しておらず、互換性を無視してインストールしている。そのため`npm i`を実行するとエラーが発生する。

**`npm i`を実行するときは必ず`--legacy-peer-deps`のオプションを付与すること。**
