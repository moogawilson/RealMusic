"use client";
import { fetchLikedSongs } from "@/utils/backendAPI";
import styles from "./selectionMenu.module.css";

const getLikedSongs = async () => {
  const likedSongs = await fetchLikedSongs();
  console.log(likedSongs);
};

export const SelectionMenu: React.FC = () => {
  return (
    <div className={styles.selectionMenu}>
      <button className={styles.text}>Home</button>
      <button className={styles.text}>Top Songs</button>
      <button className={styles.text}>Top Artists</button>
      <button className={styles.text}>Latest</button>
      <button className={styles.text} onClick={getLikedSongs}>
        Liked Songs
      </button>
    </div>
  );
};
