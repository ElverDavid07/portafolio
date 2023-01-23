import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'
import 'react-toastify/dist/ReactToastify.css'
import { AppProps } from 'next/app'
export default function App({ Component, pageProps }:AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="portafolio de elver david peñate" />
        <link rel="icon" href="/logo.jpg"  />
        <title>portafolio</title>
      </Head>
      <ThemeProvider attribute='class' enableSystem={true}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
    </>
  )
}
