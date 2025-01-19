-- CreateTable
CREATE TABLE "User" (
    "ratingID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "songID" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ratingID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userID_key" ON "User"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "User_songID_key" ON "User"("songID");

-- CreateIndex
CREATE UNIQUE INDEX "User_rating_key" ON "User"("rating");
