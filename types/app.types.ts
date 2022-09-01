export type TCategory = {
  id: number
  label: string
  color: string
  transaction?: Object[]
}

export type TUser = {
  id: number
  name: string
  email: string
}

export type TAccount = {
  id: number
  bankName: string
  account_holder: string
  currentBalance: number
  transactions: Object[]
  accountHolders: TUser[]
  currencyCode: string
  currencySymbol: string
  currencySymbolPosition: string
  color: string
}
