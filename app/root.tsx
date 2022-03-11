import styles from "./tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction,
} from "remix";
import type { MetaFunction } from "remix";

import { Layout } from "./components/layout";

export const meta: MetaFunction = () => {
  return {
    title: "João Alberto",
    description: "Software developer helping to build a better web",
    "og:url": "https://joaoalberto.dev",
    "og:type": "website",
    "og:title": "João Alberto",
    "og:description": "Software developer helping to build a better web",
    "og:image": "https://joaoalberto.dev/og_image.png",
    "twitter:card": "summary_large_image",
    "twitter:domain": "joaoalberto.dev",
    "twitter:url": "https://joaoalberto.dev/",
    "twitter:title": "João Alberto",
    "twitter:description": "Software developer helping to build a better web",
    "twitter:image": "https://joaoalberto.dev/og_image.png",
  };
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
