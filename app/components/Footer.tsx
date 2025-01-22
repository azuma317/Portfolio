import { SocialLinks } from 'app/components/SocialLinks';

export default function Footer() {
  return (
    <footer className="mb-16">
      <SocialLinks
        links={[
          { href: 'https://github.com/azuma317', label: 'GitHub' },
          {
            href: 'https://twitter.com/azumax_develop',
            label: 'Follow me on X',
          },
        ]}
      />
    </footer>
  );
}
