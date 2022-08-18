-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "transactionRepeatPeriodId" INTEGER;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_transactionRepeatPeriodId_fkey" FOREIGN KEY ("transactionRepeatPeriodId") REFERENCES "TransactionRepeatPeriod"("id") ON DELETE SET NULL ON UPDATE CASCADE;
