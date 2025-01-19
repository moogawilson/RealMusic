import React from "react";
import YoutubePlayer from "./youtubePlayer";
import PlayerControls from "./PlayerControls";

const YouTubePlayerContainer: React.FC = () => {
  return (
    <div>
      <YoutubePlayer />
      <PlayerControls />
    </div>
  );
};

export default YouTubePlayerContainer;
