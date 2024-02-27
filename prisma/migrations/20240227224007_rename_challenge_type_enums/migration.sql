/*
  Warnings:

  - The values [A,ST,MB,ET,TC,PT,I,SF,F,OSC] on the enum `Challenge_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Challenge` MODIFY `type` ENUM('AUDITION', 'SKILL_TEST', 'MYSTERY_BOX', 'ELIMINATION_TEST', 'TEAM_CHALLENGE', 'PRESSURE_TEST', 'INDIVIDUAL_TEST', 'SEMI_FINAL', 'FINALE') NOT NULL;
