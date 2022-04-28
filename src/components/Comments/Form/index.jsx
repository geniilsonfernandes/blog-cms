import React from "react";
import { Input } from "./Input";
import styles from "./styles.module.scss";

export const Form = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.head}>Post a Comment</h2>
      <form action="">
        <Input
          id="name"
          label="Name"
          placeholder="Name, Username"
          type="text"
        />
        <Input id="email" label="Email" placeholder="Email" type="email" />
        <Input
          id="Comment"
          label="Comment"
          placeholder="Your comment"
          type="textarea"
        />
        <span className={styles.check}>
          <input type="checkbox" name="check" id="checkemail" />
          <label htmlFor="checkemail">Save email for next coment</label>
        </span>
        <div className={styles.btn}>
          <button className={styles.submit}>Submit</button>
        </div>
      </form>
    </div>
  );
};
