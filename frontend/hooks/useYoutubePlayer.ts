import { useRef, useEffect, useState } from "react";
import { Song } from "@/utils/backendAPI";

export const useYouTubePlayer = (
  song: Song | undefined,
  onSongFinish: () => void
) => {
  const [player, setPlayer] = useState<any>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.append(tag);
      window.onYouTubeIframeAPIReady = () => createPlayer();
    } else {
      createPlayer();
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(updateProgress, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const createPlayer = () => {
    const newPlayer = new window.YT.Player(playerRef.current, {
      height: "500",
      width: "500",
      videoId: song?.id,
      playerVars: { controls: 0 },

      events: {
        onStateChange: handleStateChange,
        onReady: handlePlayerReady,
      },
    });
    setPlayer(newPlayer);
  };
  const handlePlayerReady = (event: any) => {
    setPlayerReady(true);
  };

  useEffect(() => {
    if (player && playerReady) {
      if (song != undefined) {
        setIsFinished(false);
        player.loadVideoById(song.id);
      }
    }
  }, [song]);

  const updateProgress = () => {
    if (player) {
      const currentTime = player.getCurrentTime();
      const duration = player.getDuration();
      setCurrentTime(currentTime);
      setDuration(duration);

      setProgress((currentTime / duration) * 100);
    }
  };

  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  //   number[] is required to stop error from propgress bar thing
  const handleProgressChange = (newTime: number | number[]) => {
    if (player && !Array.isArray(newTime)) {
      player.seekTo(newTime);
      setCurrentTime(newTime);
    }
  };

  const handleStateChange = (event: any) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setIsFinished(true);
    }
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return {
    playerRef,
    playerReady,
    isPlaying,
    togglePlay,
    handleProgressChange,
    currentTime,
    duration,
    isFinished,
  };
};
