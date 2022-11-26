import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <h1 className="free_press">Free Press!</h1>
      <form className={styles.form}>
        <label for="fname">Website You Want To Access: </label>
        <input
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
