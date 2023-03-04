import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
  title: 'Demo',
  description: 'Demo Page',
  openGraph: {
    title: 'Demo Page | Kostiantyn Agapov',
    description: 'Demo',
    type: 'article',
    url: 'https://findkostas.com/demo',
    images: [
      {
        url: 'https://findkostas.com/api/og?title=Demo',
      },
    ],
  },
};

const DemoPage = () => {
  return (
    <div className='w-full h-screen dark flex justify-center items-center'>
      <div className=' flex flex-col md:flex-row justify-center items-center gap-5 shadow-2xl p-10 rounded-lg '>
        <div className='avatar'>
          <div className='w-48 mask mask-squircle '>
            <img src='/Kostiantyn_Agapov.png' />
          </div>
        </div>
        <div>
          <h1 className='text-5xl font-bold'>Kostiantyn Agapov</h1>
          <p className='py-4'>Software Engineer</p>
          <p className='py-3'>🇺🇦</p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
