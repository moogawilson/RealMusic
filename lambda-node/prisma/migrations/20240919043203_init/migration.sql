/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Rating" (
    "ratingID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "songID" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("ratingID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userID_key" ON "Rating"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_songID_key" ON "Rating"("songID");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_rating_key" ON "Rating"("rating");
