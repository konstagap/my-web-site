import React from 'react';
import Image, { StaticImageData } from 'next/image';

import defaultImg from '@/img/default-bg.jpg';
import AnimationWrapper from '@/components/PageAnimation';

type TQuote = {
  quote: string;
  author: string;
  background: StaticImageData | string;
  title: string;
};

type ZenQuotesResponse = {
  q: string;
  a: string;
};

const defaultQuote: TQuote = {
  title: 'Motivational Quote',
  quote: 'The only way to do great work is to love what you do.',
  author: 'Steve Jobs',
  background: defaultImg,
};

// Quote block component
function QuoteBlock({ quote, author }: { quote: string; author: string }) {
  const lines = quote.split('\n').filter(Boolean);

  return (
    <blockquote className='prose prose-sm md:max-w-sm'>
      <div className='space-y-2'>
        {lines.map((line, idx) => (
          <p key={`line-${idx}-${line.substring(0, 10)}`} className='m-0'>
            {line}
          </p>
        ))}
      </div>
      <footer className='text-right mt-4'>
        <cite className='not-italic font-semibold'>— {author}</cite>
      </footer>
    </blockquote>
  );
}

async function getQuote(): Promise<TQuote> {
  try {
    // Fetch quote
    const quoteRes = await fetch('https://zenquotes.io/api/today', {
      next: { revalidate: 60 * 60 }, // revalidate every hour
    });

    if (!quoteRes.ok) {
      console.error(`Quote API error: ${quoteRes.status} ${quoteRes.statusText}`);
      return defaultQuote;
    }

    const quoteData: ZenQuotesResponse[] = await quoteRes.json();
    const quote = quoteData[0];

    // Fetch random image
    const imageRes = await fetch('https://picsum.photos/600/700', {
      next: { revalidate: 60 * 60 }, // revalidate every hour
      redirect: 'follow',
    });

    const imageUrl = imageRes.url || 'https://picsum.photos/600/700';

    return {
      quote: quote.q,
      author: quote.a,
      title: 'Quote of the Day',
      background: imageUrl,
    };
  } catch (error) {
    console.error('Failed to fetch quote:', error);
    return defaultQuote;
  }
}

export default async function QuotePage() {
  const quote = await getQuote();

  return (
    <AnimationWrapper>
      <div className='alert'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-current shrink-0 h-6 w-6'
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
        <span>
          Served to you by the{' '}
          <a href='https://zenquotes.io' target='_blank' rel='noopener noreferrer' className='link'>
            ZenQuotes API
          </a>
        </span>
      </div>
      <div className='py-10 flex flex-wrap flex-col lg:flex-row gap-5 lg:justify-around min-h-fit rounded-md'>
        <QuoteBlock quote={quote.quote} author={quote.author} />

        <Image
          src={quote.background}
          width={600}
          height={700}
          unoptimized={true}
          className='md:max-w-sm rounded-lg shadow-2xl'
          alt={`Quote by ${quote.author}`}
          priority
        />
      </div>
    </AnimationWrapper>
  );
}
