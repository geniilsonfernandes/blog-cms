import React from "react";
import { DateIcon } from "../Icons/DateIcon";
import moment from "moment";
import styles from "./styles.module.scss";
import Link from "next/link";

export const PostCardSmall = ({ post }) => {
  const { title, createdAt, slug } = post;
  return (
    <div className={styles.wrapper}>
      <Link href={`/post/${post.slug}`} passHref>
        <h2 className={styles.title}>{title}</h2>
      </Link>

      <div className={styles.date}>
        <DateIcon /> <span>{moment(post.createdAt).format("ll")}</span>
      </div>
    </div>
  );
};
