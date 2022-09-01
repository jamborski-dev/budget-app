/*
  Warnings:

  - You are about to drop the column `repeatPeriodId` on the `StandingOrder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[value]` on the table `RepeatPeriod` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `value` to the `RepeatPeriod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repeatPeriodValue` to the `StandingOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StandingOrder" DROP CONSTRAINT "StandingOrder_repeatPeriodId_fkey";

-- AlterTable
ALTER TABLE "RepeatPeriod" ADD COLUMN     "value" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "StandingOrder" DROP COLUMN "repeatPeriodId",
ADD COLUMN     "repeatPeriodValue" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RepeatPeriod_value_key" ON "RepeatPeriod"("value");

-- AddForeignKey
ALTER TABLE "StandingOrder" ADD CONSTRAINT "StandingOrder_repeatPeriodValue_fkey" FOREIGN KEY ("repeatPeriodValue") REFERENCES "RepeatPeriod"("value") ON DELETE RESTRICT ON UPDATE CASCADE;
