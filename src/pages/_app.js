import '@/styles/globals.css'
import Title from '@/components/title'
import Head from 'next/head'
import Layout from '@/components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Title />

      <Head>
        <meta name="viewport" content="width=device-width"></meta>
        <link rel="icon" href={`${process.env.BASE_PATH || ''}/favicon.ico`} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&amp;display=swap" rel="stylesheet" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
