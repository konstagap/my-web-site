import { getPostContent, getPostsMetadata } from '@/lib/posts';
import Markdown from 'markdown-to-jsx';
import { Metadata } from 'next/types';
import React from 'react';

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();
  return posts.map(post => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata | undefined> {
  const posts = getPostsMetadata();
  const post = posts.find(post => post.slug === params.slug);
  if (!post) return;

  const { title, date: publishedTime, summary, description, slug, keywords } = post;
  const ogImage = encodeURI(`https://findkostas.com/api/og?title=${title}`);
  const meta: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime,
      url: `https://findkostas.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };

  if (keywords) {
    try {
      const mKeywords = keywords.split(',');
      meta.keywords = mKeywords;
    } catch (e: any) {}
  }

  return meta;
}

const BlogPost = ({ params }: BlogPostProps) => {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <article className='prose prose-base'>
      <div className='my-12 text-center'>
        <h1>{post.data.title}</h1>
        <time>{new Date(post.data.date).toDateString()}</time>
      </div>
      <Markdown>{post.content}</Markdown>
    </article>
  );
};

export default BlogPost;
