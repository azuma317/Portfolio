import { formatDate, getBlogPosts } from 'app/blog/utils';
import Link from 'next/link';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1 group"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
              <p className="w-[120px] text-neutral-600 tabular-nums dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 tracking-tight dark:text-neutral-100 group-hover:text-neutral-800 dark:group-hover:text-emerald-400">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
