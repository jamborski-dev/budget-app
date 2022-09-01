// import "../styles/globals.css"
import { DataContextProvider } from "../context/DataContext"
import { DrawerContextProvider } from "../context/DrawerContext"
import "../styles/globals.css"
import "../styles/index.scss"

import { Layout } from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <DrawerContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DrawerContextProvider>
    </DataContextProvider>
  )
}

export default MyApp
