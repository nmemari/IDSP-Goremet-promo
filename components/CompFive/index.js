import React from 'react'
import styles from './CompFive.module.css'
import Background from '@/public/Backgrounds/bkg5.png'
import Card from '@/public/comp5/cards.png'
import Burger from '@/public/comp5/burger.png'
import Reroll from '@/public/comp5/reroll.png'
import Image from 'next/image'

export default function CompFive() {
  return (
    <div className={styles.bg__container} style={{
      backgroundImage: `url(${Background.src})`,
      backgroundRepeat: 'no-repeat'
    }}>
      <div className={styles.content__container}>
        <h3 className={styles.monstrous__text}>
          Use cool cards to make monstrous meals
        </h3>
        <Image src={Card}
          height={453}
          width={908}
          alt='deck of cards in a fan' />
        <Image src={Burger}
          height={206}
          width={199}
          alt='a monstrous burger'
        />
        <h3 className={styles.reroll__text}>
          Re-roll cards and get ready to show down
        </h3>
        <Image src={Reroll}
          width={705}
          height={500}
          alt='in-game screen capture of reroll'
        />
      </div>
    </div>
  )
}