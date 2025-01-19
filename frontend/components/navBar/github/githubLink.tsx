"use client";
import styles from "./githubLink.module.css";
import Image from "next/image";
import Link from "next/link";
export const GithubLink = () => {
  return (
    <div>
      <Link href="https://github.com" className={styles.githubContainer}>
        <h1 className={styles.githubWriting}>Free. Open. Real.</h1>
        <Image
          className={styles.githubImage}
          src="/github.png"
          alt="github repo"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};
