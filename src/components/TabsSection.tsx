import React from 'react';
import TabsList from './TabsList';

const Tabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='px-8'>
      <TabsList />
      <section className='w-full'>{children}</section>
    </div>
  );
};

export default Tabs;
