"use client";
import styles from "./background.module.css";
import { usePlayer } from "@/context/PlayerContext";
import Image from "next/image";

const Background: React.FC = () => {
  const { currentSong } = usePlayer();
  return (
    <div>
      <Image
        src={`https://img.youtube.com/vi/${currentSong?.id}/maxresdefault.jpg`}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className={styles.backgroundImage}
      />
    </div>
  );
};

export default Background;
