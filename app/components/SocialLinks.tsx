import ArrowIcon from 'app/components/icons/ArrowIcon';

interface SocialLink {
  href: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="mt-8 flex flex-col space-x-0 space-y-2 font-sm text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      {links.map((link, index) => (
        <li key={index}>
          <a
            className="flex items-center transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href={link.href}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">{link.label}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
