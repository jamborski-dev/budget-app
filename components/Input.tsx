export const Input = ({ field, form, label, ...rest }) => {
  return (
    <div className={`form-group`}>
      <label htmlFor={field.name} className={`form-label ${rest.required ? "-required" : ""}`}>
        {label}
      </label>
      <input id={field.name} className={`form-input`} {...field} {...rest} />
    </div>
  )
}

export const CurrencyInput = ({ field, form, label, currency, ...rest }) => {
  return (
    <div className={`form-group`}>
      <label htmlFor={field.name} className={`form-label ${rest.required ? "-required" : ""}`}>
        {label}
      </label>
      <div className="form-group--with-prefix">
        <div className="input-prefix">{currency}</div>
        <input
          id={field.name}
          name={field.name}
          className={`form-input--with-prefix`}
          type="number"
          min="0.00"
          step="0.01"
          placeholder="0.00"
          {...field}
          {...rest}
        />
      </div>
    </div>
  )
}

export const InputsRow = ({ children }) => {
  return <div className={`form-group -row`}>{children}</div>
}
