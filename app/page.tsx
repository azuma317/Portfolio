import Link from 'next/link';

export default function Home() {
  const yearsSinceStart =
    new Date().getFullYear() - new Date('2019').getFullYear();

  return (
    <section>
      <h1 className="mb-8 font-bold text-2xl tracking-tighter">Azuma</h1>
      <p className="my-4 max-w-[500px] text-neutral-800 dark:text-neutral-200">
        I'm currently based in Fukuoka and deeply involved in a diverse range of
        exciting{' '}
        <Link href="/projects" className="underline">
          <b>projects</b>
        </Link>{' '}
        and{' '}
        <Link href="/blog" className="underline">
          <b>interests</b>
        </Link>
        .
      </p>

      <p className="my-4 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        As a software developer, I've been writing code for over{' '}
        <b>{yearsSinceStart - 1} years</b>. While my expertise spans across the
        full software development stack, I am particularly passionate about
        Infrastructure Development.{' '}
        <Link href="/dev" className="underline">
          <b>Read on</b>
        </Link>
        .
      </p>
    </section>
  );
}
