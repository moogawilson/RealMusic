"use client";
import { useEffect, useState } from "react";
import { Song } from "@/utils/backendAPI";
import styles from "./page.module.css";
import { fetchLatestSongs } from "@/utils/backendAPI";

import SongList from "@/components/songList/SongList";
export default function Page() {
  const [latestSongs, setLatestSongs] = useState<Song[]>();
  useEffect(() => {
    async function getLatestSongs() {
      const latestSongs = await fetchLatestSongs();
      setLatestSongs(latestSongs);
    }

    getLatestSongs();
  }, []);

  return (
    <div>
      <SongList songs={latestSongs} />
    </div>
  );
}
