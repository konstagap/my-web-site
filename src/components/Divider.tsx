'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ThemeSwitch from './ThemeSwitch';

const Divider = () => {
  const pathname = usePathname();

  const routeTextMap = {
    '/blog': '.js',
    '/quotes': '✨',
    '/': '.kt',
  };

  const getDisplayText = () => {
    for (const [route, text] of Object.entries(routeTextMap)) {
      if (pathname === route) {
        return text;
      }
    }
    return '';
  };

  const text = getDisplayText();

  return (
    <span className='divider md:divider-horizontal divider-vertical'>
      <div className={clsx('hidden', { 'md:block': text })}>{text}</div>
      <div className='block md:hidden'>
        <ThemeSwitch />
      </div>
    </span>
  );
};

export default Divider;
