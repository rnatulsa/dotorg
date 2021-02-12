import '@/styles/globals.css'
import Title from '@/components/title'
import Head from 'next/head'
import Layout from '@/components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Title />

      <Head>
        <link rel="icon" href={`${process.env.BASE_PATH || ''}/favicon.ico`} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
