import styles from './CompOne.module.css'
import Image from 'next/image'
import Spud from '@/public/Logo/Spud_Gradient.png'
import Background from '@/public/Backgrounds/bkg1.png'
import Vampire from '@/public/Characters/Vampire.svg'
import Skeleton from '@/public/Characters/Skeleton Kid.svg'
import Link from 'next/link'

export default function CompOne() {
  return (
    <div className={styles.container} style={{
      backgroundImage: `url(${Background.src})`,
      backgroundRepeat: 'no-repeat'
    }}>
      <h1>G<span><Image src={Spud} width={70} height={100}/></span>remet Cuisines</h1>
      <h3>Monstrously good eats for every tast bud!</h3>
      <div className={styles.charsCont}>
        <Image src={Vampire} width={190} height={280}/>
        <Link className={styles.btn} href={'http://bjvqaptcfr.us18.qoddiapp.com/'}>Play Now!</Link>
        <Image src={Skeleton} width={125} height={280}/>
      </div>
    </div>
  )
}
