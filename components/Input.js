export const Input = ({ name, ...rest }) => {
  return (
    <div className={`form-group`}>
      <label htmlFor={name} className={`form-label`}>
        {name}
      </label>
      <input id={name} name={name} className={`form-input`} {...rest} />
    </div>
  )
}

export const CurrencyInput = ({ name, currency }) => {
  return (
    <div className={`form-group`}>
      <label htmlFor={name} className={`form-label`}>
        {name}
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
        />
      </div>
    </div>
  )
}
