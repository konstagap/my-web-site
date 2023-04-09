import React from 'react';
import Image from 'next/image';

import me from '@/img/Kostiantyn_Agapov.png';
import Link from 'next/link';

const Avatar = () => {
  return (
    <Link href='/'>
      <div className='avatar md:mb-2 justify-center md:w-full'>
        <div className='md:mb-4 rounded-full ring shadow-lg shadow-yellow-500 ring-offset-base-100 w-24 sm:32 md:w-44'>
          <Image src={me} priority placeholder='blur' alt='Kostas Agapov' />
        </div>
      </div>
    </Link>
  );
};

export default Avatar;
