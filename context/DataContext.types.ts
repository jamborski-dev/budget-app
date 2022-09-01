import type { TAccount, TCategory } from "../types/app.types"

// TODO: update any types to resamble Prisma schema

export type TContextProps = {
  children?: React.ReactNode
}

export interface IDataContext {
  state: TDataContextState
  actions: TDataContextActions
}

export interface TDataContextState {
  isLoading: boolean
  accounts: Array<any>
  transactions: Array<any>
  categories: TCategory[]
  standingOrders: Array<any>
  selectedAccount: TAccount
}

export interface TDataContextActions {
  selectAccount: (_id: number) => void
  fetchTransactions: () => void
  fetchAccounts: () => void
  fetchStandingOrders: () => void
  fetchCategories: () => void
}
