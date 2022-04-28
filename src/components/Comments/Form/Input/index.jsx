import React from "react";
import styles from "./styles.module.scss";

export const Input = ({ id, placeholder, type, label }) => {
  const HtmlTag = type === "textarea" ? "textarea" : "input"
  return (
    <span className={styles.wrapper__input}>
      <label htmlFor={id}>{label}</label>
      <HtmlTag type={type} id={id} name={label} placeholder={placeholder} />
    </span>
  );
};
