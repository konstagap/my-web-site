import { getPostsMetadata } from '@/lib/posts';
import PostPreview from '@/components/PostPreview';
import { Metadata } from 'next/types';

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
  const postMetadata = getPostsMetadata();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {postMetadata.map(post => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default HomePage;
