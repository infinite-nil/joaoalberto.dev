import { cn } from "@/lib/utils";
import { Footer } from "@/ui/components/footer";
import "@/ui/theme/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { cookies } from "next/headers";
import { ReactNode } from "react";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "600"] });

export const metadata: Metadata = {
  title: "João Alberto - Software developer",
  description: "Software engineer with over 8 years of experience",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const cookiesStore = cookies();
  const theme = cookiesStore.get("theme");
  const classes = cn(manrope.className, theme?.value ?? "amber");

  return (
    <html lang="en">
      <body className={classes}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
