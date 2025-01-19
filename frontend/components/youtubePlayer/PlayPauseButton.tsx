import React from "react";
import Image from "next/image";

import styles from "./PlayPauseButton.module.css";

interface SkipButtonProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const PlayButton: React.FC<SkipButtonProps> = ({ isPlaying, togglePlay }) => {
  return (
    <button className={styles.button} onClick={() => togglePlay()}>
      <Image
        className={styles.buttonImage}
        src={isPlaying ? "/pause-button.png" : "/play-button.png"}
        alt="play"
        width={24}
        height={24}
        unoptimized={true}
      ></Image>
    </button>
  );
};

export default PlayButton;
