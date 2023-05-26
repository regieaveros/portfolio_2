import Head from 'next/head'
import SEO from '@bradgarropy/next-seo'
import '../styles/globals.css'
import AnimatedCursor from './components/AnimCursor'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            </Head>
            <SEO 
                title="Regie Averos" 
                description="A Web Developer based in Philippines, focused on building websites and web application."
                keywords={['Regie Averos', 'regieaveros', 'regie averos portfolio']}
                icon="/logo.ico"
            />
            <AnimatedCursor />
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}

export default MyApp
