'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const tabs = {
  '/': {
    title: 'About Me',
  },
  '/experience': {
    title: 'Skills',
  },
  '/projects': {
    title: 'Projects',
  },
  '/blog': {
    title: 'Blog',
  },
  '/quotes': {
    title: 'Quote of the day',
  },
};

const TabsList = () => {
  let pathname = usePathname() || '/';

  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <div className='tabs mb-2'>
      {Object.entries(tabs).map(([path, { title }]) => {
        const isActive = path === pathname;
        return (
          <Link key={path} href={path} className={`tab tab-lg tab-lifted ${isActive ? 'tab-active' : ''}`}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default TabsList;
