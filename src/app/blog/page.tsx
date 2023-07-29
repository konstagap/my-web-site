import PostPreview from '@/components/PostPreview';
import { Metadata } from 'next/types';

import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import MonoWidget from '@/components/MonoWidget';

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
    <div>
      {posts.map(post => (
        <PostPreview key={post._id} {...post} />
      ))}

      <MonoWidget src='https://send.monobank.ua/widget.html?jar=4qhNrJKAwR3LRjLp6LXeL8Txd584HPQV&sendId=3DHfig8D2P&type=qrp&colorScheme=black' />
    </div>
  );
};

export default HomePage;
