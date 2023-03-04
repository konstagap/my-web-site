import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  let postTitle = searchParams.get('title') || 'San Diego, CA';

  return new ImageResponse(
    (
      <div tw='bg-slate-900 flex items-center w-full w-full h-full px-20 overflow-hidden'>
        <div tw='flex'>
          <img tw='w-140 h-140 rounded-full' src='https://www.findkostas.com/Kostiantyn_Agapov.png' />
          <div tw='flex flex-col flex-wrap ml-10 pl-10  border-l-2 border-slate-400 '>
            <h1 tw='text-slate-300 text-8xl mt-8 '>Kostiantyn Agapov</h1>
            <p tw='text-slate-400 text-5xl mb-30'> Software Engineer </p>
            <small tw='text-slate-500 text-5xl'>{postTitle}</small>
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
