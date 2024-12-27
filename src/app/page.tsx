'use client'

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { VRScene } from "../components/VRScene";

export default function Home() {
  const [scrollEnded, setScrollEnded] = useState(false);

  useEffect(() => {
    if (scrollEnded) {
      console.log("Scroll ended!");
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [scrollEnded]);

  return (
    <>
      <VRScene setScrollEnded={setScrollEnded} scrollEnded={scrollEnded}/>
      {scrollEnded && (
        <div className={styles.content}>
          <h1>Scroll ended!</h1>
          <p>Scrolling has ended!</p>          
        </div>
      )}
    </>
  );
}
