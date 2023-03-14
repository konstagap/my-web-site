'use client';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const Divider = () => {
  return (
    <span className='divider md:divider-horizontal divider-vertical'>
      <div className='hidden md:block'>JS</div>
      <div className='block md:hidden'>
        <ThemeSwitch />
      </div>
    </span>
  );
};

export default Divider;
