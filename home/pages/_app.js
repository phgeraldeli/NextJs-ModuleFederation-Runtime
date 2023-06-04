import '@/styles/globals.css'
import { useEffect, useState } from 'react';



export default function App({ Component, pageProps }) {
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

