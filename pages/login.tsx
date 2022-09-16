import { useFormik } from "formik"
import { Input } from "../components/Input"
import * as Yup from "yup"
import Link from "next/link"

const loginValidationSchema = Yup.object().shape({
  username: Yup.string().min(2).max(20).required("Username is required"),
  password: Yup.string().min(2).max(20).required("Password is required")
})

const LoginPage = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginValidationSchema,
    onSubmit: async values => {
      alert(`Login: \n
      user: ${values.username}
      pass: ${values.password}`)
    }
  })

  return (
    <div className="auth auth__page">
      <form onSubmit={formik.handleSubmit} className="form auth__form">
        <h2 className="form-heading">Login</h2>
        <fieldset>
          <Input name="username" label="Username" autocomplete="email" required />
          <Input
            name="password"
            label="Password"
            autocomplete="password"
            type="password"
            required
          />
        </fieldset>

        <div className="btn-group">
          <button className="btn -submit" type="submit">
            Log In
          </button>
        </div>

        <div className="auth__remember-me">
          <label htmlFor="remember-me" className="form-radio__label">
            <input type="checkbox" value="remember-me" id="remember-me" />
            Remember me
          </label>
        </div>

        <p className="auth__signup-info">
          <strong>or</strong>
        </p>
        <p className="auth__signup-info">
          <Link href="/register">
            <a className="link">Sign up here</a>
          </Link>{" "}
          to create a new account.
        </p>
      </form>
    </div>
  )
}

export default LoginPage
