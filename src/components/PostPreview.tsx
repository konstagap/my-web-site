import Link from 'next/link';
import { ArrowIcon } from './icons';
import { Post } from '.contentlayer/generated/types';

const PostPreview = ({ slug, summary, date, title, tags }: Post) => {
  return (
    <Link
      className='p-2 shadow-sm prose prose-sm block border-slate-600 border-b first-of-type:border-t mb-2 lg:w-2/3'
      href={`/blog/${slug}`}
    >
      <p className='flex w-full items-center'>
        <ArrowIcon />
        {title}
      </p>
      <p>{summary}</p>
      <time>{new Date(date).toDateString()}</time>
      {/* <div className='prose-sm border lg:w-2/3 border-slate-300 px-3 rounded-md shadow-sm'>
        <div className='flex flex-wrap flex-col md:flex-row md:items-center justify-between'></div>
      </div> */}
    </Link>
  );
};

export default PostPreview;
