import React from "react";
import { About } from "../../About";
import { PostCardBig } from "../../PostCardBig";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export const GridHome = ({ posts }) => {
  console.log(posts);
  return (
    <Container wrapper="main" className={styles.main}>
      <div className={styles.sidebar}>
        <About />
      </div>
      <div className={styles.posts}>
        {!posts && <span className={styles.alert}>No have post</span>}
        {posts &&
          posts.map((post) => <PostCardBig key={post.slug} post={post} />)}
      </div>
    </Container>
  );
};
