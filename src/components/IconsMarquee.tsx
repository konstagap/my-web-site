import React from 'react';

const skills = [
  'HTML5',
  'CSS',
  'JSX',
  'TSX',
  'MUI',
  'Ant Design',
  'Tailwind',
  'JavaScript',
  'Lifecycle methods',
  'React hooks',
  'Redux Toolkit',
  'React Router',
  'Next.js',
  'TypeScript',
  'React',
  'Redux',
  'SQL',
  'MySQL',
  'MongoDB',
  'JWT',
  'Authorization',
  'OAUTH 2.0',
  'REST API',
  'GraphQL',
  'Node',
  'Express',
  'Passport',
  'Git',
  'MongoDB',
  'Jest',
  'React Testing Library',
  'Vite Test',
  'Docker',
  'Linux',
  'Responsive design',
  'Cross-browser compatibility',
  'Accessibility',
  'Front-end development',
  'Back-end development',
  'Server-side scripting',
  'Client-side scripting',
  'APIs (Application Programming Interfaces)',
  'Mobile-first design',
  'Performance optimization',
  'Web security',
  'Continuous integration and continuous deployment (CI/CD)',
  'Testing and debugging',
  'Websockets and real-time applications',
];

function IconsMarquee() {
  return (
    <div className='relative flex overflow-x-hidden'>
      <div className='mt-4 animate-marquee whitespace-nowrap'>
        {skills.map((skill, ind) => {
          return (
            <span key={ind} className='mx-4 highlight cursor-default'>
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default IconsMarquee;
