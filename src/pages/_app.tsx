import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const satoshi = localFont({ src: "./fonts/Satoshi-Variable.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`app-container ${satoshi.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
