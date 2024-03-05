import Link from 'next/link'
import React from 'react'

import { DownloadIcon, EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from './icons'

const Contacts = () => {
  const list = [
    {
      href: 'https://github.com/konstagap',
      rel: 'noopener noreferrer',
      target: '_blank',
      icon: <GitHubIcon />
    },
    {
      href: 'https://www.linkedin.com/in/kostiantyn-agapov',
      rel: 'noopener noreferrer',
      target: '_blank',
      icon: <LinkedInIcon />
    },
    {
      href: 'mailto:konstagapov123@gmail.com',
      icon: <EmailIcon />
    },
    {
      href: '/cv/Kostiantyn_Agapov_cv.pdf',
      icon: <DownloadIcon />,
      download: true,
      rel: 'noopener noreferrer',
      target: '_blank'
    }
  ]

  return (
    <div className=' w-full justify-center btn-group btn-group-horizontal'>
      {list.map(({ icon, ...rest }, inx) => {
        if (!rest.download) {
          return (
            <a key={inx} className={`btn btn-ghost btn-sm md:btn-md hover:btn-accent`} {...rest}>
              {icon}
            </a>
          )
        } else {
          return (
            <Link key={inx} className={`btn btn-ghost btn-sm md:btn-md hover:btn-accent`} {...rest}>
              {icon}
            </Link>
          )
        }
      })}
    </div>
  )
}

export default Contacts
