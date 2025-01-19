import { youtube_v3 } from "@googleapis/youtube";
import dotenv from "dotenv";
dotenv.config();

const googleKey = process.env.KEY;
const youtube = new youtube_v3.Youtube({
  auth: googleKey,
});

export const searchYouTube = async (query: string) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const modifiedDate = currentDate.toISOString();

  try {
    const response = await youtube.search.list({
      part: ["snippet"],
      q: query,
      publishedAfter: modifiedDate,
      maxResults: 50,
    });

    const newSongs = response.data.items?.map((item) => ({
      id: item.id?.videoId,
      title: item.snippet?.title,
      channelTitle: item.snippet?.channelTitle,
      published: item.snippet?.publishedAt,
      image: item.snippet?.thumbnails?.high?.url,
      artistId: item.snippet?.channelId,
    }));
    return newSongs;
  } catch (e) {
    console.log(e);
    return null;
  }
};
