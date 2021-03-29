import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reuniôes Barcelos Leite</title>
        <meta property="og:image" content="/img/logo.png"></meta>
        <link rel="shortcut icon" href="/img/logo.png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4a6da7" />
        <meta
          name="description"
          content="Links para reuniões e saida de campo pelo zoom"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
