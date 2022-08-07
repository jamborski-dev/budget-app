export const ContentHeader = () => {
  return (
    <header className="content-header">
      <div className="content-header__meta">Transactions</div>
      <nav className="account-tabs">
        <ul className="account-tabs__list">
          <li className="account-tabs__list-item" style={{ backgroundColor: "rgb(190, 80, 80)" }}>
            <div className="account-tab__name">Rob</div>
            <div className="account-tab__bank">Monzo</div>
            <div className="account-tab__current">£874.23</div>
          </li>
          <li className="account-tabs__list-item" style={{ backgroundColor: "rgb(190, 132, 80)" }}>
            <div className="account-tab__name">Zuza</div>
            <div className="account-tab__bank">Monzo</div>
            <div className="account-tab__current">£314.52</div>
          </li>
          <li className="account-tabs__list-item" style={{ backgroundColor: "rgb(80, 190, 190)" }}>
            <div className="account-tab__name">Joint</div>
            <div className="account-tab__bank">Monzo</div>
            <div className="account-tab__current">£1274.12</div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
