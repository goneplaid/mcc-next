/*
  Warnings:

  - The values [TOP_3,BOTTOM_3] on the enum `Participant_result` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Participant` MODIFY `result` ENUM('NON_PARTICIPANT', 'WIN', 'HIGH', 'PASS', 'LOSS', 'LOW', 'ELIMINATED', 'IMMUNITY', 'WINNER', 'RUNNER_UP') NOT NULL;
