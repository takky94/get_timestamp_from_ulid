import dayjs from "dayjs";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { decodeTime } from "ulid";
import styles from "../styles/pages/index.module.scss";

const Index: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [timestamp, setTimestamp] = useState<number>(NaN);
  const [lang, setLang] = useState<"en" | "ja">("en");

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

  const handleClick = (lang: "en" | "ja") => {
    setLang(lang);
  };

  return (
    <div className={styles.wrap}>
      <Head>
        <title>ULID Timestamp</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {lang === "en"
            ? "Get The Timestamp From A Given ULID"
            : "ULIDからタイムスタンプを取得するや〜つ"}
        </h1>
        <span className={styles.boxTop}></span>
        <span className={styles.boxBottom}></span>
        <div className={styles.main}>
          <input
            onChange={handleChange}
            placeholder={lang === "en" ? "Paste Here" : "ULIDをここに貼り付け"}
            className={styles.input}
            type="text"
          />
          <div className={styles.timestamp}>
            {input.length > 0 && (
              <>
                {isNaN(timestamp) && (
                  <span className={styles.fadeInUp}>
                    {lang === "en" ? "Error" : "過ち"}
                  </span>
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
        <div className={styles.buttons}>
          <button
            onClick={() => handleClick("en")}
            className={styles.us}
          ></button>
          <button
            onClick={() => handleClick("ja")}
            className={styles.ja}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Index;
