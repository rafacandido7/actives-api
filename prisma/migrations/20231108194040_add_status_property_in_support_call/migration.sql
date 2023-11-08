/*
  Warnings:

  - Added the required column `status` to the `support_calls` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SupportCallStatus" AS ENUM ('PENDING', 'ONGOIND', 'FINISHED');

-- AlterTable
ALTER TABLE "support_calls" ADD COLUMN     "status" "SupportCallStatus" NOT NULL;
