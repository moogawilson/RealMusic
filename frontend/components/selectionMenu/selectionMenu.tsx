"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./selectionMenu.module.css";

export const SelectionMenu: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.selectionMenu}>
      {["Home", "Top Songs", "Top Artists", "Latest", "Liked Songs"].map(
        (text, index) => (
          <Link
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          >
            {text}
          </Link>
        )
      )}

      {modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <p>🚧 Coming Soon! 🚧</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
