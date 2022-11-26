import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (html) {
      const domParser = new DOMParser();
      const htmlDocument = domParser.parseFromString(html, "text/html");
      const article = htmlDocument.querySelector("article");
      document.getElementById("html").innerHTML = `${article}`;
    }
  }, [html]);

  return (
    <div className={styles.container}>
      <h1 className={styles.freePress}>Free Press!</h1>
      <form className={styles.form}>
        <label for="fname">Website You Want To Access: </label>
        <input
          type="text"
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          value={url}
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            const { data } = await axios.post("/api/article", { url });
            setHtml(data);
          }}
        >
          Submit
        </button>
      </form>
      {html && <div id="html" />}
    </div>
  );
}
