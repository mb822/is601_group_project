import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
