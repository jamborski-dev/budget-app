import { DataContext } from "../context/DataContext"
import { useContext } from "react"

export const useDataContext = () => useContext(DataContext)
