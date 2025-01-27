"use client";
import React, { useEffect, useState } from "react";
import styles from "./SongQueue.module.css";
import { usePlayer } from "@/context/PlayerContext";
import Image from "next/image";
import { useMemo } from "react";
import { getDominantColour } from "@/utils/getDominantColour";

const SongQueue: React.FC = () => {
  const { currentSong, songQueue, currentSongPosition } = usePlayer();
  const [colour, setColour] = useState<string>("rgb(0,0,0)");

  useEffect(() => {
    const getNewColour = async (songID: string) => {
      const newColour = await getDominantColour(
        `https://img.youtube.com/vi/${songID}/default.jpg`
      );
      setColour(newColour);
    };

    if (currentSong?.id) {
      getNewColour(currentSong.id);
    }
  });

  const displayedQueue = useMemo(() => {
    return songQueue.slice(currentSongPosition + 1, currentSongPosition + 30);
  }, [songQueue, currentSongPosition]);

  return (
    <div className={styles.songQueue}>
      <div className={styles.nowPlaying}>Now Playing:</div>
      <div className={styles.currentSong} style={{ backgroundColor: colour }}>
        <div className={styles.thumbnailContainer}>
          <Image
            src={`https://img.youtube.com/vi/${currentSong?.id}/default.jpg`}
            alt="..."
            className={styles.thumbnailImage}
            width={50}
            height={50}
            unoptimized
          />
        </div>
        <h3 className={styles.songName}>{currentSong?.title}</h3>
        <h1 className={styles.artistName}>{currentSong?.artistName}</h1>
        <h1 className={styles.publishedDate}>{currentSong?.published}</h1>
      </div>
      <h1 className={styles.nextUp}>Next Up...</h1>

      {displayedQueue && (
        <div className={styles.queueList}>
          {displayedQueue?.map((song, index) => (
            <div
              key={song.id || `${song.id}-${index}`}
              className={styles.queueItem}
            >
              <div className={styles.thumbnailContainer}>
                <Image
                  src={`https://img.youtube.com/vi/${song.id}/default.jpg`}
                  alt="..."
                  className={styles.thumbnailImage}
                  width={50}
                  height={50}
                  unoptimized
                />
              </div>
              <h3 className={styles.songName}>{song?.artistName}</h3>
              <h1 className={styles.artistName}>{song?.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongQueue;
