/*
  Warnings:

  - You are about to drop the column `transactionRepeatPeriodId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `TransactionRepeatPeriod` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_transactionRepeatPeriodId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "transactionRepeatPeriodId",
DROP COLUMN "type";

-- DropTable
DROP TABLE "TransactionRepeatPeriod";

-- DropEnum
DROP TYPE "TransactionType";

-- CreateTable
CREATE TABLE "RepeatPeriod" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "RepeatPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandingOrder" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "accountId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "day" INTEGER NOT NULL,
    "repeatPeriodId" INTEGER NOT NULL,

    CONSTRAINT "StandingOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RepeatPeriod_label_key" ON "RepeatPeriod"("label");

-- AddForeignKey
ALTER TABLE "StandingOrder" ADD CONSTRAINT "StandingOrder_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandingOrder" ADD CONSTRAINT "StandingOrder_repeatPeriodId_fkey" FOREIGN KEY ("repeatPeriodId") REFERENCES "RepeatPeriod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
