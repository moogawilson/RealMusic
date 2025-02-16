"use client";
import { fetchLikedSongs } from "@/utils/backendAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Song } from "@/utils/backendAPI";
import styles from "./page.module.css";

import SongList from "@/components/songList/SongList";
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
    <div>
      <SongList songs={likedSongs} />
    </div>
  );
}
