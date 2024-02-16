/*
  Warnings:

  - Added the required column `episodeId` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Participant` ADD COLUMN `episodeId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_episodeId_fkey` FOREIGN KEY (`episodeId`) REFERENCES `Episode`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
