import React from 'react'
import styles from './infoCardLeft.module.css'
import Image from 'next/image'

export default function InfoCardLeft({
    title= '',
    image=''
}) {
  return (
    <div className={styles.container}>
        <Image className={styles.img} src={image} width={450} height={410}/>
        <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
