import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tristan Fregona - Portfolio</title>
        <meta name="description" content="Portfolio Tristan Fregona" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
