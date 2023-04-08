import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allPosts.map(post => ({
    url: `https://www.findkostas.com/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }));

  const routes = ['', '/experience', '/projects', '/blog'].map(route => ({
    url: `https://www.findkostas.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
