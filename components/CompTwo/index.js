import React from 'react'
import styles from './CompTwo.module.css'
import ReactPlayer from 'react-player'

export default function CompTwo() {
  return (
    <div className={styles.container}>
      <h1>Promotional Video</h1>\
      <ReactPlayer className={styles.video} url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}/>
    </div>
  )
}
