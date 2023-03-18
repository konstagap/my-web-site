import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

function ProsCard({ title, pros }: { title: string; pros: string[] }) {
  return (
    <div className='border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full'>
      <span>{title}</span>
      <div className='mt-4'>
        {pros.map((pro: string) => (
          <div key={pro} className='flex font-medium items-baseline mb-2'>
            <div className='h-4 w-4 mr-2'>
              <svg className='h-4 w-4 text-emerald-500' viewBox='0 0 24 24'>
                <g fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsCard({ title, cons }: { title: string; cons: string[] }) {
  return (
    <div className='border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full'>
      <span>{`${title}`}</span>
      <div className='mt-4'>
        {cons.map(con => (
          <div key={con} className='flex font-medium items-baseline mb-2'>
            <div className='h-4 w-4 mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-4 w-4 text-red-500'
              >
                <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Callout(props: any) {
  return (
    <div className='flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8'>
      <div className='flex items-center w-4 mr-4'>{props.emoji}</div>
      <div className='w-full callout'>{props.children}</div>
    </div>
  );
}

function RoundedImage(props: any) {
  return <Image alt='' className='rounded-lg mx-auto' {...props} />;
}

type CarouselImage = {
  id: string;
  img: React.ComponentPropsWithoutRef<typeof Image>;
};

type CarouselProps = {
  images: CarouselImage[];
};

function Carousel2({ images }: CarouselProps) {
  return (
    <>
      <div className='carousel w-full'>
        {images.map((el, index, arr) => {
          return (
            <div key={el.id} id={el.id} className='carousel-item w-full'>
              <Image className='object-cover mx-auto rounded-md' {...el.img} />
            </div>
          );
        })}
      </div>

      <div className='flex justify-center w-full py-2 gap-2'>
        {images.map((el, index) => {
          return (
            <a key={'#' + el.id} href={'#' + el.id} className='btn btn-xs'>
              {index + 1}
            </a>
          );
        })}
      </div>
    </>
  );
}

function Carousel({ images }: CarouselProps) {
  return (
    <div className='carousel w-full'>
      {images.map((el, index, arr) => {
        const isFirst = index === 0;
        const isLast = index === arr.length - 1;

        const nextId = arr[index + 1]?.id;
        const prevId = arr[index - 1]?.id;

        return (
          <div key={el.id} id={el.id} className='carousel-item relative w-full '>
            <Image className='object-cover mx-auto rounded-md' {...el.img} />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2'>
              <a
                href={'#' + prevId}
                className={`btn btn-accent md:opacity-60 md:hover:opacity-100 btn-circle ${isFirst ? 'invisible' : ''}`}
              >
                ❮
              </a>
              <a
                href={'#' + nextId}
                className={`btn btn-accent md:opacity-60 md:hover:opacity-100 btn-circle ${isLast ? 'invisible' : ''}`}
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  ProsCard,
  ConsCard,
  Callout,
  Carousel,
  Carousel2,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article>
      <Component components={{ ...components }} />
    </article>
  );
}
