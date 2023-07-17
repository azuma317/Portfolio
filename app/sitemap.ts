import { allPosts } from 'contentlayer/generated'

export default async function sitemap() {
  const routes = [
    '',
    '/blog',
    '/projects',
    '/portfolio',
  ].map((route) => ({
    url: `https://pages.azumax.work${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const posts = allPosts.map((post) => ({
    url: `https://pages.azumax.work/blog/${post.slug}`,
    lastModified: new Date(post.createdDate).toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}