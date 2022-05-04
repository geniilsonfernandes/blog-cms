import React from "react";
import { UserDisplay } from "../UserDisplay";
import styles from "./styles.module.scss";
import { DateIcon } from "../Icons/DateIcon";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Categories } from "../Categories";

export const PostCardBig = ({ post }) => {
  return (
    <div className={styles.wrapper__post}>
      {post.cover && (
        <div className={styles.post__cover}>
          <Image
            src={post.postCover.url}
            alt={post.slug}
            width={1000}
            height={300}
            layout="raw"
          />
        </div>
      )}

      <div className={styles.post__details}>
        {post.categories.length > 0 && (
          <Categories categories={post.categories} />
        )}
        <Link href={`/post/${post.slug}`} passHref>
          <h2 className={styles.title}>{post.title}</h2>
        </Link>
        <div className={styles.metadata}>
          <UserDisplay
            user={post.authors[0].name}
            photoUrl={post.authors[0].photo.url}
          />
          <div className={styles.date}>
            <DateIcon />
            <span>{moment(post.createdAt).format("ll")}</span>
          </div>
        </div>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
    </div>
  );
};
