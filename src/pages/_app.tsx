import "@/styles/globals.css";

import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Focus } from "@/components/focus/focus";

const satoshi = localFont({ src: "./fonts/Satoshi-Variable.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`app-container ${satoshi.className}`}>
      <Focus>
        <Component {...pageProps} />
      </Focus>
    </div>
  );
}
