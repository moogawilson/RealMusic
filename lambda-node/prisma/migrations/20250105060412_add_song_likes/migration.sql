-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "numberofLikes" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "_UserLikeSong" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserLikeSong_AB_unique" ON "_UserLikeSong"("A", "B");

-- CreateIndex
CREATE INDEX "_UserLikeSong_B_index" ON "_UserLikeSong"("B");

-- AddForeignKey
ALTER TABLE "_UserLikeSong" ADD CONSTRAINT "_UserLikeSong_A_fkey" FOREIGN KEY ("A") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikeSong" ADD CONSTRAINT "_UserLikeSong_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
