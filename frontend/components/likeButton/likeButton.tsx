"use client";
import { usePlayer } from "@/context/PlayerContext";
import { likeSong } from "@/utils/backendAPI";
import Image from "next/image";
import styles from "./likeButton.module.css";

const LikeButton: React.FC = () => {
  const { currentSong } = usePlayer();

  const submitRating = () => {
    if (currentSong != undefined) {
      likeSong(currentSong.id);
    }
  };

  return (
    <div className={styles.likeContainer}>
      <button className={styles.likeText} type="button" onClick={submitRating}>
        like!
        <Image
          className={styles.likeImage}
          src={"/like.png"}
          alt="like button"
          width={50}
          height={50}
        ></Image>
      </button>
    </div>
  );
};

export default LikeButton;
