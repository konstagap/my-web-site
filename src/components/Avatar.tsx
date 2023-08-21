'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import debounce from 'lodash/debounce';

import me1 from '@/img/me/me-removebg-preview-1.png';
import me2 from '@/img/me/me-removebg-preview-2.png';
import me3 from '@/img/me/me-removebg-preview-3.png';
import me4 from '@/img/me/me-removebg-preview-4.png';
import me5 from '@/img/me/me-removebg-preview-5.png';
import me6 from '@/img/me/me-removebg-preview-6.png';
import me7 from '@/img/me/me-removebg-preview-7.jpg';
import me9 from '@/img/me/me-removebg-preview-9.png';
import me10 from '@/img/me/me-removebg-preview-10.png';
import me11 from '@/img/me/me-removebg-preview-11.png';
import me12 from '@/img/me/me-removebg-preview-12.png';
import me13 from '@/img/me/me-removebg-preview-13.png';
import me14 from '@/img/me/me-removebg-preview-14.png';
import me15 from '@/img/me/me-removebg-preview-15.png';
import me16 from '@/img/me/me-removebg-preview-16.png';
import me17 from '@/img/me/me-removebg-preview-17.png';
import me18 from '@/img/me/me-removebg-preview-18.png';
import AnimationWrapper from './PageAnimation';

const Avatar = () => {
  const [current, setCurrent] = useState(1);

  const list = [me1, me2, me3, me4, me5, me6, me7, me9, me10, me11, me12, me13, me14, me15, me16, me17, me18];

  const changeAvatar = debounce(() => {
    setCurrent(prev => {
      return !list[prev + 1] ? 0 : prev + 1;
    });
  }, 200);

  return (
    <div className='avatar md:mb-2 justify-center md:w-full relative'>
      <div
        onClick={changeAvatar}
        className='md:mb-4 rounded-full ring shadow-lg shadow-yellow-500 ring-offset-base-100 w-24 sm:32 md:w-44 cursor-pointer'
      >
        <AnimationWrapper initial={{ y: -15, opacity: 0 }}>
          <Image
            autoSave='true'
            src={list[current]}
            className='rounded-full'
            priority
            placeholder='blur'
            alt='Kostas Agapov'
          />
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default Avatar;
