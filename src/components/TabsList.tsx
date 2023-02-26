'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const TabsList = () => {
  const pathname = usePathname() || '/';

  const tabs = {
    '/': {
      title: 'About Me',
    },
    '/experience': {
      title: 'Experience',
    },
    '/projects': {
      title: 'Projects',
    },
    '/blog': {
      title: 'Blog',
    },
  };

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
