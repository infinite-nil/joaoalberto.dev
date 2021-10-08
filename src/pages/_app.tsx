import { useEffect } from "react";
import Head from "next/head";
import splitbee from "@splitbee/web";
import { LiveblocksProvider } from "@liveblocks/react";
import { createClient } from "@liveblocks/client";
import globalStyles from "@/ui/config/global";

const client = createClient({
  authEndpoint: "/api/live",
});

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
      <LiveblocksProvider client={client}>
        <Component {...pageProps} />
      </LiveblocksProvider>
    </>
  );
}

export default MyApp;
