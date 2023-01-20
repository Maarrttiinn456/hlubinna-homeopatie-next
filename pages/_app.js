import Script from "next/script";
import Head from "next/head";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
    <link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css" 
    integrity="sha512-eMxdaSf5XW3ZW1wZCrWItO2jZ7A9FhuZfjVdztr7ZsKNOmt6TUMTQgfpNoVRyfPE5S9BC0A4suXzsGSrAOWcoQ==" 
    crossorigin="anonymous" referrerpolicy="no-referrer"
    />
    </Head>
    <Component {...pageProps} />
    <Script
        id="tiny-slider-cdn"
        src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js"
      />
  </>
  
 
}
