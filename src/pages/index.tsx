import dayjs from "dayjs";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { decodeTime } from "ulid";
import styles from "../styles/pages/index.module.scss";

const Index: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [timestamp, setTimestamp] = useState<number>(NaN);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);

    try {
      const timestamp = decodeTime(value);
      setTimestamp(timestamp);
    } catch (e) {
      setTimestamp(NaN);
    }
  };

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
          <input
            onChange={handleChange}
            placeholder="Paste Here"
            className={styles.input}
            type="text"
          />
          <div className={styles.timestamp}>
            {input.length > 0 && (
              <>
                {isNaN(timestamp) && (
                  <span className={styles.fadeInUp}>Error</span>
                )}
                {!isNaN(timestamp) && (
                  <div className={styles.fadeInUp}>
                    <span>UNIX: {timestamp} </span>
                    <span>
                      DATE: {dayjs(timestamp).format("YYYY-MM-DDTHH:mm:ssZ[Z]")}
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
