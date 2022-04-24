import React from "react";
import { UserDisplay } from "../UserDisplay";
import styles from "./styles.module.scss";

export const PostCardBig = ({ imageURL, featured }) => {
  return (
    <div className={styles.wrapper__post}>
      {featured && <div className={styles.post__photo}></div>}

      <div className={styles.post__details}>
        <span className={styles.tag}>CODE, GAMING</span>
        <h2 className={styles.title}>
          From its medieval origins to the digital era, learn everything there
          is to know
        </h2>
        <div className={styles.metadata}>
          <UserDisplay user="Genilson fernandes" />
          <div className={styles.date}>
            <span>May, 17, 2022</span>
          </div>
        </div>
        <p className={styles.excerpet}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut...
        </p>
        <button className={styles.button}> Read More </button>
      </div>
    </div>
  );
};
