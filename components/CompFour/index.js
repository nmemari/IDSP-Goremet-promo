import React from 'react'
import styles from './CompFour.module.css'
import CharSlider from '../CharSlider'
import Background from '@/public/Backgrounds/bkg2.png'

export default function CompFour() {
  return (
    <div className={styles.container} style={{
      backgroundImage: `url(${Background.src})`,
      backgroundRepeat: 'no-repeat'
    }}>
      <h1 className={styles.title}>Serve Hungry Customers</h1>
      <div className={styles.slider}>
        <CharSlider />
      </div>
    </div>
  )
}
