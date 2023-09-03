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
      <Pokemainnav />
      <div class="container-fluid p-0 m-0">
        <div class="main-container">
          <div className='cs-container'>
            <Component { ...pageProps } />
          </div>

          <div class="poke-loader-container">
            <div class="poke-loader">
              <img src="/pokeball_PNG_colored.png" width="50px" height="50px" />
            </div>
          </div>
        </div>
      </div>
    </StrictMode>
  )
}
