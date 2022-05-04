/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";
import { DateIcon } from "../../components/Icons/DateIcon";
import { Container } from "../../components/Layout/Container";
import { UserDisplay } from "../../components/UserDisplay";
import { PostCardSmall } from "../../components/PostCardSmall";
import { useRouter } from "next/router";
import { getPost, getPosts, getSimilarPosts } from "../../services";
import parse from "html-react-parser";
import moment from "moment";
import { Seo } from "../../components/Seo";

export default function Post({ post, similarPosts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Seo title={post.title} />
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
              <UserDisplay
                user={post.authors[0].name}
                photoUrl={post.authors[0].photo.url}
              />
            </div>
          </div>
        </div>
        <main className={styles.main}>
          {parse(post.content.html)}

          <div className={styles.posts}>
            <h2>Similar posts</h2>
            <div className={styles.grid}>
              {similarPosts.map((post) => (
                <PostCardSmall key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const raw = await getPost(params.id);

  let similarPosts = [];

  if (raw.categories.length > 0) {
    similarPosts = await getSimilarPosts(raw.categories[0].slug);
  }

  return {
    props: { post: raw, similarPosts: similarPosts || [] },
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
    fallback: true,
  };
};
