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
      <div tw='flex flex-col w-full h-full items-center justify-center bg-slate-800 px-30'>
        <div tw='bg-slate-900 flex w-full rounded-xl shadow-xl overflow-hidden'>
          <div tw='flex'>
            <img tw='w-78 h-78 rounded-tl-xl rounded-bl-xl' src='https://www.findkostas.com/Kostiantyn_Agapov.png' />
            <div tw='flex flex-col flex-wrap ml-10 mt-8 '>
              <h1 tw='text-slate-300 text-7xl '>Kostiantyn Agapov</h1>
              <p tw='text-slate-400 text-5xl'> Software Engineer </p>
              <small tw='text-slate-500 text-3xl'>{postTitle}</small>
            </div>
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
