import Script from "next/script";
import Head from "next/head";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
  
 
}
