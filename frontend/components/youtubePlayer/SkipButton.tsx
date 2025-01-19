import React from "react";
import Image from "next/image";
import styles from "./PlayPauseButton.module.css";
interface SkipButtonProps {
  skipAmount: "skip-foward" | "skip-back";
  changeSong: (number: number) => void;
}

const SkipButton: React.FC<SkipButtonProps> = ({ skipAmount, changeSong }) => {
  if (skipAmount === "skip-foward") {
  }
  return (
    <button
      className={styles.button}
      onClick={() => changeSong(skipAmount === "skip-foward" ? 1 : -1)}
    >
      <Image
        className={styles.buttonImage}
        src={`/${skipAmount}-button.png`}
        alt="skip foward"
        width={24}
        height={24}
        unoptimized={true}
      ></Image>
    </button>
  );
};

export default SkipButton;
