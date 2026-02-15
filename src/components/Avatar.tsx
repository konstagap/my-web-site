'use client';
import React, { useCallback, useState } from 'react';
import Image from 'next/image';

// Avatar images moved to public/img/me — use public URLs below
import AnimationWrapper from './PageAnimation';

const Avatar = () => {
  const [current, setCurrent] = useState(1);

  const list = [
    '/img/me/me-removebg-preview-1.png',
    '/img/me/me-removebg-preview-2.png',
    '/img/me/me-removebg-preview-3.png',
    '/img/me/me-removebg-preview-4.png',
    '/img/me/me-removebg-preview-5.png',
    '/img/me/me-removebg-preview-6.png',
    '/img/me/me-removebg-preview-7.jpg',
    '/img/me/me-removebg-preview-9.png',
    '/img/me/me-removebg-preview-10.png',
    '/img/me/me-removebg-preview-11.png',
    '/img/me/me-removebg-preview-12.png',
    '/img/me/me-removebg-preview-13.png',
    '/img/me/me-removebg-preview-14.png',
    '/img/me/me-removebg-preview-15.png',
    '/img/me/me-removebg-preview-16.png',
    '/img/me/me-removebg-preview-17.png',
    '/img/me/me-removebg-preview-18.png',
  ];

  const changeAvatar = useCallback(() => {
    setCurrent(prev => (prev + 1) % list.length);
  }, [list.length]);

  return (
    <div className='avatar md:mb-2 justify-center md:w-full relative'>
      <button
        type='button'
        onClick={changeAvatar}
        aria-label='Change avatar'
        className='md:mb-4 rounded-full ring shadow-lg shadow-yellow-500 ring-offset-base-100 w-24 sm:w-32 md:w-44 cursor-pointer'
      >
        <AnimationWrapper initial={{ y: -15, opacity: 0 }}>
          <Image src={list[current]} width={176} height={176} className='rounded-full' priority alt='Kostas Agapov' />
        </AnimationWrapper>
      </button>
    </div>
  );
};

export default Avatar;
