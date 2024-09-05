import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors
    colors: {
      white: '#ffffff',
      dark: '#181818',
      purple: {
        light: '#4D59cc',
        dark: '#28328c',
      },
    },
    extend: {
      fontFamily: {
        stolzl: 'var(--font-stolzl)',
      },
    },
  },
  plugins: [],
};
export default config;
