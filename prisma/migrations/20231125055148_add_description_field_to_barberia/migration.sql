/*
  Warnings:

  - Added the required column `description` to the `Barberia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barberia" ADD COLUMN     "description" TEXT NOT NULL;
