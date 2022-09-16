import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export const Layout = ({ layout, children }) => {
  if (layout === "MINIMAL") {
    return <main className="main">{children}</main>
  }

  return (
    <main className="main grid-root">
      <Sidebar />
      <Header />
      <div className="grid-block block__content">{children}</div>
    </main>
  )
}
