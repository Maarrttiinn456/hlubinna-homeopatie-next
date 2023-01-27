import Script from "next/script";
import Head from "next/head";
import '@/styles/globals.css'



//Components
import Footer from '../components/Footer'




export default function App({ Component, pageProps }) {
  return <>
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

  </Head>
  <main>
    <Component {...pageProps} />

  </main>
  <Footer/>
  </>
  
 
}
 