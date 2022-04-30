import React, { useState } from "react";
import { Logo } from "../Icons/Logo";
import styles from "./styles.module.scss";
export const Header = () => {
  const [checked, setChecked] = useState();
  // const { toggleTheme } = useThemeContext();

  const handleChange = () => {};

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => handleChange()}>
        <Logo />
      </div>
      <div className={styles.theme}>
        <label htmlFor="theme">
          Mindnight:
          <span className={styles.toggle_bg} data-toggle={checked}></span>
        </label>
        <input type="checkbox" name="theme" id="theme" checked={checked} />
      </div>
    </div>
  );
};
