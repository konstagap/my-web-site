import PostPreview from '@/components/PostPreview';
import { Metadata } from 'next/types';

import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import AnimationWrapper from '@/components/PageAnimation';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and announcements',
  openGraph: {
    title: 'Blog | Kostiantyn Agapov',
    description: 'Articles and announcements',
    type: 'article',
    url: 'https://findkostas.com/blog',
    images: [
      {
        url: 'https://findkostas.com/api/og?title=Blog',
      },
    ],
  },
};

const HomePage = () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <AnimationWrapper>
      {posts.map(post => (
        <PostPreview key={post._id} {...post} />
      ))}
    </AnimationWrapper>
  );
};

export default HomePage;
