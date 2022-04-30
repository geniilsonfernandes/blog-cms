import React from "react";
import { UserDisplay } from "../UserDisplay";
import styles from "./styles.module.scss";
import { DateIcon } from "../Icons/DateIcon";
import Link from "next/link";
export const PostCardBig = ({
  imageURL,
  featured,
  tags,
  title,
  author,
  date,
  excerpt,
  id,
}) => {
  return (
    <div className={styles.wrapper__post}>
      {featured && <div className={styles.post__photo}></div>}

      <div className={styles.post__details}>
        <span className={styles.tag}>{tags}</span>
        <Link href={`post/${id}`} passHref>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <div className={styles.metadata}>
          <UserDisplay user={author} />
          <div className={styles.date}>
            <DateIcon /> <span>{date}</span>
          </div>
        </div>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={`post/${id}`} passHref>
          <button className={styles.button}> Read More </button>
        </Link>
      </div>
    </div>
  );
};
