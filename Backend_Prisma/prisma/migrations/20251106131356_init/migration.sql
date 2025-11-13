-- CreateTable
CREATE TABLE `Ave` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `especie` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `fecha_ingreso` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RevisionVeterinaria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aveId` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `peso` DOUBLE NOT NULL,
    `observaciones` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RevisionVeterinaria` ADD CONSTRAINT `RevisionVeterinaria_aveId_fkey` FOREIGN KEY (`aveId`) REFERENCES `Ave`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
