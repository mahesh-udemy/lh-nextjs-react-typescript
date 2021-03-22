import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Level Homes</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
