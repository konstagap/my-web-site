import Link from 'next/link';

import { Post } from '.contentlayer/generated/types';

const PostPreview = ({ slug, summary, date, title, tags }: Post) => {
  return (
    <div className='card bg-base-100  shadow-xl  prose prose-sm rounded-lg p-1 mb-2'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{summary}</p>
        <time>{new Date(date).toDateString()}</time>
        <div className='card-actions justify-end'>
          <Link className='btn btn-ghost btn-sm' href={`/blog/${slug}`}>
            click to read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
