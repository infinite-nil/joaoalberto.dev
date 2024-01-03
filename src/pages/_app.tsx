import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`max-w-[68ch] mx-auto ${syne.className}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
