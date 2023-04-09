'use client';
import { useTheme } from 'next-themes';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './icons';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //toggles the theme
  const toggleTheme: ChangeEventHandler<HTMLInputElement> = e => {
    console.log('theme', theme);
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return !mounted ? null : (
    <div className='flex gap-2'>
      {theme !== 'dark' ? <MoonIcon /> : <SunIcon />}
      <input type='checkbox' onChange={toggleTheme} className='toggle toggle-sm' checked={theme === 'dark'} />
    </div>
  );
};
export default ThemeSwitch;
