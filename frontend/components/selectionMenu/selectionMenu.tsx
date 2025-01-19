"use client";

import styles from "./selectionMenu.module.css";

export const SelectionMenu: React.FC = () => {
  return (
    <div className={styles.selectionMenu}>
      <h1 className={styles.text}>Home</h1>
      <h1 className={styles.text}>Top Songs</h1>
      <h1 className={styles.text}>Top Artists</h1>
      <h1 className={styles.text}>Latest</h1>
      <h1 className={styles.text}>Liked Songs</h1>
    </div>
  );
};
