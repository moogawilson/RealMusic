"use client";
import { FastAverageColor } from "fast-average-color";

export async function getDominantColour(url: string) {
  const fac = new FastAverageColor();

  try {
    const proxyUrl = `/api/getImageProxy?imageUrl=${encodeURIComponent(url)}`;
    const color = await fac.getColorAsync(proxyUrl);

    return color.rgb;
  } catch (error) {
    console.error(error);
    return "rgb(0, 0, 0)";
  }
}
