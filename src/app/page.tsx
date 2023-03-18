/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

export default function AboutPage() {
  return (
    <section className='prose pros-base'>
      <h3 className='my-5'>👋 Hi there, I'm Kostiantyn</h3>
      <p>
        I'm a software engineer with over 4 years of experience in web development. My primary skills are in TypeScript
        and JavaScript with React ecosystem, but I also have experience in the backend with Node.js and testing
        frameworks.
      </p>
      <p>
        I'm well-versed in Docker and Linux commands and am comfortable working in a variety of development
        environments. In my free time, I enjoy exploring the outdoors and staying active. Hiking, soccer, and Formula 1
        racing are some of my favorite hobbies.
      </p>
      <p>
        Thanks for taking the time to learn a bit about me. If you have any questions or would like to chat further,
        feel free to reach out!
      </p>

      {/* <hr /> */}
      <div className='mb-5 flex items-center w-full gap-2 md:gap-2'>
        <a
          className='flex-1'
          rel='noopener noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/kostiantyn-agapov'
        >
          <button className='btn hover:btn-accent w-full md:btn-wide'>
            <LinkedInIcon />
          </button>
        </a>
        <a className='flex-1' rel='noopener noreferrer' target='_blank' href='https://github.com/konstagap'>
          <button className='btn hover:btn-accent w-full md:btn-wide'>
            <GitHubIcon />
          </button>
        </a>
      </div>
    </section>
  );
}
