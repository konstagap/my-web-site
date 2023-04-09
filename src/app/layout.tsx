import { Raleway } from 'next/font/google';
import './globals.css';

import Divider from '@/components/Divider';
import Greeting from '@/components/Greeting';
import Paper from '@/components/Paper';
import Provider from '@/components/Provider';
import { ScrollToTop } from '@/components/ScrollToTop';
import Side from '@/components/Side';
import TabsList from '@/components/TabsList';

const font = Raleway({ weight: ['300', '400', '500'], display: 'swap', subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Kostiantyn Agapov',
    template: '%s | Kostiantyn Agapov',
  },
  keywords: [
    'Web developer',
    'San Diego',
    'California',
    'Full Stack Software Engineer',
    'React',
    'Next',
    'Developer',
    'Software Engineer',
    'Ukraine',
    'Support Ukraine',
  ],
  description: 'Software Engineer',
  openGraph: {
    title: 'Kostiantyn Agapov',
    description: 'Software Engineer',
    url: 'https://findkostas.com',
    siteName: 'Kostiantyn Agapov',
    images: [
      {
        url: 'https://findkostas.com/api/og',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  twitter: {
    title: 'Kostiantyn Agapov',
    card: 'summary_large_image',
    description: 'Software Engineer',
    images: ['https://findkostas.com/api/og'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${font.className}`}>
      <body>
        <Provider>
          <div className='container mx-auto px-1 min-h-screen flex flex-col md:flex-row w-full'>
            <aside className='mt-2 md:mt-12 md:basis-1/4 relative'>
              <div className='md:sticky md:top-5'>
                <Side />
              </div>
            </aside>
            <Divider />
            <main className='md:mt-12 mx-2 md:mx-6 flex-1'>
              <div className='mb-1 mockup-code'>
                <Greeting />
              </div>
              <Paper>
                <TabsList />
                <section>{children}</section>
                <ScrollToTop />
              </Paper>
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
