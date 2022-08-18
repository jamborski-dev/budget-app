export const Input = ({ name, label, ...rest }) => {
  return (
    <div className={`form-group`}>
      <label htmlFor={name} className={`form-label`}>
        {label}
      </label>
      <input id={name} name={name} className={`form-input`} {...rest} />
    </div>
  )
}

export const CurrencyInput = ({ name, label, currency, ...rest }) => {
  return (
    <div className={`form-group`}>
      <label htmlFor={name} className={`form-label`}>
        {label}
      </label>
      <div className="form-group--with-prefix">
        <div className="input-prefix">{currency}</div>
        <input
          id={name}
          name={name}
          className={`form-input--with-prefix`}
          type="number"
          min="0.00"
          step="0.01"
          {...rest}
        />
      </div>
    </div>
  )
}
