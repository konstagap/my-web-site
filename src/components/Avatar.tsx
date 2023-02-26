import React from 'react';
import Image from 'next/image';

import me from '../img/test.png';
import Link from 'next/link';

const Avatar = () => {
  return (
    <Link href='/'>
      <div className='avatar justify-center w-full'>
        <div className='mb-4 rounded-full ring shadow-lg shadow-yellow-500 ring-offset-base-100 w-24 md:w-44'>
          <Image src={me} priority placeholder='blur' alt='Kostas Agapov' />
        </div>
      </div>
    </Link>
  );
};

export default Avatar;
