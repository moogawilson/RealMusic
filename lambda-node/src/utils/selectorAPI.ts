import axios from "axios";

import dotenv from "dotenv";
dotenv.config();

const SELECTOR_URL = process.env.SELECTOR_URL;
export type SongMode = "discovery" | "normal";

export const getSongSelections = async (
  songMode: SongMode | any, //todo add validator
  user?: string
) => {
  try {
    if (!SELECTOR_URL) {
      console.log("selector url not set");
      return;
    }
    const response = await axios.get(SELECTOR_URL, {
      params: {
        ...(user && { user }),
      },
    });
    console.log("the response is" + response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
