import { getPostContent, getPostsMetadata } from '@/lib/posts';
import Markdown from 'markdown-to-jsx';
import { Metadata } from 'next/types';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: 'Support Ukraine',
  description: 'Kostiantyn Agapov calls on support for Ukraine',
  keywords: ['Ukraine', 'StandWIthUkraine', 'StopWar'],
};

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();
  return posts.map(post => ({
    slug: post.slug,
  }));
};

const BlogPost = ({ params }: Props) => {
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
