import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppProvider } from '~/context/AppContext';
import { MetaTags, PageType } from '~/data-types/MetaTags';
import Layout from '~/layout/Layout';
import '../styles/globals.css';

export const defaultMetaTags: MetaTags = {
  author: 'Daniel M',
  description: 'Frontend Mentor | Shortly URL shortening API Challenge',
  title: 'Frontend Mentor | Shortly URL shortening API Challenge',
  type: PageType.website
};

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap" />
      </Head>
      <AppProvider>
        <Layout metaTags={defaultMetaTags}>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp
