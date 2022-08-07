import { useState, createContext } from "react"

export const DrawerContext = createContext({})

export const DrawerContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const context = {
    state: {
      isOpen
    },
    actions: {
      setOpen
    }
  }

  return <DrawerContext.Provider value={context}>{children}</DrawerContext.Provider>
}
