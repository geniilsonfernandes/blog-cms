import React from "react";
import styles from "./styles.module.scss";

export const Comment = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.user}>Hans Down</h4>
      <span className={styles.date}>09 APR 2018</span>
      <p className={styles.comment}>
        Praesent ut fringilla ligula. Vivamus et lacus nec risus malesuada
        vestibulum. Phasellus lobortis viverra lobortis. Donec iaculis, erat eu
        bibendum faucibus.
      </p>
    </div>
  );
};
