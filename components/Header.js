import { useDrawerContext } from "../hooks/useDrawerContext"

export const Header = () => {
  const {
    actions: { setOpen }
  } = useDrawerContext()

  return (
    <div className="grid-block block__header">
      <div className="app-logo">
        <h2>MyApp</h2>
      </div>
      <nav className="global-nav">
        <div className="breadcrumb">Forecast</div>
        <ul className="nav-list nav-list--secondary">
          <li className="nav-list-item" onClick={() => setOpen(true)}>
            <button className="btn -over-dark">Open Drawer</button>
          </li>
        </ul>
        <ul className="nav-list nav-list--primary">
          <li className="nav-list-item -active">Menu Item 1</li>
          <li className="nav-list-item">Menu Item 2</li>
          <li className="nav-list-item">Menu Item 3</li>
          <li className="nav-list-item">Menu Item 4</li>
        </ul>
      </nav>
    </div>
  )
}
