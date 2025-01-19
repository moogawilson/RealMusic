import { Handler } from "aws-lambda";
import { searchYouTube } from "../utils/google";
import { writeSongs } from "../../prisma/src/songs";

import { createArtist } from "../../prisma/src/artists";

export const handler_function: Handler = async () => {
  const getNewSongs = async (provider: string) => {
    const newSongs = await searchYouTube("Provided to YouTube by " + provider);

    if (!newSongs) {
      console.log("No new songs found.");
      return;
    }

    //new artists are put in seperately, to avoid duplicates
    //race condition occurs if the songs
    const artists = newSongs.map((item) => ({
      artistId: item.artistId,
      channelTitle: item.channelTitle,
    }));

    const uniqueArtists = Array.from(
      new Map(artists.map((artist) => [artist.artistId, artist])).values()
    );

    await Promise.all(
      uniqueArtists.map(async (artist: any) => {
        await createArtist(artist.artistId, artist.channelTitle);
      })
    );

    await Promise.all(
      newSongs.map(async (item: any) => {
        if (typeof item.id === "string") {
          await writeSongs(item.id, item.title, item.published, item.artistId);
        }
      })
    );
  };

  const getAllProviders = async () => {
    const providers = ["CDbaby"];
    await Promise.all(providers.map((provider) => getNewSongs(provider)));
  };

  await getAllProviders();
  console.log("Finished fetching and cataloguing new songs");
};
