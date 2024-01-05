import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Inter, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`max-w-[68ch] mx-auto ${syne.variable} ${inter.variable} font-text`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
