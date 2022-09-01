import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export const Layout = ({ children }) => {
  return (
    <main className="main grid-root">
      <Sidebar />
      <Header />
      <div className="grid-block block__content">{children}</div>
    </main>
  )
}
