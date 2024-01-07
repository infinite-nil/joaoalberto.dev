import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Inter, Syne } from "next/font/google";
import React from 'react';

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`max-w-[68ch] mx-auto ${syne.variable} ${inter.variable} font-text`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
