import Link from 'next/link'
import Head from 'next/head'
import Layout from '/components/Layout'


export default function HaloDunia() {
    return (
    <>
    <Head>
        <title>Halaman Halo Dunia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="nextjs, react, html" />
    </Head>
    
    <Layout>
    <h1>Halo Dunia!</h1>
    <h2> 
        <Link href="/">
            <a>Kembali ke Index</a>
        </Link>
    </h2>
    </Layout>

    </>
    )
}