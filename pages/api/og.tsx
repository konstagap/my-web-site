import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(https://www.findkostas.com/og-bg.png)',
        }}
        tw='dark'
      >
        <div tw='ml-[300px] pt-10'>
          <h1 tw='text-4xl font-bold'>Kostiantyn Agapov</h1>
          <p tw='py-4'>Software Engineer</p>
          <p tw='py-3'>🇺🇦 {postTitle || ''}</p>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 300,
      debug: true,
    }
  );
}
