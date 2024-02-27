-- AlterTable
ALTER TABLE `Participant` MODIFY `result` ENUM('NP', 'WIN', 'HIGH', 'IN', 'LOW', 'ELIM', 'IMM', 'WINNER', 'RUNNER_UP') NOT NULL;
