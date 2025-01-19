/*
  Warnings:

  - The primary key for the `Song` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_songSongID_fkey";

-- AlterTable
ALTER TABLE "Rating" ALTER COLUMN "songSongID" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Song" DROP CONSTRAINT "Song_pkey",
ALTER COLUMN "songID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Song_pkey" PRIMARY KEY ("songID");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_songSongID_fkey" FOREIGN KEY ("songSongID") REFERENCES "Song"("songID") ON DELETE RESTRICT ON UPDATE CASCADE;
