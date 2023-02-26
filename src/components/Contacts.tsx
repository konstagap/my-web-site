import React from 'react';
import DowloadResume from './DowloadResume';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './icons';

const Contacts = () => {
  return (
    <header className='prose prose-base text-center mb-5'>
      <a href='tel:+19292945554'>+1 (929) 294-5554</a>
      <div className='flex gap-6 w-full justify-center my-2'>
        <a href='mailto:konstagapov123@gmail.com'>
          <EmailIcon />
        </a>

        <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/kostiantyn-agapov'>
          <LinkedInIcon />
        </a>

        <a rel='noopener noreferrer' target='_blank' href='https://github.com/konstagap'>
          <GitHubIcon />
        </a>
      </div>
      <DowloadResume />
    </header>
  );
};

export default Contacts;
