import Link from 'next/link';
import React from 'react';

import { DownloadIcon, EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from './icons';

const Contacts = () => {
  const list = [
    {
      href: 'tel:+19292945554',
      icon: <PhoneIcon />,
    },
    {
      href: 'mailto:konstagapov123@gmail.com',
      icon: <EmailIcon />,
    },
    {
      href: 'https://www.linkedin.com/in/kostiantyn-agapov',
      rel: 'noopener noreferrer',
      target: '_blank',
      icon: <LinkedInIcon />,
    },
    {
      href: 'https://github.com/konstagap',
      rel: 'noopener noreferrer',
      target: '_blank',
      icon: <GitHubIcon />,
    },
    {
      href: '/cv/Kostiantyn_Agapov_cv.pdf',
      icon: <DownloadIcon />,
      download: true,
    },
  ];

  return (
    <header className='prose prose-base text-center mb-5 px-1'>
      <div className='btn-group btn-group-horizontal'>
        {list.map(({ icon, ...rest }, inx) => {
          if (!rest.download) {
            return (
              <a key={inx} className={`btn btn-ghost btn-md hover:btn-accent`} {...rest}>
                {icon}
              </a>
            );
          } else {
            return (
              <Link key={inx} className={`btn btn-ghost btn-md hover:btn-accent`} {...rest}>
                {icon}
              </Link>
            );
          }
        })}
      </div>
    </header>
  );
};

export default Contacts;
