import { tabs } from '@/components/TabsList';
import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allPosts.map(post => ({
    url: `https://www.findkostas.com/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = Object.keys(tabs).map(route => ({
    url: `https://www.findkostas.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
