import React from "react";
import styles from "./styles.module.scss";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { LinkeindIcon } from "../Icons/LinkeindIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";

export const Share = () => {
  return (
    <div className={styles.share}>
      Share:
      <span className={styles.share__icons}>
        <button>
          <TwitterIcon />
        </button>
        <button>
          <FacebookIcon />
        </button>
        <button>
          <LinkeindIcon />
        </button>
      </span>
    </div>
  );
};
