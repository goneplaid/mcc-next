/*
  Warnings:

  - Added the required column `seasonId` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seasonId` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Challenge` ADD COLUMN `seasonId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Contestant` MODIFY `status` ENUM('ACTIVE', 'ELIMINATED', 'RUNNER_UP', 'WINNER') NOT NULL DEFAULT 'ELIMINATED';

-- AlterTable
ALTER TABLE `Participant` ADD COLUMN `seasonId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Challenge` ADD CONSTRAINT `Challenge_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
