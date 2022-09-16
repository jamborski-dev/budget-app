// import "../styles/globals.css"
import { DataContextProvider } from "../context/DataContext"
import { DrawerContextProvider } from "../context/DrawerContext"
import "../styles/globals.css"
import "../styles/index.scss"

import { Layout } from "../components/Layout"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const minimalLayoutPages = ["LoginPage", "RegisterPage"]
  const [layout, setLayout] = useState("DEFAULT")

  useEffect(() => {
    if (minimalLayoutPages.includes(Component.name)) {
      setLayout("MINIMAL")
    } else {
      setLayout("DEFAULT")
    }
  }, [Component])

  return (
    <DataContextProvider>
      <DrawerContextProvider>
        <Layout layout={layout}>
          <Component {...pageProps} />
        </Layout>
      </DrawerContextProvider>
    </DataContextProvider>
  )
}

export default MyApp
