import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fregona Tristan - Portfolio</title>
        <meta name="description" content="Portfolio Fregona Tristan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
