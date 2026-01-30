import DowloadResume from '@/components/DowloadResume';
import type { Metadata } from 'next';
import IconsMarquee, { skills } from '@/components/IconsMarquee';
import AnimationWrapper from '@/components/PageAnimation';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Experience and CV',
  openGraph: {
    title: 'Skills | Kostiantyn Agapov',
    description: 'Experience and CV',
    type: 'article',
    url: 'https://findkostas.com/experience',
    images: [
      {
        url: 'https://findkostas.com/api/og?title=Experience',
      },
    ],
  },
  keywords: [...skills],
};

const sections = [
  {
    name: 'Intuit (Full-time)',
    time: 'Nov 2023 - Present',
    points: [
      'Develop and maintain high-traffic Spring Boot microservices powering TurboTax, using Java 21 and Kotlin Coroutines across both Servlet and Reactive (WebFlux) environments.',
      'Engineer a high-performance algorithm to calculate tax return completion status, enabling real-time progress tracking and data-driven insights for millions of users.',
      'Deliver mission-critical API endpoints supporting the "Calculation on Completion" feature, directly improving accuracy and speed of the tax-filing experience.',
      'Author and execute complex Gatling load-testing scripts to simulate peak-season traffic, identify bottlenecks, and ensure system stability under load.',
      'Establish comprehensive Splunk observability dashboards and proactive alerting systems, significantly reducing Mean Time to Detection by identifying anomalies before customer impact.',
      'Develop customer-facing TurboTax Online UI components that guide users through unreviewed or incomplete tax topics in federal and final review.',
    ],
  },
  {
    name: 'Intuit (Contract)',
    time: 'Oct 2022 - Nov 2023',
    points: [
      'Lead the migration of a large-scale codebase to a modern technology stack through cross-functional collaboration and robust version control.',
      'Develop reusable, type-safe React components in TypeScript and manage complex application state to improve UI consistency and developer velocity.',
      'Implement comprehensive testing strategies including automated unit, integration, and end-to-end (E2E) tests to prevent regressions.',
      'Conduct manual and automated testing across Web, Android, and iOS platforms to ensure high-quality delivery across the ecosystem.',
      'Author and maintain technical documentation to streamline developer onboarding and enhance project scalability.',
    ],
  },
  {
    name: 'LexisNexis Risk Solutions',
    time: 'May 2021 - Oct 2022',
    points: [
      'Build full-stack Node.js applications using Express, MySQL, and Sequelize, securing routes with Passport.js and JWT.',
      'Engineer complex data visualization tools including interactive charts and maps, optimized to reduce unnecessary re-renders.',
      'Implement digital credentialing using Microsoft Verifiable Credentials and custom authentication libraries.',
      'Refactor legacy codebases and utilize worker threads for heavy backend computations to improve system efficiency and response times.',
    ],
  },
  {
    name: 'CSI WORKS',
    time: 'September 2019 - May 2021',
    points: [
      'Translate complex wireframes into functional, cross-platform UI using React and Styled Components.',
      'Develop controlled forms with Formik, implementing rigorous input validation and sophisticated error handling.',
      'Manage application flow using React Router with protected and nested routing, optimizing performance through component memoization.',
      'Build reusable React components and ensure consistent UI behavior across the application.',
      'Collaborate with designers and backend teams to deliver polished, production-ready features.',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <AnimationWrapper>
      <section className='prose prose-sm prose-p:m-0 md:prose-p:m-2 overflow-y-auto'>
        <IconsMarquee />
        <DowloadResume />
        {sections.map(({ name, time, points }) => (
          <div key={name}>
            <div className='flex w-full flex-col md:flex-row items-baseline justify-between'>
              <p className='font-bold'>{name}</p>
              <p>{time}</p>
            </div>
            <ul>
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </AnimationWrapper>
  );
}
