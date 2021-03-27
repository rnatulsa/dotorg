import Head from 'next/head'

export default function Title({ children }) {
  return (
    <Head>
      <title>{children}{children && ' | '}Renaissance Neighborhood Association – Tulsa, OK</title>
    </Head>
  )
}
