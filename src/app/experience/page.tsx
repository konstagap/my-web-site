/* eslint-disable react/no-unescaped-entities */
import DowloadResume from '@/components/DowloadResume';
import type { Metadata } from 'next';
import IconsMarquee from '@/components/IconsMarquee';

export const metadata: Metadata = {
  title: 'Qualification',
  description: 'Experience and CV',
};

export default function ExperiencePage() {
  return (
    <section className='prose prose-base overflow-y-auto'>
      <IconsMarquee />

      <DowloadResume />

      <article>
        <div className='flex w-full justify-between'>
          <p>November 2022</p>
          <h4>Intuit</h4>
        </div>
        <ul>
          <li>Successfully migrated a large codebase from one technology stack to another.</li>
          <li>Wrote multiple unit and integration tests in Java to ensure high code quality and stability.</li>
          <li>
            Improved efficiency and accuracy of testing process by developing automation testing, including end-to-end
            tests.
          </li>
          <li>Conducted manual testing on web, Android, and iOS platforms to identify and resolve issues.</li>
          <li>Collaborated with cross-functional teams to ensure seamless integration of new technology stack.</li>
          <li>Developed and maintained technical documentation for software projects.</li>
        </ul>
      </article>

      <article>
        <div className='flex w-full justify-between'>
          <p>May 2021 - November 2022</p>
          <h4>LexisNexis Risk Solutions</h4>
        </div>
        <ul>
          <li>
            Develop React applications, including organizing global state stores using Redux or React Context, creating
            and utilizing custom hooks, implementing client-side routing, and building custom authentication with JWT or
            Microsoft auth libraries.
          </li>
          <li>
            Customize user interfaces using UI libraries like MUI, Ant Design, and Bootstrap, and CSS, creating reusable
            components for consistency and responsiveness across all devices.
          </li>
          <li>
            Create various data visualization tools such as charts, data tables, and maps, optimizing code to reduce
            re-rendering and minimizing "prop drilling."
          </li>
          <li>
            Build Node servers using Express.js, MySQL databases, Sequelize ORM, and vanilla SQL queries, along with
            other NPM packages such as Passport.js to secure routes, worker threads for heavy calculations, and more.
          </li>
          <li>Utilize Microsoft Verifiable Credentials for issuance and verification of digital credentials.</li>
          <li>Implement custom themes, refactor legacy code, and work with browser APIs to persist session data.</li>
        </ul>
      </article>

      <article>
        <div className='flex w-full justify-between'>
          <p>September 2019 - May 2021</p>
          <h4>CSI WORKS</h4>
        </div>
        <ul>
          <li>
            Develop reusable components in React, utilizing hooks, calling backend APIs, and listening to DOM events.
            Optimize performance by breaking down components into smaller parts and memorizing them.
          </li>
          <li>Use Styled Components and UI libraries for styling and prototyping.</li>
          <li>Implement controlled forms with FORMIK, including input validation with error handling.</li>
          <li>
            Set up routing with React Router, including protecting private routes and implementing nested routing.
          </li>
          <li>Translate design wireframes into functional, cross-platform code.</li>
          <li>Write unit tests using Jest and React Testing Library.</li>
        </ul>
      </article>
    </section>
  );
}
