import React, { useState } from 'react';
import Avatar from './Avatar';
import Contacts from './Contacts';
import Name from './Name';
import QuoteOfTheDay from './QuoteOfTheDay';

const Side = () => {
  return (
    <>
      <Avatar />
      <Name />
      <Contacts />
      <QuoteOfTheDay />
    </>
  );
};

export default Side;
