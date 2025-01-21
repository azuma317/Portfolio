import Link from 'next/link';

export default function Home() {
  const yearsSinceStart =
    new Date().getFullYear() - new Date('2019').getFullYear();

  return (
    <section>
      <h1 className="mb-8 font-bold text-2xl tracking-tighter">
        Hello{' '}
        <img src="/wave.gif" alt="wave" className="inline-block w-6 h-6" />
        <br />
        I'm <span className="mx-1" /> Azuma
      </h1>
      <p className="text-lg my-4 max-w-[500px] text-neutral-800 dark:text-neutral-200">
        福岡を拠点に, Webアプリケーション開発からUI/UXデザイン,
        プロダクトマネジメントまで, 幅広い{' '}
        <Link href="/projects" className="underline">
          <b>プロジェクト</b>
        </Link>{' '}
        に携わっています。また, 技術の進化とユーザー体験の向上などさまざまな{' '}
        <Link href="/blog" className="underline">
          <b>興味関心</b>
        </Link>{' '}
        を持っています。
      </p>

      <p className="text-lg my-4 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        ソフトウェア開発者として, 私は <b>{yearsSinceStart - 1} 年以上</b>{' '}
        コードを書いています。私の専門知識はソフトウェア開発スタック全体にわたりますが,
        基本的にインフラエンジニアとして活躍しています。{' '}
        <Link href="/about" className="underline">
          <b>続きを読む</b>
        </Link>
        。
      </p>
    </section>
  );
}
