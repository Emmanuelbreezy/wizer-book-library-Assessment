import Head from 'next/head';
import '../styles/css/global.css';
import '../styles/css/fontawesome.css';
import 'react-sliding-pane/dist/react-sliding-pane.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
