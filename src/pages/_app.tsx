import globalStyles from '@/ui/config/global'

function MyApp({ Component, pageProps }) {
  globalStyles()

  return <Component {...pageProps} />;
}

export default MyApp;
