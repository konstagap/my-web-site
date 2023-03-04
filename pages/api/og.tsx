import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title') || 'San Diego, CA';

  return new ImageResponse(
    (
      <div tw='flex flex-col w-full h-full items-center justify-center bg-slate-800 px-4 '>
        <div tw='bg-slate-900 flex w-full rounded-xl shadow-xl max-w-4xl overflow-hidden'>
          <div tw='flex'>
            <img tw='w-36 h-36 rounded-tl-xl rounded-bl-xl' src='https://www.findkostas.com/Kostiantyn_Agapov.png' />
            <div tw='flex flex-col ml-6 '>
              <h1 tw='text-slate-300 text-2xl mb-0'>Kostiantyn Agapov</h1>
              <p tw='text-slate-400'> Software Engineer </p>
              <small tw='text-slate-500'>{postTitle}</small>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
