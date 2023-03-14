import React from 'react';
import Image, { StaticImageData } from 'next/image';

import defaultImg from '@/img/default-bg.jpg';

type Props = {};

type TQuote = {
  quote: string;
  author: string;
  background: StaticImageData | string;
  title: string;
  permalink?: string;
};

type TQuoteResp = {
  error: any;
  contents: {
    quotes: TQuote[];
  };
};

const defaultQuote = {
  title: "That's Life Song by Frank Sinatra",
  quote:
    "That's life! \n That's what all the people say \n You're riding high in April, shot down in May \n But I know I'm gonna change that tune \n When I'm back on top, back on top in June...",
  author: 'Frank Sinatra',
  background: defaultImg,
};

async function getQuote(): Promise<TQuote> {
  const res = await fetch('http://quotes.rest/qod.json?category=inspire', { next: { revalidate: 60 * 60 } });
  if (!res.ok) return defaultQuote;
  const resp: TQuoteResp = await res.json();
  // to many request, limit reached
  if (resp.error) return defaultQuote;
  return resp.contents.quotes[0];
}

export default async function QuotePage() {
  const quote = await getQuote();

  return (
    <div>
      <div className='alert rounded-md mb-1'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>You are up to date! Check back tomorrow for a new awesome quote!✌️</span>
        </div>
      </div>
      <div className='py-10 flex flex-wrap flex-col lg:flex-row gap-5 lg:justify-around min-h-fit rounded-md'>
        <div className='prose prose-sm md:max-w-sm'>
          <blockquote cite={quote.title}>
            {quote.quote.split('\n').map((el, i) => (
              <p className='m-0' key={i}>
                {el}
              </p>
            ))}
            <span className='text-right block'>{quote.author}</span>
            <br />
            {quote.permalink ? (
              <a
                href={quote.permalink}
                title='Powered by quotes from theysaidso.com'
                rel='noopener noreferrer'
                target='_blank'
                className='text-right block text-xs'
              >
                They Said So®
              </a>
            ) : null}
          </blockquote>
        </div>

        <Image
          src={quote.background}
          width={600}
          height={700}
          className='md:max-w-sm rounded-lg shadow-2xl'
          alt='Image for quote'
        />
      </div>
    </div>
  );
}
