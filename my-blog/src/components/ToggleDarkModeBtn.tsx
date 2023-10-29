'use client';

import MoonIcon from './ui/icons/MoonIcon';
import SunIcon from './ui/icons/SunIcon';
import { useDarkMode, ContextProps } from '@/contexts/ThemeProvider';

const ToggleDarkModeBtn = () => {
  const { dark: isDark, toggleDarkMode } = useDarkMode() as ContextProps;

  return (
    <button
      onClick={toggleDarkMode}
      className={`${isDark ? 'text-yellow-300' : 'text-yellow-500'}`}
    >
      {!isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ToggleDarkModeBtn;
