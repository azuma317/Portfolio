export default function notFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
      <h1 className="mb-4 text-6xl font-normal text-white">404</h1>
      <p className="mb-8 text-4xl font-serif text-white">
        Out of nothing, something.
      </p>
      <p className="max-w-2xl mb-8 text-xl text-gray-300">
        It seems you've reached a page that doesn't exist. Perhaps you'd like to
        explore my projects or learn more about me?
      </p>
      <a
        href="/"
        className="text-xl text-white underline hover:text-gray-300 transition-colors"
      >
        Home
      </a>
    </section>
  );
}
