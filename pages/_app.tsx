// import "../styles/globals.css"
import { DataContextProvider } from "../context/DataContext"
import { DrawerContextProvider } from "../context/DrawerContext"
import "../styles/globals.css"
import "../styles/index.scss"

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <DrawerContextProvider>
        <Component {...pageProps} />
      </DrawerContextProvider>
    </DataContextProvider>
  )
}

export default MyApp
