import App from 'next/app';
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ctx => {
  const AppProps = await App.getInitialProps(ctx);
  return AppProps;
};

export default MyApp;