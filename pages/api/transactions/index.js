// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path"
import { promises as fs } from "fs"

export default async function handler(req, res) {
  const dataDir = path.join(process.cwd(), "data")
  const transactions = await fs.readFile(dataDir + "/mock-transactions.json")
  const json = JSON.parse(transactions)
  res.status(200).json(json)
}
