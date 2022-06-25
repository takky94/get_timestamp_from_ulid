import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/pages/index.module.scss"

const Index: NextPage = () => {
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
          <input className={styles.input} type="text" />
          <div className={styles.timestamp}>うんこ</div>
        </div>
      </div>
    </div>
  )
}

export default Index
