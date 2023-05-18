import React from 'react'
import styles from './CompThree.module.css'
import Background from '@/public/Backgrounds/bkg3.png'
import InfoCardLeft from '../infoCardLeft'
import InfoCardRight from '../infoCardRight'
import Image1 from '@/public/Comp3/Play with Friends Image.svg'
import Image2 from '@/public/Comp3/Play Cards Serve Burgers Image.svg'
import Image3 from '@/public/Comp3/Best Food Truck Image.svg'

export default function CompThree() {
  return (
    <div className={styles.container} style={{
      backgroundImage: `url(${Background.src})`,
      backgroundRepeat: 'no-repeat'
    }}>
      <h1 className={styles.title}>What's This All About?</h1>
      <InfoCardRight title='Play With Your Friends' image={Image1}/>
      <InfoCardLeft title='Play Cards and Serve Burgers' image={Image2}/>
      <InfoCardRight title='Become the Best Food Truck' image={Image3}/>
    </div>
  )
}
