/*
  Warnings:

  - Added the required column `episodeEliminatedId` to the `Contestant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Contestant` ADD COLUMN `episodeEliminatedId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Contestant` ADD CONSTRAINT `Contestant_episodeEliminatedId_fkey` FOREIGN KEY (`episodeEliminatedId`) REFERENCES `Episode`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
