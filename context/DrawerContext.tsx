import { useState, createContext, SetStateAction, Dispatch } from "react"

export const DrawerContext = createContext<IDrawerContext>({
  state: {
    isOpen: false,
    selectedTab: "expense"
  },
  actions: {
    setOpen: () => {},
    selectTab: () => {}
  }
})

interface IDrawerContextState {
  isOpen: boolean
  selectedTab: string
}

interface IDrawerContextActions {
  setOpen: Dispatch<SetStateAction<boolean>>
  selectTab: (tab: string) => void
}

interface IDrawerContext {
  state: IDrawerContextState
  actions: IDrawerContextActions
}

export const DrawerContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("expense")

  const selectTab = (tab: string) => setSelectedTab(tab)

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
