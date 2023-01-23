// pages/_document.js

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="es">
        <Head>{CssBaseline.flush()}</Head>
        <body className='bg-white dark:bg-slate-800 scrollbar-thumb-rounded-md   scrollbar-track-rounded-sm  scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-slate-300 selection:bg-indigo-600 selection:text-white scroll-smooth'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;



/* <body className='bg-white dark:bg-slate-800 scrollbar-thumb-rounded-md   scrollbar-track-rounded-sm  scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-slate-300'> */