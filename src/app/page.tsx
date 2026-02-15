/* eslint-disable react/no-unescaped-entities */
import AnimationWrapper from '@/components/PageAnimation';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

export default function AboutPage() {
  return (
    <AnimationWrapper>
      <section className='prose pros-base'>
        <h3 className='my-5'>👋 Hi there, I'm Kostiantyn</h3>
        <p>
          I'm a software engineer who enjoys building reliable backend services and clean, intuitive frontend
          experiences. I work across the stack with Spring Boot, Java 21, Kotlin, and React/TypeScript, and I love
          creating software that feels fast, stable, and enjoyable to use.
        </p>

        <p>
          My experience includes developing high-scale microservices, improving performance and observability, and
          building reusable UI components and data-driven flows for large enterprise applications. I care about writing
          maintainable code, solving complex problems, and making life easier for both users and fellow engineers.
        </p>

        <p>
          Outside of work, I`m usually outdoors or staying active. Hiking, soccer, and Formula 1 keep me energized and
          inspired.
        </p>

        <p>
          Thanks for stopping by — always happy to connect or chat about engineering, projects, or anything in between.
        </p>

        {/* <hr /> */}
        <div className='mb-5 flex items-center w-full gap-2 md:gap-2'>
          <a
            className='flex-1'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/kostiantyn-agapov'
          >
            <button className='btn btn-outline hover:btn-primary w-full md:btn-wide'>
              <LinkedInIcon />
            </button>
          </a>
          <a className='flex-1' rel='noopener noreferrer' target='_blank' href='https://github.com/konstagap'>
            <button className='btn btn-outline hover:btn-primary w-full md:btn-wide'>
              <GitHubIcon />
            </button>
          </a>
        </div>
      </section>
    </AnimationWrapper>
  );
}
