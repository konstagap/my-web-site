import Link from 'next/link';
import React from 'react';
import DowloadResume from './DowloadResume';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './icons';

const Contacts = () => {
  return (
    <header className='prose prose-base text-center mb-5'>
      <div className='flex w-full gap-4 justify-around items-center md:hidden'>
        <a className='btn flex-1' href='mailto:konstagapov123@gmail.com'>
          <EmailIcon />
        </a>
        <a
          className='btn flex-1'
          rel='noopener noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/kostiantyn-agapov'
        >
          <LinkedInIcon />
        </a>
        <a className='btn flex-1' rel='noopener noreferrer' target='_blank' href='https://github.com/konstagap'>
          <GitHubIcon />
        </a>
        <Link className='btn flex-1 flex gap-5 justify-center' href='/cv/Kostiantyn_Agapov_cv.pdf' download>
          pdf
        </Link>
      </div>

      <div className='hidden md:block'>
        <a href='tel:+19292945554'>+1 (929) 294-5554</a>
        <div className='flex gap-6 w-full justify-center my-6'>
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
      </div>
    </header>
  );
};

export default Contacts;
