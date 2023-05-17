import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CompOne from '@/components/CompOne'
import CompTwo from '@/components/CompTwo'
import CompThree from '@/components/CompThree'
import CompFour from '@/components/CompFour'
import CompFive from '@/components/CompFive'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Goremet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <CompOne />
        <CompTwo />
        <CompThree />
        <CompFour />
        <CompFive />
      </main>
    </>
  )
}
