import { ReactNode } from 'react';

import './globals.css'

import localFont from 'next/font/local'

const SFPro = localFont({
  src:[
    {
      path:'../../public/fonts/SF-Pro-Display-Black.otf',
      weight: '900'
    },
    {
      path:'../../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '700'
    },
    {
      path:'../../public/fonts/SF-Pro-Display-Medium.otf',
      weight: '500'
    },
    {
      path:'../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400'
    },
    {
      path:'../../public/fonts/SF-Pro-Display-Light.otf',
      weight: '300'
    },
    {
      path:'../../public/fonts/SF-Pro-Display-Thin.otf',
      weight: '100'
    }
  ],
  variable: '--font-sf-pro'
});

export const metadata = {
  title: 'Henrique Anjos',
  description: 'Portfolio created by Henrique Anjos',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${SFPro.variable} font-sans overflow-x-hidden`}>
      <meta name="theme-color" content="#1C1C28"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="#1C1C28"/>
      <body >{children}</body>
    </html>
  )
}
