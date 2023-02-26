import Link from 'next/link';
import type { PostMetaData } from '../../lib/posts';
import { ArrowIcon } from './icons';

const PostPreview = ({ slug, summary, date, title }: PostMetaData) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div
        className='border border-slate-300 p-4 rounded-md shadow-sm

  '
      >
        <time className='block text-right'>{new Date(date).toDateString()}</time>
        <p className='flex w-full items-center gap-5'>
          {title}
          <ArrowIcon />
        </p>
        <p>{summary}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
