import React from "react";
import { DateIcon } from "../../components/Icons/DateIcon";
import { Container } from "../../components/Layout/Container";
import { Share } from "../../components/Share";
import { UserDisplay } from "../../components/UserDisplay";
import styles from "./styles.module.scss";
const mock = {
  excerpt: `Orci varius natoque penatibus et magnis dis parturient montes,
  nascetur ridiculus mus. Etiam placerat tortor commodo lectus
  laoreet venenatis. Donec ultricies, metus vitae bibendum
  consequat, tortor neque euismod lectus`,
  title: "Remote Work is the Future, but Should You Go Remote?",
  date: "May 17, 2022.",
  author: "Genilson fernandes",
};

const Post = () => {
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
            <h1 className={styles.title}>{mock.title}</h1>
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
          <p>
            In lacinia sapien a libero accumsan facilisis. Donec vitae lorem
            massa. Aliquam tristique vehicula enim ut luctus. Vivamus gravida
            dignissim ligula, dictum laoreet elit malesuada ac. Praesent est
            justo, posuere a nisl porta, pharetra posuere lectus. Nulla velit
            odio, tincidunt vel metus a, viverra placerat ligula.
          </p>
          <p>
            Donec id nisl et risus volutpat tempor a eget mauris. Nullam velit
            eros, porttitor et urna sit amet, ullamcorper vestibulum magna.
            Quisque consequat arcu eros, lobortis faucibus purus facilisis
            vitae. Nulla at nunc non purus vehicula elementum.
          </p>
        </main>
      </Container>
    </>
  );
};

export default Post;
