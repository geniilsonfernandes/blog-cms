import React from "react";
import styles from "./styles.module.scss";
import { Share } from "../Share/Index";
import { UserDisplay } from "../UserDisplay";

export const About = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>HI, THIS IS MY BLOOG</h1>
      <p className={styles.about}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut...
      </p>
      <div className={styles.author}>
        <UserDisplay user="Genilson Fernandes" />
      </div>
      <div className={styles.share}>
        <Share />
      </div>
    </div>
  );
};
