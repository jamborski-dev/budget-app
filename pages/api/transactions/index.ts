// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path"
import { promises as fs } from "fs"
import { PrismaClient } from "@prisma/client"
import { TransactionDirection, TransactionStatus, TransactionType } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()

  if (req.method === "GET") {
    const transactions = await prisma.transaction.findMany({
      include: { account: true, category: true }
    })
    res.status(200).json(transactions)
  }

  if (req.method === "POST") {
    const { title, tx_account_id, tx_amount, tx_category_id, tx_account_current_balance } =
      JSON.parse(req.body)
    try {
      const tx = await prisma.transaction.create({
        data: {
          title: title,
          accountId: tx_account_id,
          amount: parseFloat(tx_amount),
          balanceBefore: parseFloat(tx_account_current_balance),
          balanceAfter: parseFloat(tx_account_current_balance) + parseFloat(tx_amount),
          categoryId: tx_category_id,
          direction: TransactionDirection.INCOMING,
          status: TransactionStatus.PAID,
          type: TransactionType.SINGLE
        }
      })

      // TODO: update current account balance

      res.status(200).json({ message: "Transaction created successfully.", tx: tx })
    } catch (e) {
      console.info("Catch error")
      console.error(e.code)
      throw e
    }
  }
}
