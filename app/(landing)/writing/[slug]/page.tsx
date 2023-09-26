import Head from 'next/head';
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

async function getPosts() {
  return allPosts
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1))
    .slice(0, 16)
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = allPosts.find((post) => post.slug === slug)!
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16 prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert">
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.createdDate} className="text-sm text-slate-600">
            {format(parseISO(post.createdDate), 'LLLL d, yyyy')}
          </time>
        </div>
        <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
      </article>
    </>
  )
}