import { TechCard } from 'app/components/TechCard';

export default function About() {
  const skills = [
    {
      title: 'AWS & Cloudflare',
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
        'Cloudflare Workers&Pages',
        'Cloudflare KV',
        'Cloudflare D1',
      ],
      sections: [
        {
          subtitle: 'Architecture',
          details: [
            'ALB + Fargate + RDS setup with Docker and Terraform',
            'Strapi on Fargate & Astro SSG with CloudFront + S3',
            'Node.js microservices with Fargate + DynamoDB',
            'Next.js SSR with Amplify',
            'Monitoring system with Blackbox Exporter, Prometheus, Grafana, and AWS Connect',
          ],
        },
      ],
    },
    {
      title: 'Infrastructure as Code',
      techs: [
        'Ansible',
        'Terraform',
        'Docker',
        'Serverless Framework',
        'Capistrano',
        'GitHub Actions',
        'GitLab CI',
        'CodePipeline',
      ],
      sections: [
        {
          subtitle: 'Ansible',
          details: [
            'Web servers (Apache, Nginx)',
            'Application servers (Node, Rails)',
            'Database & Services (MySQL, MariaDB, PHP-FPM, WordPress)',
            'Linux server setup',
          ],
        },
        {
          subtitle: 'Terraform',
          details: [
            'AWS infrastructure as code',
            'Utilizing terraform-aws-modules',
            'Creating custom modules',
          ],
        },
      ],
    },
    {
      title: 'Middleware',
      techs: [
        'Nginx',
        'Apache',
        'Cron',
        'Logrotate',
        'MySQL',
        'MariaDB',
        'PostgreSQL',
        'Redis',
        'Certbot',
        'PHP-FPM',
        'Node.js',
        'Rails',
      ],
      sections: [
        {
          subtitle: 'Nginx, Apache',
          details: [
            'Web servers',
            'Reverse proxy',
            'Load balancer',
            'SSL',
            'MPM',
          ],
        },
        {
          subtitle: 'PHP-FPM, Node.js',
          details: ['Application servers'],
        },
      ],
    },
    {
      title: 'Monitoring & Logging',
      techs: [
        'Prometheus',
        'Grafana',
        'Elasticsearch',
        'Logstash',
        'Trino',
        'Blackbox Exporter',
        'Alloy',
        'Fluentd',
        'Redash',
        'QuickSight',
        'Athena',
      ],
    },
    {
      title: 'Programming Languages',
      techs: ['TypeScript', 'JavaScript', 'Swift', 'PHP', 'Dart', 'Bash'],
    },
    {
      title: 'Frameworks & Libraries',
      techs: [
        'React',
        'Next.js',
        'Astro',
        'Hono',
        'Tailwind CSS',
        'PNPM',
        'Flutter',
        'Laravel',
      ],
    },
    {
      title: 'Development Tools',
      techs: [
        'Docker',
        'Vite',
        'Turbopack',
        'VSCode',
        'GitHub',
        'GitLab',
        'Notion',
        'Postman',
      ],
    },
  ];

  return (
    <section>
      <h1 className="mb-8 font-semibold text-2xl tracking-tighter">About Me</h1>
      <div className="grid gap-6">
        {skills.map((skill, index) => (
          <TechCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
