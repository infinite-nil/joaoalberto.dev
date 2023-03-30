import "@/styles/globals.css";

import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Focus } from "@/components/focus/focus";
import { Navbar } from "@/components/navbar/navbar";

const satoshi = localFont({ src: "../fonts/Satoshi-Variable.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`app-container ${satoshi.className}`}>
      <Focus>
        <Navbar />
        <div className="mx-auto px-8 md:max-w-4xl md:grid md:grid-cols-12 md:auto-rows-fr md:gap-4 lg:max-w-7xl">
          <Component {...pageProps} />
        </div>
      </Focus>
    </div>
  );
}
