import React from "react";
import { About } from "../../About";
import { PostCardBig } from "../../PostCardBig";
import { PostCardSmall } from "../../PostCardSmall";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export const GridHome = () => {
  return (
    <Container wrapper="main" className={styles.main}>
      <div className={styles.bio}>
        <About />
      </div>
      <div className={styles.posts}>
        <PostCardSmall />
        <PostCardBig featured={false} />
        <PostCardBig featured={false} />
        <PostCardBig featured={false} />
      </div>
    </Container>
  );
};
