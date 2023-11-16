/*
  Warnings:

  - The values [HEALTY] on the enum `Urgency` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userId` on the `support_calls` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Urgency_new" AS ENUM ('CRITICAL', 'WARNING', 'NORMAL');
ALTER TABLE "support_calls" ALTER COLUMN "urgency" TYPE "Urgency_new" USING ("urgency"::text::"Urgency_new");
ALTER TYPE "Urgency" RENAME TO "Urgency_old";
ALTER TYPE "Urgency_new" RENAME TO "Urgency";
DROP TYPE "Urgency_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "support_calls" DROP CONSTRAINT "support_calls_userId_fkey";

-- AlterTable
ALTER TABLE "support_calls" DROP COLUMN "userId";
