"use client";

import axios from "axios";
import createApiClient from "./apiClient";

export interface Song {
  id: string;
  title: string;
  artistName: string;
  artistChannel: string;
  likes: number;
  listens: number;
  published: string;
  image: string;
}

export async function rateSong(user: string, songID: string, rating: string) {
  try {
    const { client, session } = await createApiClient();
    await client.put("rate", {
      user,
      songID,
      rating,
    });
  } catch (error) {
    console.error("Error rating song:", error);
  }
}

export async function fetchSongList(
  userToken: string,
  songMode: string
): Promise<Song[]> {
  try {
    const { client, session } = await createApiClient();
    const email = session?.user.email;

    const response = await client.get("songlist", {
      params: { songMode, ...(email && { email }) },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching song list:", error);
    return [];
  }
}

export async function fetchLikedSongs(): Promise<Song[]> {
  try {
    const { client, session } = await createApiClient();
    const email = session?.user.email;

    const response = await client.get("liked-songs", {
      params: { ...(email && { email }) },
    });
    console.log("jkhfd", response.data.likedSongs.likedSongs);
    return response.data.likedSongs.likedSongs;
  } catch (error) {
    console.error("Error fetching song list:", error);
    return [];
  }
}

export async function likeSong(songID: string): Promise<Song[]> {
  try {
    const { client, session } = await createApiClient();
    const email = session?.user.email;

    const response = await client.post(`song/${songID}/like`, { email });

    return response.data;
  } catch (error) {
    console.error("Error fetching song list:", error);
    return [];
  }
}
