import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Content } from "../components/Content"

const Home = () => {
  return (
    <main className="main grid-root">
      <Sidebar />
      <Header />
      <Content />
    </main>
  )
}

export default Home
