import React from "react";
import styles from "./image.module.css";
import { useState } from "react";

function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        src=""
        onLoad={handleLoad}
        className={styles.img}
        alt=""
        {...props}
      />
    </div>
  );
}

export default Image;
