'use client';
import React, { useEffect, useState } from 'react';

const Divider = () => {
  const list = [
    'js',
    'ts',
    'jsx',
    'tsx',
    'html',
    'css',
    'react',
    'node',
    'git',
    'docker',
    'linux',
    'testing',
    'etc.',
    '...',
    '😊',
    "(●'◡'●)",
    'Next.js',
    'Express',
    'Nest',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => {
        if (prev === list.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 855);

    return () => clearInterval(id);
  }, []);

  return (
    <div className='divider md:divider-horizontal divider-vertical'>
      <div className='p-1 animate-bounce'>{list[index].toUpperCase()} </div>
    </div>
  );
};

export default Divider;
