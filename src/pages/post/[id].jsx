/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";
import { Comments } from "../../components/Comments";
import { DateIcon } from "../../components/Icons/DateIcon";
import { Container } from "../../components/Layout/Container";
import { UserDisplay } from "../../components/UserDisplay";
import { PostCardSmall } from "../../components/PostCardSmall";
import { useRouter } from "next/router";
import { getPost, getPosts } from "../../services";
import parse from "html-react-parser";
import moment from "moment";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {post.cover && (
        <div className={styles.photo}>
          <img src={post.postCover.url} alt={post.slug} />
        </div>
      )}
      <Container>
        <div className={styles.wrapper}>
          <span className={styles.date}>
            <span className={styles.icon}>
              <DateIcon />
            </span>
            Published on:
            <span>{moment(post.createdAt).format("ll")}</span>
          </span>
          <div className={styles.details}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.author}>
              <UserDisplay user={post.authors[0].name} />
            </div>
          </div>
        </div>
        <main className={styles.main}>
          {parse(post.content.html)}

          <div className={styles.posts}>
            <h2>Similar posts</h2>
            <div className={styles.grid}>
              <PostCardSmall />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const raw = await getPost(params.id);

  return {
    props: { post: raw },
  };
};

export const getStaticPaths = async () => {
  const raw = await getPosts();

  const paths = raw.map((post) => {
    return {
      params: { id: String(post.slug) },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
