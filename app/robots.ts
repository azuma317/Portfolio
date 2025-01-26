import { baseUrl } from 'app/sitemap';

export const dynamic = 'force-static';
export const revalidate = 60;

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
