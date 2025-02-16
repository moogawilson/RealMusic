"use client";
import { fetchLikedSongs } from "@/utils/backendAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Song } from "@/utils/backendAPI";
import styles from "./page.module.css";
import { fetchTopSongs } from "@/utils/backendAPI";

import SongList from "@/components/songList/SongList";
export default function Page() {
  const [topSongs, setTopSongs] = useState<Song[]>();
  useEffect(() => {
    async function getTopSongs() {
      const topSongs = await fetchTopSongs();
      setTopSongs(topSongs);
    }

    getTopSongs();
  }, []);

  return (
    <div>
      <SongList songs={topSongs} />
    </div>
  );
}
