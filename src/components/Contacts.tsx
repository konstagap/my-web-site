import Link from 'next/link';
import React from 'react';

import { DownloadIcon, EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from './icons';

const Contacts = () => {
  return (
    <header className='prose prose-base text-center mb-5 px-1'>
      <div className='flex w-full gap-4 justify-around items-center md:hidden'>
        <a className='btn flex-1' href='tel:+19292945554'>
          <PhoneIcon />
        </a>
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
        <Link className='btn flex-1' href='/cv/Kostiantyn_Agapov_cv.pdf' download>
          <DownloadIcon />
        </Link>
      </div>

      <div className='hidden md:block'>
        <div className='flex gap-6 w-full justify-center mb-6'>
          <a href='tel:+19292945554'>
            <PhoneIcon />
            {/* <span>+1 (929) 294-5554</span> */}
          </a>
          <a href='mailto:konstagapov123@gmail.com'>
            <EmailIcon />
          </a>
          <a rel='noopener noreferrer' target='_blank' href='https://github.com/konstagap'>
            <GitHubIcon />
          </a>

          <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/kostiantyn-agapov'>
            <LinkedInIcon />
          </a>

          <Link href='/cv/Kostiantyn_Agapov_cv.pdf' download>
            <DownloadIcon />
          </Link>
        </div>
        {/* <DowloadResume /> */}
      </div>
    </header>
  );
};

export default Contacts;
