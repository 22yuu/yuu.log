'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export type ContextProps = {
  dark: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<ContextProps | null>(null);

export default function ThemeProvider({ children }: Props) {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
    updateDarkMode(!dark);
  };

  useEffect(() => {
    const isDark = getCurrentThemeState();

    setDark(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function getCurrentThemeState() {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

function updateDarkMode(darkMode: boolean) {
  const changeVisitorChartGridColor = (context: any) => {
    if (context.tick.value > 0) {
      return 'red';
    }
  };

  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
