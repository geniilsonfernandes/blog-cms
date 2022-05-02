import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.empty}>404 | not found</div>
    </div>
  );
}
