import React from "react";
import styles from "./styles.module.scss";

export const Categories = ({ categories }) => {
  return (
    <ul className={styles.tag}>
      {categories.map((tag) => (
        <li key={tag.title}>{tag.title}</li>
      ))}
    </ul>
  );
};
