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
      <div tw='w-full h-screen dark flex justify-center items-center'>
        <div tw=' flex flex-col md:flex-row justify-center items-center gap-5 shadow-2xl p-10 rounded-lg '>
          <div tw='avatar'>
            <div tw='w-48 mask mask-squircle '>
              <img src='/Kostiantyn_Agapov.png' />
            </div>
          </div>
          <div>
            <h1 tw='text-5xl font-bold'>Kostiantyn Agapov</h1>
            <p tw='py-4'>Software Engineer</p>
            <p tw='py-3'>🇺🇦</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
