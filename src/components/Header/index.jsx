import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../Icons/Logo";
import { Container } from "../Layout/Container";
import styles from "./styles.module.scss";
export const Header = () => {
  const [checked, setChecked] = useState();
  // const { toggleTheme } = useThemeContext();

  const handleChange = () => {};

  return (
    <div className={styles.header}>
      <Container className={styles.wrapper}>
        <div className={styles.logo} onClick={() => handleChange()}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};
