import App from 'next/app';
import '@/styles/globals.css'
import { useEffect, useState } from 'react';



function MyApp({ Component, pageProps }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true)
  }, []);

  if(!hydrated) {
      return (
        <></>
      )
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ctx => {
  const AppProps = await App.getInitialProps(ctx);
  return AppProps;
};

export default MyApp;