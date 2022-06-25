import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from "../styles/pages/index.module.scss"

const Index: NextPage = () => {
  const [timestamp, setTimestamp] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimestamp(e.target.value)
  }

  return (
    <div className={styles.wrap}>
      <Head>
        <title>ULID Timestamp</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Get The Timestamp From A Given ULID</h1>
        <span className={styles.boxTop}></span>
        <span className={styles.boxBottom}></span>
        <div className={styles.main}>
          <input onChange={handleChange} className={styles.input} type="text" />
          <div className={`${styles.timestamp} ${timestamp.length ? styles.fadeInUp : ""}`}>{timestamp}</div>
        </div>
      </div>
    </div>
  )
}

export default Index
