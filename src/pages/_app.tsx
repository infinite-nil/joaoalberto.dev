import Head from "next/head";
import globalStyles from "@/ui/config/global";

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
