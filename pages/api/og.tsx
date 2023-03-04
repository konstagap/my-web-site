import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Image from 'next/image';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');

  return new ImageResponse(
    (
      <div style={{ height: '100%', width: '100%' }} tw='dark'>
        <div tw='flex flex-col md:flex-row justify-start items-center gap-5 p-10'>
          <Image
            alt='Kostiantyn Agapov'
            tw='rounded-full'
            src='/Kostiantyn_Agapov.png'
            width={150}
            height={150}
            priority
          />
          <div>
            <h1 tw='text-2xl font-bold'>Kostiantyn Agapov</h1>
            <p tw='py-4'>Software Engineer</p>
            <p tw='py-3'>
              <span>🇺🇦 </span> {postTitle || ''}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      debug: true,
    }
  );
}
