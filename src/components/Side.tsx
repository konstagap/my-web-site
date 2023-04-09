import Avatar from './Avatar';
import Contacts from './Contacts';
import Name from './Name';
import QuoteOfTheDay from './QuoteOfTheDay';
import ThemeSwitch from './ThemeSwitch';

const Side = () => {
  return (
    <div className='p-1 md:p-4'>
      <div className='flex md:flex-col justify-around items-center w-full mb-2 md:mb-0'>
        <Avatar />
        <Name />
      </div>
      <Contacts />
      <QuoteOfTheDay />
      <div className='hidden md:flex w-full justify-end mt-2'>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Side;
