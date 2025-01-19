"use client";
import React, { useEffect } from "react";
import styles from "./PlayerControls.module.css";

import PlayButton from "./PlayPauseButton";
import SkipButton from "./SkipButton";
import PlayerProgress from "./PlayerProgress";
import { usePlayer } from "@/context/PlayerContext";

const PlayerControls: React.FC = () => {
  const {
    changeSong,
    isPlaying,
    togglePlay,
    currentTime,
    handleProgressChange,
    duration,
    currentSong,
    isFinished,
  } = usePlayer();

  useEffect(() => {
    if (isFinished == true) {
      changeSong(1);
    }
  }, [isFinished]);

  return (
    <div className={styles.controls}>
      <div className={styles.buttons}>
        <SkipButton skipAmount={"skip-back"} changeSong={changeSong} />
        <PlayButton isPlaying={isPlaying} togglePlay={togglePlay} />
        <SkipButton skipAmount={"skip-foward"} changeSong={changeSong} />
      </div>
      <div className={styles.progressBar}>
        <PlayerProgress
          currentTime={currentTime}
          handleProgressChange={handleProgressChange}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
