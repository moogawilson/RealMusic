"use client";
import React from "react";
import styles from "./PlayerProgress.module.css";
import { Slider } from "@nextui-org/slider";

interface PlayerProgressProps {
  currentTime: number;
  handleProgressChange: (newTime: number | number[]) => void;
  duration: number;
}

const PlayerProgress: React.FC<PlayerProgressProps> = ({
  currentTime,
  handleProgressChange,
  duration,
}) => {
  return (
    <div className={styles.sliderWrapper}>
      <Slider
        aria-label="Player progress"
        value={currentTime}
        onChange={handleProgressChange}
        maxValue={duration}
        size="sm"
        hideThumb={true}
        defaultValue={0}
      />
    </div>
  );
};

export default PlayerProgress;
