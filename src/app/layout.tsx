import { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"

import './globals.css'

import localFont from 'next/font/local'
import { LangugageContextProvider } from '@/context/languageContext';

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
  description: 'Portfolio created by Henrique Anjos'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${SFPro.variable} font-sans overflow-x-hidden`}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>"/>
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>"/>
        <meta name="theme-color" content="#1C1C28"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#1C1C28"/>
      </head>
      <body >
        <LangugageContextProvider>
          {children}
        </LangugageContextProvider>
        <Analytics />
      </body>
    </html>
  )
}
