-- CreateEnum
CREATE TYPE "CurrencySymbolPosition" AS ENUM ('PREFIX', 'SUFFIX');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('SINGLE', 'REPEAT');

-- CreateEnum
CREATE TYPE "TransactionDirection" AS ENUM ('INCOMING', 'OUTGOING');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PAID', 'NOT_PAID');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionRepeatPeriod" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "TransactionRepeatPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "bankName" TEXT NOT NULL,
    "currentBalance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "currencyCode" TEXT NOT NULL DEFAULT 'GBP',
    "currencySymbol" TEXT NOT NULL DEFAULT '£',
    "currencySymbolPosition" "CurrencySymbolPosition" NOT NULL DEFAULT 'PREFIX',
    "color" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "accountId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "balanceBefore" DOUBLE PRECISION NOT NULL,
    "balanceAfter" DOUBLE PRECISION NOT NULL,
    "type" "TransactionType" NOT NULL,
    "direction" "TransactionDirection" NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "status" "TransactionStatus" NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AccountToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TransactionRepeatPeriod_label_key" ON "TransactionRepeatPeriod"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Category_label_key" ON "Category"("label");

-- CreateIndex
CREATE UNIQUE INDEX "_AccountToUser_AB_unique" ON "_AccountToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountToUser_B_index" ON "_AccountToUser"("B");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToUser" ADD CONSTRAINT "_AccountToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToUser" ADD CONSTRAINT "_AccountToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
