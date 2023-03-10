'use client';

import { useEffect, useState } from 'react';
import list from '@/lib/spinners';

// const chars = ['|', '/', '-', '\\'];
// const longChars = new Array(10).fill(chars).flat(2);
// console.log('longChars', longChars);

function NpmSpinner() {
  const [spinners] = useState(Object.values(list));

  const [type, setType] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (char === spinners[type].frames.length - 1) {
        setChar(() => 0);
        setType(prev => ++prev);
      }

      setChar(prev => ++prev);

      if (type === spinners.length - 1) {
        setType(0);
      }
    }, spinners[type].interval);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [char, type]);

  return <span>{spinners[type].frames[char]}</span>;
}

export default NpmSpinner;
