import React, { useState } from 'react';
import Avatar from './Avatar';
import Contacts from './Contacts';
import Name from './Name';
import QuoteOfTheDay from './QuoteOfTheDay';

const Side = () => {
  return (
    <>
      <div className='flex md:flex-col justify-around items-start md:items-center p-4 w-full'>
        <Avatar />
        <Name />
      </div>
      <Contacts />

      <QuoteOfTheDay />
    </>
  );
};

export default Side;
