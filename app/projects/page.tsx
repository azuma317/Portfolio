import { TechCard } from 'app/components/TechCard';

export default function Projects() {
  const projects = [
    {
      title: 'This Portfolio',
      techs: ['Next.js', 'React', 'GitHub Pages'],
      description:
        'This site itself is a project showcasing my skills using Next.js and React.',
    },
    {
      title: 'SNS Bot',
      techs: ['Hono', 'React', 'Vite', 'Zod', 'Cloudflare'],
      description: 'X, Thread, Line Bot applications.',
      links: {
        X: 'https://x.com/and__whisky',
        Thread: 'https://www.threads.net/@andwhisky2024',
      },
    },
    {
      title: 'MSP Project',
      techs: ['Laravel', 'React'],
      details: [
        'Web application development with Laravel',
        'Admin dashboard frontend with React',
      ],
    },
  ];

  return (
    <section>
      <h1 className="mb-8 font-semibold text-2xl tracking-tighter">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <TechCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
