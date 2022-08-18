import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()
  const ACCOUNTS_DATA = [
    {
      id: 0,
      account_holder: "Rob",
      bank: "Monzo",
      currency_code: "GBP",
      currency_symbol: "£",
      current_amount: "23.80",
      account_color: "rgb(155, 35, 75)"
    },
    {
      id: 1,
      account_holder: "Rob",
      bank: "Alior",
      currency_code: "PLN",
      currency_symbol: "zł",
      current_amount: "242.11",
      account_color: "rgb(109, 80, 190)"
    },
    {
      id: 2,
      account_holder: "Joint",
      bank: "Monzo",
      currency_code: "GBP",
      currency_symbol: "£",
      current_amount: "420.52",
      account_color: "rgb(80, 190, 190)"
    },
    {
      id: 3,
      account_holder: "Zuza",
      bank: "Monzo",
      currency_code: "GBP",
      currency_symbol: "£",
      current_amount: "140.42",
      account_color: "rgb(190, 132, 80)"
    },
    {
      id: 4,
      account_holder: "Zuza",
      bank: "Santander",
      currency_code: "GBP",
      currency_symbol: "£",
      current_amount: "204.78",
      account_color: "rgb(190, 80, 80)"
    }
  ]

  if (req.method === "GET") {
    const accounts = await prisma.account.findMany({ include: { accountHolders: true } })
    res.status(200).json(accounts)
  }
}
