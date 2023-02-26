/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Kostiantyn Agapov',
  description: 'Software Engineer',
  keywords: ['React', 'Next', 'Developer', 'Software Engineer', 'Ukraine', 'Support Ukraine'],
};

export default function AboutPage() {
  return (
    <section className='prose pros-base'>
      <h3 className='my-5 text-neutral-800 dark:text-neutral-200'>👋 Hi there, I'm Kostiantyn</h3>
      <div className='prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200'>
        <p>
          I'm a software engineer with over 4 years of experience in web development. My primary skills are in
          TypeScript and JavaScript with React ecosystem, but I also have experience in the backend with Node.js and
          testing frameworks.
        </p>
        <p>
          I'm well-versed in Docker and Linux commands and am comfortable working in a variety of development
          environments. In my free time, I enjoy exploring the outdoors and staying active. Hiking, soccer, and Formula
          1 racing are some of my favorite hobbies.
        </p>
        <p>
          Thanks for taking the time to learn a bit about me. If you have any questions or would like to chat further,
          feel free to reach out!
        </p>

        <p>PS.</p>

        <p>
          This Project is build with React framework Next.js v13 utilizing server componets, and styled with Tailwind
          CSS and Daisy UI lib.
        </p>

        {/* <hr /> */}
        <div className='mb-5 flex flex-col items-center w-full gap-2 md:flex-row md:gap-2'>
          <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/kostiantyn-agapov'>
            <button className='btn btn-wide'>
              <LinkedInIcon />
            </button>
          </a>
          <a rel='noopener noreferrer' target='_blank' href='https://github.com/konstagap'>
            <button className='btn btn-wide'>
              <GitHubIcon />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
