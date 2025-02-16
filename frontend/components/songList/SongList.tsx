"use client";
import { fetchLikedSongs } from "@/utils/backendAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Song } from "@/utils/backendAPI";
import styles from "./songList.module.css";

type songsProps = {
  songs: Song[] | undefined;
};

const SongList: React.FC<songsProps> = ({ songs }) => {
  return (
    <div className={styles.list}>
      {songs ? (
        songs.map((song) => (
          <div className={styles.listItem}>
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
            <h1 className={styles.songName} key={song.id}>
              {song.title}
            </h1>
            {/* <h3 className={styles.songName}>{song.artistName}</h3> */}
            {/* </div> */}
          </div>
        ))
      ) : (
        <h1>none</h1>
      )}
    </div>
  );
};

export default SongList;
