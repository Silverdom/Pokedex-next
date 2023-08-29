import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Pokemainnav from './components/Pokemainnav'
import { StrictMode } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Pokemainnav />
      <div className='cs-container w-75 m-auto p-5'>
        <Component { ...pageProps } />
      </div>
    </StrictMode>
  )
}
