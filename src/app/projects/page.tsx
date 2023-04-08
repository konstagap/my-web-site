/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { GitHubIcon, ArrowIcon } from '@/components/icons';
import Image from 'next/image';

import lionImg from '@/img/myCollection/5.jpg';
import bringImg from '@/img/myCollection/8.jpg';
import clickyImg from '@/img/myCollection/7.jpg';
import videoRentalImg from '@/img/myCollection/2.jpg';
import img from '@/img/myCollection/4.jpg';
import budgetImg from '@/img/myCollection/6.jpg';
import resortImg from '@/img/myCollection/1.jpg';
import passportImg from '@/img/myCollection/auth.png';
import landingImg from '@/img/myCollection/landing.png';
import clickImg from '@/img/myCollection/click.png';
// import video from '@/img/backgroundVideo/ManSittingOnaBench.mp4';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Pet projects',
  openGraph: {
    title: 'Projects | Kostiantyn Agapov',
    description: 'Pet projects',
    type: 'article',
    url: 'https://findkostas.com/projects',
    images: [
      {
        url: 'https://findkostas.com/api/og?title=Projects',
      },
    ],
  },
};

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Interview Demo project with no frameworks',
      img: clickImg,
      gh: 'https://github.com/konstagap/DemoLandingPage',
      deployed: 'https://konstagap.github.io/DemoLandingPage',
      summary: 'HTML | CSS | JS',
    },
    {
      name: 'Vanilla HTML CSS landing',
      img: landingImg,
      gh: 'https://github.com/konstagap/LandingPage',
      deployed: 'https://konstagap.github.io/LandingPage',
      summary: 'HTML | CSS | JS',
    },
    {
      name: 'Auth Passport App',
      img: passportImg,
      gh: 'https://github.com/konstagap/redux-react-auth-app',
      deployed: 'https://redux-react-auth-app.herokuapp.com',
      summary: 'React | Redux | Express | Passport',
    },
    {
      name: 'Beach Resort',
      img: resortImg,
      gh: 'https://github.com/konstagap/BeachResortReactHooks',
      deployed: 'http://my-beachresort.herokuapp.com/',
      summary: 'React | Hooks',
    },
    {
      name: 'Budget Calculator',
      img: budgetImg,
      gh: 'https://github.com/konstagap/ExpensesCalculator',
      deployed: 'https://my-budgetcalculator.herokuapp.com',
      summary: 'React | Hooks',
    },
    {
      name: 'Surfboard Shop',
      img: img,
      gh: 'https://github.com/konstagap/SurfShopReact',
      deployed: 'https://my-surfshopstore.herokuapp.com',
      summary: 'React | Hooks | Context API',
    },
    {
      name: 'Video Rental',
      img: videoRentalImg,
      gh: 'https://github.com/konstagap/VideoRental',
      deployed: 'https://myvideostore-app.herokuapp.com/movies',
      summary: 'React | MongoDB | Heroku',
    },
    {
      name: 'Clicky game',
      img: clickyImg,
      gh: 'https://github.com/konstagap/click-it',
      deployed: 'https://mortal-kombat-cliky.herokuapp.com/',
      summary: 'React',
    },
    {
      name: 'Bring, application for renting surfboards',
      img: bringImg,
      gh: 'https://github.com/konstagap/Bring',
      deployed: 'http://bring-ucsd.herokuapp.com',
      summary: 'Mongo | Express | React | Node | React-Bootstrap',
    },
    {
      name: 'Like it or not',
      img: lionImg,
      gh: 'https://github.com/mike-4040/like-it-or-not',
      deployed: 'https://ka-mk-lion.herokuapp.com',
      summary: 'React | Material-UI | Passport | Mongo',
    },
  ];

  return (
    <section className='mt-5 flex flex-wrap gap-10 justify-center'>
      <div className='alert shadow-lg'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='stroke-info flex-shrink-0 w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
          <span>Heroku links do not work, they have changed terms and conditions, re-deployment in process 🚀</span>
        </div>
      </div>

      {/* 
      TODO: video is not working
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <video autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video> 
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Will fix them</h2>
          <p>but a bit later... ☀️😎</p>
        </div>
      </div>*/}

      {projects.map(project => {
        return (
          <div key={project.name} className='card w-96 bg-base-100 shadow-xl'>
            <figure className='m-0'>
              <Image
                src={project.img}
                alt={project.name}
                placeholder='blur'
                style={{ objectFit: 'cover', maxHeight: '210px' }}
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{project.name}</h2>
              <p>{project.summary}</p>
              <div className='card-actions justify-start flex items-center'>
                <a
                  className='btn btn-outline hover:btn-secondary basis-10'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={project.gh}
                >
                  <GitHubIcon />
                </a>
                <a
                  className='btn btn-ghost hover:btn-accent flex gap-2 items-center'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={project.deployed}
                >
                  <span>Deployed</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
