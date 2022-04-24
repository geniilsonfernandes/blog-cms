import React from "react";
import { About } from "../../About";
import { PostCardBig } from "../../PostCardBig";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export const GridHome = () => {
  return (
    <Container wrapper="main" className={styles.main}>
      <div className={styles.bio}>
        <About />
      </div>
      <div className={styles.posts}>
        <PostCardBig featured={false} />
        <PostCardBig featured={false} />
        <PostCardBig featured={false} />
      </div>
    </Container>
  );
};
