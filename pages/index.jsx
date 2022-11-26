import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  return (
    <>
      <div className={styles.fixedHeader}>
        <div className={styles.containerTwo}>
          <nav>
            <a href="#" className={styles.nav1}>
              {" "}
              Github{" "}
            </a>
            <a href="#" className={styles.nav2}>
              {" "}
              Donate{" "}
            </a>
            <a href="#" className={styles.nav3}>
              Have a Suggestion?
            </a>
          </nav>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.freePress}>Free Press!</h1>
        <form>
          <label label for="fname" className={styles.form}>
            <h2>Website You Want To Access:</h2>
          </label>
          <input
            className={styles.input}
            type="text"
            onChange={(event) => {
              setUrl(event.target.value);
            }}
            value={value}
          />
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </>
  );
}
