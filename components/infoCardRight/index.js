import React from 'react'
import styles from './infoCardRight.module.css'
import Image from 'next/image'

export default function InfoCardRight({
    title='',
    image=''
}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <Image className={styles.img} src={image} width={450} height={410}/>
    </div>
  )
}
