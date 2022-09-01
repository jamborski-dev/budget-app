import Image from "next/image"

const Home = () => {
  return (
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <br /> Quo tenetur, placeat expedita odio eligendi eaque nemo in debitis totam omnis quis
          beatae accusantium alias itaque repellat modi velit molestiae fuga.
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
  )
}

export default Home
