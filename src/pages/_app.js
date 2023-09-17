import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Pokemainnav from './components/Pokemainnav'
import Image from 'next/image';
import { StrictMode } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>
        <title>Pokeinfo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Application which displays all pokemons with details about type,species and many more" />
      </Head>
      <div className="container-fluid p-0 m-0">
        <div className='row w-100'>
          <div className='col-md-8'>
            <div className="main-container">
              <div className='cs-container'>
                <Component { ...pageProps } />
              </div>
            </div>
          </div>
          <div className='col-md-4 p-0'>
            <Pokemainnav />
          </div>
        </div>
      </div>
    </StrictMode>
  )
}
