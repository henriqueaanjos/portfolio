import { Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className="bg-background bg-app bg-no-repeat bg-cover overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}