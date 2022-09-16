import Image from "next/image"

const Home = () => {
  return (
    <div className="content">
      <div className="content-full-page">
        <div className="notice">
          <h2 className="heading">Hello Rob, how are you doing today?</h2>

          <Image
            src="/assets/svg/undraw_relaxation_re_ohkx.svg"
            className="svg-illustration"
            width="300"
            height="300"
          />

          <p className="text">
            This is your budget dashboard. You can view latest transactions, income, next scheduled
            payments, trends and balances of your accounts.
          </p>

          <div className="btn-group -center">
            <button className="btn" type="button">
              Forecast
            </button>
            <button className="btn" type="button">
              Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
