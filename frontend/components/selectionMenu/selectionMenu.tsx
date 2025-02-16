"use client";
import { fetchLikedSongs } from "@/utils/backendAPI";
import Link from "next/link";

import styles from "./selectionMenu.module.css";

export const SelectionMenu: React.FC = () => {
  return (
    <div className={styles.selectionMenu}>
      <Link href="/" className={styles.text}>
        Home
      </Link>
      <Link href="top-songs" className={styles.text}>
        Top Songs
      </Link>
      <Link href="/" className={styles.text}>
        Top Artists
      </Link>
      <Link href="/latest-songs" className={styles.text}>
        Latest
      </Link>
      <Link href="/liked-songs" className={styles.text}>
        Liked Songs
      </Link>
    </div>
  );
};
