import React from 'react'
import styles from './CharSlider.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { characters } from '@/data/characters'
import Arrow from '@/public/Slider/SliderArr.svg'
import ArrowRight from '@/public/Slider/SliderArrRight.svg'

export default function CharSlider() {
    const [number, setNumber] = useState(0);
    const [data, setData] = useState(characters);

    return (
        <div className={styles.container}>
            <Image className={styles.background} src={data[number].background} width={965} height={540} />
            <Image className={styles.arrow} src={Arrow} width={50} height={50} onClick={() => {
                number == 0 ?
                setNumber(5) :
                setNumber((number-1)%6)
                }} />
            <div className={styles.charCont}>
                <div className={styles.textCont}>
                    <h1 className={styles.title}>{data[number].title}</h1>
                    <p className={styles.desc}>{data[number].description}</p>
                </div>
                <Image className={styles.character} src={data[number].char} width={210} height={410} />
            </div>
            <Image className={styles.arrow} src={ArrowRight} width={50} height={50} onClick={() => setNumber((number+1)%6)} />
        </div>
    )
}