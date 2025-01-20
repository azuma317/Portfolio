import { SkillCard } from 'app/components/SkillCard';

export default function About() {
  const skills = [
    {
      title: 'This Portfolio',
      techs: ['Next.js', 'React', 'GitHub Pages'],
      description:
        'This site itself is a project showcasing my skills using Next.js and React.',
    },
    {
      title: 'Bot Development',
      techs: ['Hono', 'React', 'Vite', 'Zod', 'Cloudflare'],
      description: 'X, Thread, Line Bot applications',
      links: {
        X: 'https://x.com/and__whisky',
        Thread: 'https://www.threads.net/@andwhisky2024',
      },
    },
    {
      title: 'AWS Architecture',
      techs: [
        'Route53',
        'CloudFront',
        'S3',
        'Lambda',
        'ALB',
        'Fargate',
        'RDS',
        'DynamoDB',
        'Amplify',
      ],
      details: [
        'ALB + Fargate + RDS setup with Docker and Terraform',
        'Strapi on Fargate & Astro SSG with CloudFront + S3',
        'Node.js microservices with Fargate + DynamoDB',
        'Next.js SSR with Amplify',
        'Monitoring system with Blackbox Exporter, Prometheus, Grafana, and AWS Connect',
      ],
    },
    {
      title: 'Infrastructure & DevOps',
      techs: [
        'Ansible',
        'Terraform',
        'Alloy',
        'Prometheus',
        'Grafana',
        'Node Exporter',
        'Blackbox Exporter',
      ],
      sections: [
        {
          subtitle: 'Ansible',
          details: [
            'Web servers (Apache, Nginx)',
            'Application servers (Node, Rails)',
            'Database & Services (MySQL, MariaDB, PHP-FPM, WordPress)',
          ],
        },
        {
          subtitle: 'Terraform',
          details: [
            'AWS infrastructure as code',
            'Utilizing terraform-aws-modules',
          ],
        },
        {
          subtitle: 'Monitoring',
          details: [
            'Alloy implementation as Node Exporter replacement with Ansible',
          ],
        },
      ],
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
    <section className="max-w-4xl mx-auto">
      <h1 className="mb-8 font-semibold text-2xl tracking-tighter">About me</h1>
      <div className="grid gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
