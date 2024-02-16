/*
  Warnings:

  - Added the required column `result` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Participant` ADD COLUMN `result` ENUM('WIN', 'HIGH', 'IN', 'LOW', 'ELIM') NOT NULL;
