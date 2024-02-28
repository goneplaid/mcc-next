-- DropForeignKey
ALTER TABLE `Contestant` DROP FOREIGN KEY `Contestant_episodeEliminatedId_fkey`;

-- AlterTable
ALTER TABLE `Contestant` MODIFY `episodeEliminatedId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Contestant` ADD CONSTRAINT `Contestant_episodeEliminatedId_fkey` FOREIGN KEY (`episodeEliminatedId`) REFERENCES `Episode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
