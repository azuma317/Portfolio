import { about, bio, name } from './lib/info';

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 font-bold text-2xl tracking-tighter">{name}</h1>
      <p className="my-4 max-w-[500px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>

      <p className="my-4 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
    </section>
  );
}
