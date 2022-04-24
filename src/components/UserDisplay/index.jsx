import React from "react";
import styles from "./styles.module.scss";

export const UserDisplay = ({ user }) => {
  return (
    <div className={styles.user}>
      <span className={styles.photo}></span> <span>{user}</span>
    </div>
  );
};
