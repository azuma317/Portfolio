import ArrowIcon from './icons/ArrowIcon';

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-col space-x-0 space-y-2 font-sm text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/azuma317"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/azumax_develop"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Follow me on X</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
