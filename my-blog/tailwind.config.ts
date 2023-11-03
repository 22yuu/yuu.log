import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fade-up 1s ease-in-out',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      colors: {
        'theme-bg': 'rgb(var(--color-theme-bg) / <alpha-value>)',
        'theme-text': 'rgb(var(--color-theme-text) / <alpha-value>)',
        'theme-primary': 'rgb(var(--color-theme-primary) / <alpha-value>)',
        'theme-secondary': 'rgb(var(--color-theme-secondary) / <alpha-value>)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
export default config;
