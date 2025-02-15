"use client";
import { fetchLikedSongs } from "@/utils/backendAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Song } from "@/utils/backendAPI";
import styles from "./page.module.css";

export default function Page() {
  const [likedSongs, setLikedSongs] = useState<Song[]>();
  useEffect(() => {
    async function getLikedSongs() {
      const likedSongs = await fetchLikedSongs();
      setLikedSongs(likedSongs);
    }

    getLikedSongs();
  }, []);

  return (
    <div className={styles.list}>
      {likedSongs ? (
        likedSongs.map((song) => (
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
}
