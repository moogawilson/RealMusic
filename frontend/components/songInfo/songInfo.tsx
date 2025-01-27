"use client";
import { usePlayer } from "@/context/PlayerContext";
import styles from "./songInfo.module.css";
import { processText } from "@/utils/processText";

const SongInfo: React.FC = () => {
  let { currentSong } = usePlayer();

  if (currentSong?.artistName && currentSong?.title) {
    currentSong = {
      ...currentSong,
      title: processText(currentSong.title),
      artistName: processText(currentSong.artistName),
    };
  }

  return (
    <div>
      <h1 className={styles.songName}>{currentSong?.title}</h1>
      <h1 className={styles.artistName}> by {currentSong?.artistName}</h1>
      <h1>released {currentSong?.published}</h1>
    </div>
  );
};

export default SongInfo;
