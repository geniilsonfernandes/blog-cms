import React from "react";
import { DateIcon } from "../Icons/DateIcon";
import styles from "./styles.module.scss";
export const PostCardSmall = ({ title, date }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.date}>
        <DateIcon /> <span> {date}</span>
      </div>
    </div>
  );
};
