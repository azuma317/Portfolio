import Head from 'next/head'
import Link from 'next/link'
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.slug } }));
}

async function getPosts() {
  return allPosts
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1))
    .slice(0, 16)
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = allPosts.find((post) => post._id === slug)!
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/" className="text-center text-sm font-bold uppercase text-blue-700">Home</Link>
        </div>
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