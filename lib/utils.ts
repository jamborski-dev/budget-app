import { SetStateAction, Dispatch } from "react"
import type { TUser, TAccount } from "../types/app.types"

export const fetchApi = async (
  route: string,
  setData: SetStateAction<Dispatch<any>>,
  setError: SetStateAction<Dispatch<any>>
) => {
  fetch(route)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
    .catch(err => setError(err))
}

// renderAccountHolderNames: (_accountHolders: Object[]) => string[]
export const renderAccountHolderNames = (_accountHolders: TUser[]) =>
  _accountHolders.map(
    (holder, index) => `${holder.displayName}${index < _accountHolders.length - 1 ? " | " : ""}`
  )

export const getAccount = (_id: number, accounts: TAccount[]): TAccount =>
  accounts.find(item => item.id === _id)

export const sumTxArr = (txArr, key, initialValue = 0) =>
  txArr.reduce((acc, current) => acc + current[key], initialValue)

// TODO: format cash value
