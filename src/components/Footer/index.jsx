import React from "react";
import { Container } from "../Layout/Container";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.address}>
        <div className={styles.author}>
          Design/Front End by Gee -
          <a href="https://github.com/geniilsonfernandes"> Github</a> |
          Desvolvido com NextJs
        </div>
        <address className={styles.contact}>
          <ul>
            <li>
              <a href="mailto:geilsonfernandes">geniilsonfernandes@gmail.com</a>
            </li>
          </ul>
        </address>
      </Container>
    </footer>
  );
};
