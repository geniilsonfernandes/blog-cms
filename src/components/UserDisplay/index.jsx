/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

export const UserDisplay = ({ user, photoUrl }) => {
  return (
    <div className={styles.user}>
      <span className={styles.photo}>
        <img src={photoUrl} alt={user} />
      </span>
      <span>{user}</span>
    </div>
  );
};
