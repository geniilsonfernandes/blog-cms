import React from "react";
import styles from "./styles.module.scss";
import { UserDisplay } from "../UserDisplay";

export const About = ({ author }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Hi, this is my blog</h1>
      <p className={styles.about}>{author.bio}</p>
      <div className={styles.author}>
        <UserDisplay user={author.name} photoUrl={author.photo.url} />
      </div>
    </div>
  );
};
