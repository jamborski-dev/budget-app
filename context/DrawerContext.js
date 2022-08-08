import { useState, createContext } from "react"

export const DrawerContext = createContext({})

export const DrawerContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("expense")

  const selectTab = tab => setSelectedTab(tab)

  const context = {
    state: {
      isOpen,
      selectedTab
    },
    actions: {
      setOpen,
      selectTab
    }
  }

  return <DrawerContext.Provider value={context}>{children}</DrawerContext.Provider>
}
