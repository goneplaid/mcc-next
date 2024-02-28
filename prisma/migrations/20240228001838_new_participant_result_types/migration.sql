/*
  Warnings:

  - The values [NP,HIGH,IN,LOW,ELIM,IMM] on the enum `Participant_result` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Participant` MODIFY `result` ENUM('NON_PARTICIPANT', 'WIN', 'TOP_3', 'PASS', 'LOSS', 'BOTTOM_3', 'ELIMINATED', 'IMMUNITY', 'WINNER', 'RUNNER_UP') NOT NULL;
