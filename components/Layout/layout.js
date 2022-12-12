import React from 'react'
import Header from "./Header/Header"
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Layout = (props) => {
  const {pathname} = useRouter()
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
      <Header />
      <main>
          {props.children}
      </main>
      { pathname !== "/login" &&<Footer />}
    </>
  )
}

export default Layout