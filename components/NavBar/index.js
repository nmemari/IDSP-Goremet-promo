import React from 'react'
import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import BunBun from '@/public/Logo/BunBun_Gradient.svg'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={BunBun} width={80} height={80}/>
        <div>BunBun Studios</div>
      </div> 
      <Link className={styles.btn} href={'http://bjvqaptcfr.us18.qoddiapp.com/'}>Play Game</Link>
    </div>
  )
}
