import DowloadResume from '@/components/DowloadResume'
import type { Metadata } from 'next'
import IconsMarquee from '@/components/IconsMarquee'
import AnimationWrapper from '@/components/PageAnimation'

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
        url: 'https://findkostas.com/api/og?title=Experience'
      }
    ]
  }
}

const sections = [
  {
    name: 'Intuit',
    time: 'November 2022',
    points: [
      'Migrate a large codebase from one technology stack to another.',
      'Write automated unit and integration tests for regression testing, including end-to-end tests.',
      'Conduct manual testing on web, Android, and iOS platforms to identify and resolve issues.',
      'Collaborate with cross-functional teams to ensure seamless integration of new technology stack.',
      'Develop and maintain technical documentation for software projects.',
      'Create reusable React components in TypeScript and create content with domain-specific language.',
      'Work with various front-end frameworks, including Next.js and backend Node.js servers.',
      'Create UI assets, work with state management libraries and asynchronous code.'
    ]
  },
  {
    name: 'LexisNexis Risk Solutions',
    time: 'May 2021 - November 2022',
    points: [
      'Develop React applications, including organizing global state stores using Redux or React Context, creating and utilizing custom hooks, implementing client-side routing, and building custom authentication with JWT or Microsoft auth libraries.',
      'Customize user interfaces using UI libraries like MUI, Ant Design, and Bootstrap, and CSS, creating reusable components for consistency and responsiveness across all devices.',
      "Create various data visualization tools such as charts, data tables, and maps, optimizing code to reduce re-rendering and minimizing 'prop drilling.'",
      'Build Node servers using Express.js, MySQL databases, Sequelize ORM, and vanilla SQL queries, along with other NPM packages such as Passport.js to secure routes, worker threads for heavy calculations, and more.',
      'Utilize Microsoft Verifiable Credentials for issuance and verification of digital credentials.',
      'Implement custom themes, refactor legacy code, and work with browser APIs to persist session data.'
    ]
  },
  {
    name: 'CSI WORKS',
    time: 'September 2019 - May 2021',
    points: [
      'Develop reusable components in React, utilizing hooks, calling backend APIs, and listening to DOM events. Optimize performance by breaking down components into smaller parts and memorizing them.',
      'Use Styled Components and UI libraries for styling and prototyping.',
      'Implement controlled forms with FORMIK, including input validation with error handling.',
      'Set up routing with React Router, including protecting private routes and implementing nested routing.',
      'Translate design wireframes into functional, cross-platform code.',
      'Write unit tests using Jest and React Testing Library.'
    ]
  }
]

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
  )
}
