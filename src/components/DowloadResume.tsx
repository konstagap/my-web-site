import Link from 'next/link';
import React from 'react';
import { DownloadIcon } from './icons';

const DowloadResume = () => {
  return (
    <div className='prose prose-base my-3'>
      <Link className='flex gap-5 w-full justify-center' href='/cv/Kostiantyn_Agapov_cv.pdf' download>
        <DownloadIcon /> <span>Download CV.pdf</span>
      </Link>
    </div>
  );
};

export default DowloadResume;