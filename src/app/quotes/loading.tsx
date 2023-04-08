export default function Loading() {
  return (
    <div className='h-60 flex flex-col justify-center w-full items-center'>
      <p>Loading</p>
      <progress className='progress progress-accent'></progress>
    </div>
  );
}
