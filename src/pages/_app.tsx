import { useEffect } from "react";
import Head from "next/head";
import splitbee from "@splitbee/web";
import globalStyles from "@/ui/config/global";

function MyApp({ Component, pageProps }) {
  globalStyles();

  useEffect(() => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I am João Alberto, your next front-end developer."
        />
        <title>João Alberto - Front-end developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
