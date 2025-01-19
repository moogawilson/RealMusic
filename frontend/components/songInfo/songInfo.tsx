"use client";
import { usePlayer } from "@/context/PlayerContext";
import styles from "./songInfo.module.css";

const SongInfo: React.FC = () => {
  const { currentSong } = usePlayer();

  return (
    <div>
      <h1 className={styles.songName}>{currentSong?.title}</h1>
      <h1 className={styles.artistName}> by {currentSong?.artistName}</h1>
      <h1>released {currentSong?.published}</h1>
    </div>
  );
};

export default SongInfo;
