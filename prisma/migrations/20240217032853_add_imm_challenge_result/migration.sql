-- AlterTable
ALTER TABLE `Participant` MODIFY `result` ENUM('WIN', 'HIGH', 'IN', 'LOW', 'ELIM', 'IMM') NOT NULL;
