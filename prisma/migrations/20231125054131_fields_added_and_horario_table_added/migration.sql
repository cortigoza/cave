/*
  Warnings:

  - You are about to drop the column `barberiacol` on the `Barberia` table. All the data in the column will be lost.
  - You are about to drop the column `babrberiId` on the `Cita` table. All the data in the column will be lost.
  - You are about to drop the column `babrberiId` on the `Encuesta` table. All the data in the column will be lost.
  - You are about to drop the column `babrberiId` on the `Servicio` table. All the data in the column will be lost.
  - Added the required column `about` to the `Barberia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner` to the `Barberia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mosaico1` to the `Barberia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mosaico2` to the `Barberia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mosaico3` to the `Barberia` table without a default value. This is not possible if the table is not empty.
  - Made the column `usuarioId` on table `Barberia` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Barberia" DROP CONSTRAINT "Barberia_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Cita" DROP CONSTRAINT "Cita_babrberiId_fkey";

-- DropForeignKey
ALTER TABLE "Encuesta" DROP CONSTRAINT "Encuesta_babrberiId_fkey";

-- DropForeignKey
ALTER TABLE "Servicio" DROP CONSTRAINT "Servicio_babrberiId_fkey";

-- AlterTable
ALTER TABLE "Barberia" DROP COLUMN "barberiacol",
ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "banner" TEXT NOT NULL,
ADD COLUMN     "mosaico1" TEXT NOT NULL,
ADD COLUMN     "mosaico2" TEXT NOT NULL,
ADD COLUMN     "mosaico3" TEXT NOT NULL,
ALTER COLUMN "usuarioId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Cita" DROP COLUMN "babrberiId",
ADD COLUMN     "barberiaId" INTEGER;

-- AlterTable
ALTER TABLE "Encuesta" DROP COLUMN "babrberiId",
ADD COLUMN     "barberiaId" INTEGER;

-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "babrberiId",
ADD COLUMN     "barberiaId" INTEGER;

-- CreateTable
CREATE TABLE "Horario" (
    "id" SERIAL NOT NULL,
    "barberiaId" INTEGER NOT NULL,
    "day" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Barberia" ADD CONSTRAINT "Barberia_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encuesta" ADD CONSTRAINT "Encuesta_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "Barberia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "Barberia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "Barberia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_barberiaId_fkey" FOREIGN KEY ("barberiaId") REFERENCES "Barberia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
