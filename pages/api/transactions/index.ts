// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma"
import { TransactionDirection, TransactionStatus } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const transactions = await prisma.transaction.findMany({
      include: { account: true, category: true }
    })
    res.status(200).json(transactions)
  }

  if (req.method === "POST") {
    const {
      title,
      tx_account_id,
      tx_amount,
      tx_category_id,
      tx_account_current_balance,
      tx_direction
    } = JSON.parse(req.body)

    const balanceAfter =
      tx_direction === "INCOMING"
        ? parseFloat(tx_account_current_balance) + parseFloat(tx_amount)
        : parseFloat(tx_account_current_balance) - parseFloat(tx_amount)
    try {
      const tx = await prisma.transaction.create({
        data: {
          title: title,
          accountId: parseInt(tx_account_id),
          amount: parseFloat(tx_amount),
          balanceBefore: parseFloat(tx_account_current_balance),
          balanceAfter: balanceAfter,
          categoryId: parseInt(tx_category_id),

          // TODO: use enums to provide below data
          direction: TransactionDirection[tx_direction],
          status: TransactionStatus.PAID
        }
      })

      const account = await prisma.account.update({
        where: { id: tx_account_id },
        data: { currentBalance: balanceAfter }
      })

      // TODO: create a toast component for in-app notifications
      res.status(200).json({ message: "Transaction created successfully.", tx: tx })
    } catch (e) {
      // TODO: use best practices for error handling
      console.info("Catch error")
      console.error(e.code)
      throw e
    }
  }
}
