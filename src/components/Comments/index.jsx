import React from "react";
import { Comment } from "./Comment";
import styles from "./styles.module.scss";

export const Comments = () => {
  return (
    <div className={styles.wrapper}>
      <h2>3 Comments</h2>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
