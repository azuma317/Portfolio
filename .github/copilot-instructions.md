# GitHub Copilot 利用ガイドライン

このプロジェクトは **Next.js 15**（App Router、SSG）と **Tailwind CSS** を採用しています。
Copilot にコードを生成させる際は以下を参考にしてください。

## 1. プロジェクト構成

- `app/` ディレクトリベースのルーティング（App Router）
- ページは SSG（`generateStaticParams`）で生成
- スタイルは Tailwind CSS（ユーティリティファースト）

## 2. 質問のポイント

- フレームワーク、生成方式、スタイリング手法を明示
  例：「Next.js 15 の App Router で SSG を使い、Tailwind CSS でスタイリングした Header コンポーネントを生成してください」

## 3. コーディング規約

- 言語：TypeScript（拡張子は `.tsx`）
- 1 コンポーネント＝ 1 ファイル
- コンポーネント名は PascalCase
- Tailwind のクラスは可能な限り原子クラスで記述

## 4. ディレクトリ例

```
/app
  /layout.tsx
  /page.tsx
/components
  /Nav.tsx
  /Footer.tsx
```

## 5. プロンプト例

- 「新しい `Hero` コンポーネントを Next.js 15 App Router と SSG、Tailwind CSS で実装してください」
- 期待出力：

```tsx
import React from 'react';

export default function Hero() {
  return (
    <section className='py-20 bg-gradient-to-r from-blue-500 to-teal-400'>
      {/* … */}
    </section>
  );
}
```

## 6. プロジェクト固有の必須設定

- ページコンポーネントでは `generateMetadata` を必ず実装し、title・description・openGraph・twitter を返すこと
- Blog 等で構造化データを埋め込む場合は JSON‑LD（`<script type="application/ld+json">`）を設定すること

## 7. 最新技術の提案

- Next.js や React のバージョンに合わせて、最新機能（React Server Components、Concurrent Features、App Router の改善点など）を積極的に活用した実装を提案してください。
- 新しい Next.js の機能や React のフック、最適化手法があれば明示的に反映すること。
