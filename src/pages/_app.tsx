import { useState } from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'

import type { AppProps } from 'next/app'
import '@picocss/pico'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  const [menu, setMenu] = useState(true)

  return(
    <>
      <Head>
        <title>YouTube</title>
      </Head>
      <Navbar menu={menu} setMenu={setMenu} />
      <div className='content'>
      {menu ? <Menu /> : null}
        <div className='main'>
          <Component {...pageProps} menu={menu} setMenu={setMenu}/>
        </div>
      </div>
    </>
  )
}
