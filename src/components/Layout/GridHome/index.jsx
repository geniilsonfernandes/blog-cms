import React from "react";
import { About } from "../../About";
import { PostCardBig } from "../../PostCardBig";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export const GridHome = ({ posts }) => {
  return (
    <Container wrapper="main" className={styles.main}>
      <div className={styles.bio}>
        <About />
      </div>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostCardBig key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
};
