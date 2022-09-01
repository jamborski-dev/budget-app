import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const standingOrders = await prisma.standingOrder.findMany({
      include: {
        account: true,
        repeatValue: true
      }
    })
    res.status(200).json(standingOrders)
  }
}
