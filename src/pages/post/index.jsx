import React from "react";
import { About } from "../../components/About";
import { Container } from "../../components/Layout/Container";
import { PostCardBig } from "../../components/PostCardBig";

const Post = () => {
  return (
    <Container>
      <main>
        <About />
        <PostCardBig featured={false} />
      </main>
    </Container>
  );
};

export default Post;
