import Head from "next/head";
import { LiveblocksProvider } from "@liveblocks/react";
import { createClient } from "@liveblocks/client";
import globalStyles from "@/ui/config/global";

const client = createClient({
  authEndpoint: "/api/live",
});

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="João Alberto - Software developer." />
        <title>João Alberto - Front-end developer</title>
      </Head>
      <LiveblocksProvider client={client}>
        <Component {...pageProps} />
      </LiveblocksProvider>
    </>
  );
}

export default MyApp;
