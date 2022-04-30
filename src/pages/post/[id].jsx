import React from "react";
import { Comments } from "../../components/Comments";
import { DateIcon } from "../../components/Icons/DateIcon";
import { Container } from "../../components/Layout/Container";
import { Share } from "../../components/Share";
import { UserDisplay } from "../../components/UserDisplay";
import { PostCardSmall } from "../../components/PostCardSmall";
import styles from "./styles.module.scss";
import { string } from "prop-types";
import { Router, useRouter } from "next/router";

const mock = {
  excerpt: `Orci varius natoque penatibus et magnis dis parturient montes,
  nascetur ridiculus mus. Etiam placerat tortor commodo lectus
  laoreet venenatis. Donec ultricies, metus vitae bibendum
  consequat, tortor neque euismod lectus`,
  title: "Remote Work is the Future, but Should You Go Remote?",
  date: "May 17, 2022.",
  author: "Genilson fernandes",
};

export default function Post({ params, post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className={styles.photo}></div>
      <Container>
        <div className={styles.wrapper}>
          <span className={styles.date}>
            <span className={styles.icon}>
              <DateIcon />
            </span>
            Published on: <span>{mock.date}</span>
          </span>
          <div className={styles.details}>
            <h1 className={styles.title}>
              {post[0].title} {params.id}
            </h1>
            <p className={styles.excerpt}>{mock.excerpt}</p>
            <div className={styles.author}>
              <UserDisplay user={mock.author} />
              <Share />
            </div>
          </div>
        </div>
        <main className={styles.main}>
          <p>
            Quisque at odio semper, elementum leo sed, congue tellus. Proin nunc
            mauris, porttitor ut eleifend ut, consectetur ut dolor. In hac
            habitasse platea dictumst. Pellentesque ornare nulla ut quam blandit
            scelerisque. Suspendisse non orci id elit tempor rhoncus ac id nunc.
            Integer scelerisque at turpis sit amet faucibus. Etiam non euismod
            urna. Suspendisse vel ex justo. Vivamus posuere porttitor ante eu
            hendrerit.
          </p>

          <Comments />

          <div className={styles.posts}>
            <h2>Similar posts</h2>
            <div className={styles.grid}>
              <PostCardSmall title={mock.title} date={mock.date} />
              <PostCardSmall title={mock.title} date={mock.date} />
              <PostCardSmall title={mock.title} date={mock.date} />
              <PostCardSmall title={mock.title} date={mock.date} />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const raw = await fetch(`http://localhost:3333/posts?id=${params.id}`);
  const json = await raw.json();
  return {
    props: { post: json, params: params }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async () => {
  const raw = await fetch(`http://localhost:3333/posts`);
  const json = await raw.json();
  const paths = json.map((post) => {
    return {
      params: { id: String(post.id) },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
