import Link from "next/link"
import { Input } from "../components/Input"

// TODO: auth!

const RegisterPage = () => {
  return (
    <div className="auth auth__page">
      <form className="form auth__form">
        <h2 className="form-heading">Register</h2>
        <fieldset>
          <Input name="email" label="Email Address" autocomplete="email" required />
          <Input name="username" label="Username" autocomplete="username" required />
          <Input name="displayName" label="Display Name" autocomplete="nickname" />
          <Input
            name="password"
            label="Password"
            autocomplete="new-password"
            type="password"
            required
          />
          <Input
            name="passwordConfirm"
            label="Confirm Password"
            autocomplete="new-password"
            type="password"
            required
          />
        </fieldset>

        <div className="auth__remember-me">
          <label htmlFor="remember-me" className="form-radio__label">
            <input type="checkbox" value="remember-me" id="remember-me" />I accept Terms And
            Conditions
          </label>
        </div>

        <div className="btn-group">
          <button className="btn -submit" type="submit">
            Register
          </button>
        </div>

        <p className="auth__signup-info">
          <strong>or</strong>
        </p>
        <p className="auth__signup-info">
          go back to&nbsp;
          <Link href="/login">
            <a className="link">login</a>
          </Link>
          {"."}
        </p>
      </form>
    </div>
  )
}

export default RegisterPage
