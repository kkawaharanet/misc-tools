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
