import { Footer } from "@/ui/components/footer";
import { Navbar } from "@/ui/components/navbar";
import "@/ui/theme/globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Alberto - Software developer",
  description: "Software engineer with over 8 years of experience",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
