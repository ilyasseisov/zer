import localFont from 'next/font/local';

export const stolzlFont = localFont({
  src: [
    {
      path: '../public/fonts/Stolzl_Display_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Stolzl_Display_Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Stolzl_Display_Regular.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  //
  display: 'swap',
  //
  variable: '--font-stolzl',
  //
});
