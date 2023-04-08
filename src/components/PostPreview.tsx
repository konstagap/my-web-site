import Link from 'next/link';
import { ArrowIcon } from './icons';
import { Post } from '.contentlayer/generated/types';

const PostPreview = ({ slug, summary, date, title, tags }: Post) => {
  return (
    <Link className=' prose prose-sm block btn-ghost rounded-md p-2 mb-2' href={`/blog/${slug}`}>
      <p className='flex w-full items-center'>
        <ArrowIcon />
        {title}
      </p>
      <p>{summary}</p>
      <time>{new Date(date).toDateString()}</time>
    </Link>
  );
};

export default PostPreview;
