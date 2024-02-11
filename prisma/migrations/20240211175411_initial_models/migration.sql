-- CreateTable
CREATE TABLE `Season` (
    `id` VARCHAR(191) NOT NULL,
    `seasonNumber` INTEGER NOT NULL,
    `name` VARCHAR(9) NOT NULL,
    `year` INTEGER NOT NULL,

    UNIQUE INDEX `Season_seasonNumber_key`(`seasonNumber`),
    UNIQUE INDEX `Season_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Episode` (
    `id` VARCHAR(191) NOT NULL,
    `episodeNumber` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `airDate` DATETIME(3) NOT NULL,
    `notes` TEXT NOT NULL,
    `seasonId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Episode_episodeNumber_key`(`episodeNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Judge` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `Judge_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContestantProfile` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `age` INTEGER NOT NULL DEFAULT 1,
    `hometown` VARCHAR(255) NOT NULL,
    `occupation` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `ContestantProfile_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contestant` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('WINNER', 'RUNNER_UP', 'ELIMINATED', 'ACTIVE') NOT NULL DEFAULT 'ELIMINATED',
    `place` INTEGER NOT NULL DEFAULT 0,
    `finishDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `profileId` VARCHAR(191) NOT NULL,
    `seasonId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EpisodeToJudge` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EpisodeToJudge_AB_unique`(`A`, `B`),
    INDEX `_EpisodeToJudge_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_JudgeToSeason` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_JudgeToSeason_AB_unique`(`A`, `B`),
    INDEX `_JudgeToSeason_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ContestantToEpisode` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ContestantToEpisode_AB_unique`(`A`, `B`),
    INDEX `_ContestantToEpisode_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Episode` ADD CONSTRAINT `Episode_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contestant` ADD CONSTRAINT `Contestant_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `ContestantProfile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contestant` ADD CONSTRAINT `Contestant_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EpisodeToJudge` ADD CONSTRAINT `_EpisodeToJudge_A_fkey` FOREIGN KEY (`A`) REFERENCES `Episode`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EpisodeToJudge` ADD CONSTRAINT `_EpisodeToJudge_B_fkey` FOREIGN KEY (`B`) REFERENCES `Judge`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JudgeToSeason` ADD CONSTRAINT `_JudgeToSeason_A_fkey` FOREIGN KEY (`A`) REFERENCES `Judge`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JudgeToSeason` ADD CONSTRAINT `_JudgeToSeason_B_fkey` FOREIGN KEY (`B`) REFERENCES `Season`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ContestantToEpisode` ADD CONSTRAINT `_ContestantToEpisode_A_fkey` FOREIGN KEY (`A`) REFERENCES `Contestant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ContestantToEpisode` ADD CONSTRAINT `_ContestantToEpisode_B_fkey` FOREIGN KEY (`B`) REFERENCES `Episode`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
