import { notFound } from 'next/navigation';
import { Mdx } from '@/components/Mdx';
import { allPosts } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { Metadata } from 'next/types';
import React from 'react';
import { formatRelative, subDays } from 'date-fns';
import BackButton from '@/components/BackButton';
import AnimationWrapper from '@/components/PageAnimation';

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata | undefined> {
  const post = allPosts.find(post => post.slug === params.slug);
  if (!post) return;

  const { title, date: publishedTime, summary, description, slug, tags } = post;
  const ogImage = encodeURI(`https://findkostas.com/api/og?title=${title}`);
  const meta: Metadata = {
    title,
    description,
    keywords: tags || [],
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

  return meta;
}

const BlogPost = ({ params }: BlogPostProps) => {
  const post = allPosts.find(post => post.slug === params.slug);
  if (!post) notFound();

  return (
    <AnimationWrapper>
      <section className='prose prose-sm prose-quoteless dark:prose-invert'>
        <Balancer>
          <h1>{post.title}</h1>
          <time>{new Date(post.date).toDateString()}</time>
          <Mdx code={post.body.code} />
        </Balancer>
      </section>
    </AnimationWrapper>
  );
};

export default BlogPost;
