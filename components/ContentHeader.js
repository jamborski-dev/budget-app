import { useDrawerContext } from "../hooks/useDrawerContext"

export const ContentHeader = () => {
  const {
    actions: { setOpen }
  } = useDrawerContext()

  const date = new Date()
  const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

  return (
    <header className="content-header">
      <div className="content-header__meta">
        <div className="content-header__meta-info">
          <h3 className="content-header__meta--heading">Transactions</h3>
          <div className="content-header__meta--date">{today}</div>
        </div>
        <div className="content-header__meta-tools">
          <button className="btn" onClick={() => setOpen(true)}>
            Add Transactions
          </button>
        </div>
      </div>
      <nav className="account-tabs">
        <ul className="account-tabs__list">
          <li className="account-tabs__list-item" style={{ "--tab-color": "rgb(190, 80, 80)" }}>
            <div className="account-tab__name">Rob</div>
            <div className="account-tab__bank">Monzo</div>
            <div className="account-tab__current">£874.23</div>
          </li>
          <li className="account-tabs__list-item" style={{ "--tab-color": "rgb(190, 132, 80)" }}>
            <div className="account-tab__name">Zuza</div>
            <div className="account-tab__bank">Monzo</div>
            <div className="account-tab__current">£314.52</div>
          </li>
          <li
            className="account-tabs__list-item -active"
            style={{ "--tab-color": "rgb(80, 190, 190)" }}
          >
            <div className="account-tab__name">Joint</div>
            <div className="account-tab__bank">Monzo</div>
            <div className="account-tab__current">£1274.12</div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
