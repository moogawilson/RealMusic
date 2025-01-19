"use client";
import { useEffect, useState } from "react";
import { Song } from "@/utils/backendAPI";
import { fetchSongList } from "@/utils/backendAPI";

interface SongQueueHook {
  currentSong: Song | undefined;
  songQueue: Song[];
  currentSongPosition: number;
  changeSongMode: (mode: songMode) => void;
  changeSong: (positionChange: number) => void;
  onSongFinish: () => void;
}

export type songMode = "discovery" | "normal";

function formatSongs(songs: Song[]): Song[] {
  const formatDate = (date: string): string => {
    const publishedTime = new Date(date);
    const now = new Date();
    const diffInMs = now.getTime() - publishedTime.getTime();

    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  };

  return songs.map((song) => ({
    ...song,
    artistName: song.artistName.replace(/- Topic$/i, "").trim(),
    published: formatDate(song.published),
  }));
}

export const useSongQueue = (): SongQueueHook => {
  const [songQueue, setSongQueue] = useState<Song[]>([]);
  const [currentSongPosition, setCurrentSongPosition] = useState(0);
  const [currentSong, setCurrentSong] = useState<Song>();

  const [songMode, setSongMode] = useState<songMode>("normal");

  useEffect(() => {
    if (songQueue.length == 0) {
      fetchSongs(songMode);
    }
  }, []);

  const fetchSongs = async (newMode: songMode) => {
    const songObjects = await fetchSongList("1", newMode);
    const formattedSongs = formatSongs(songObjects);

    setSongQueue(formattedSongs);
    setCurrentSong(formattedSongs[currentSongPosition]);
  };

  const changeSongMode = (newMode: songMode) => {
    console.log(newMode);
    setSongMode(newMode);
    fetchSongs(newMode);
  };

  const changeSong = (positionChange: number) => {
    setCurrentSongPosition((prevPosition) => {
      const newPosition = prevPosition + positionChange;
      if (newPosition < 0 || newPosition >= songQueue.length) {
        console.warn("Position out of bounds:", newPosition);
        return prevPosition;
      }
      setCurrentSong(songQueue[newPosition]);
      return newPosition;
    });
  };

  const onSongFinish = () => {
    changeSong(1);
  };

  return {
    currentSong,
    songQueue,
    currentSongPosition,
    changeSongMode,
    changeSong,
    onSongFinish,
  };
};
