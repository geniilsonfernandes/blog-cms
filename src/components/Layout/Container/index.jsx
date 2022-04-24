import React from "react";
import styles from "./index.module.scss";

export const Container = ({ className, wrapper, children }) => {
  const HmtlTag = wrapper || "div";
  return (
    <HmtlTag className={`${styles.container} ${className || ""}`}>
      {children}
    </HmtlTag>
  );
};
