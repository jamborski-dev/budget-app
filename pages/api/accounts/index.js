export default function handler(req, res) {
  const ACCOUNTS_DATA = [
    { id: 0, account_holder: "Rob", bank: "Monzo", currency: "GBP", current_amount: "23.80" },
    { id: 1, account_holder: "Rob", bank: "Alior", currency: "PLN", current_amount: "242.11" },
    { id: 2, account_holder: "Joint", bank: "Monzo", currency: "GBP", current_amount: "420.52" },
    { id: 3, account_holder: "Zuza", bank: "Monzo", currency: "GBP", current_amount: "140.42" },
    { id: 4, account_holder: "Zuza", bank: "Santander", currency: "GBP", current_amount: "204.78" }
  ]

  res.status(200).json(ACCOUNTS_DATA)
}
