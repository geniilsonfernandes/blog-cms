import React from "react";
import { Comment } from "./Comment";
import { Form } from "./Form";
import styles from "./styles.module.scss";

export const Comments = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.head}>3 Comments</h2>
      <Comment />
      <Comment />
      <Form />
    </div>
  );
};
