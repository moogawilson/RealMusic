/*
  Warnings:

  - You are about to drop the column `songID` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `songSongID` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userToken` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Rating_songID_key";

-- DropIndex
DROP INDEX "Rating_userID_key";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "songID",
DROP COLUMN "userID",
ADD COLUMN     "songSongID" INTEGER NOT NULL,
ADD COLUMN     "userToken" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "token" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "Song" (
    "songID" INTEGER NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("songID")
);

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userToken_fkey" FOREIGN KEY ("userToken") REFERENCES "User"("token") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_songSongID_fkey" FOREIGN KEY ("songSongID") REFERENCES "Song"("songID") ON DELETE RESTRICT ON UPDATE CASCADE;
