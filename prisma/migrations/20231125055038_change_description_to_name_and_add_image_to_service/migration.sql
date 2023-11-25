/*
  Warnings:

  - You are about to drop the column `descripcion` on the `Servicio` table. All the data in the column will be lost.
  - Added the required column `image` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Servicio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "descripcion",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "nombre" TEXT NOT NULL;
