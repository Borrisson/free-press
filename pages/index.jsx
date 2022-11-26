import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
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
              setValue(event.target.value);
            }}
            value={value}
          />
          <button className={styles.input}>Submit</button>
        </form>
      </div>
    </>
  );
}
