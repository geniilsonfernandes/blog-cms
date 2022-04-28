import React from "react";
import { DateIcon } from "../Icons/DateIcon";
import styles from "./styles.module.scss";
export const PostCardSmall = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        From its medieval origins to the digital era, learn everything there is
        to know
      </h2>
      <div className={styles.date}>
        <DateIcon /> <span> May, 17, 2022</span>
      </div>
    </div>
  );
};
