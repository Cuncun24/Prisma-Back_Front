-- DropForeignKey
ALTER TABLE `revisionveterinaria` DROP FOREIGN KEY `RevisionVeterinaria_aveId_fkey`;

-- DropIndex
DROP INDEX `RevisionVeterinaria_aveId_fkey` ON `revisionveterinaria`;

-- AddForeignKey
ALTER TABLE `RevisionVeterinaria` ADD CONSTRAINT `RevisionVeterinaria_aveId_fkey` FOREIGN KEY (`aveId`) REFERENCES `Ave`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
