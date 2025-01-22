import ArrowIcon from 'app/components/icons/ArrowIcon';

interface TechCardProps {
  title: string;
  techs?: string[];
  description?: string;
  details?: string[];
  sections?: {
    subtitle: string;
    details: string[];
  }[];
  links?: Record<string, string>;
}

export function TechCard({
  title,
  techs,
  description,
  details,
  sections,
  links,
}: TechCardProps) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      {techs && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {description && (
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          {description}
        </p>
      )}
      {details && (
        <ul className="list-disc list-inside space-y-2 text-neutral-800 dark:text-neutral-200">
          {details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      )}
      {sections && (
        <div className="space-y-4">
          {sections.map((section, i) => (
            <div key={i}>
              <h3 className="font-medium mb-2">{section.subtitle}</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-800 dark:text-neutral-200">
                {section.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {links && (
        <div className="flex flex-wrap gap-4 mb-4">
          {Object.entries(links).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-emerald-400"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{platform}</p>
            </a>
          ))}
        </div>
      )}
      <hr className="mt-6 border-neutral-200 dark:border-neutral-800" />
    </div>
  );
}
