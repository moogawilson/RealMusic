"use client";
import styles from "./youtubePlayer.module.css";
import { usePlayer } from "@/context/PlayerContext";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

const YoutubePlayer: React.FC = () => {
  const { playerReady, playerRef } = usePlayer();

  return (
    <div>
      {playerReady ? <div></div> : <div>Loading</div>}
      <div ref={playerRef} id="player"></div>
      <div className={styles.youtubeWindow} ref={playerRef} id="player"></div>
    </div>
  );
};

export default YoutubePlayer;
