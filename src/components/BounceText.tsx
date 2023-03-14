'use client';
import React, { useEffect, useState } from 'react';

function BounceText({ matches }: { matches: boolean }) {
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
    let id: any;

    if (matches) {
      id = setInterval(() => {
        setIndex(prev => {
          if (prev === list.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 855);
    }

    return () => clearInterval(id);
  }, [matches]);

  return <span className='p-1 animate-bounce'>{list[index].toUpperCase()} </span>;
}

export default BounceText;
