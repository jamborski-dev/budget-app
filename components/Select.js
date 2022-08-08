export const Select = ({ name, inputClass, labelClass, wrapperClass, children, ...rest }) => {
  return (
    <div className={`input-group ${wrapperClass ? wrapperClass : ""}`}>
      <label htmlFor={name} className={`form-label ${labelClass ? labelClass : ""}`}>
        {name}
      </label>
      <select
        id={name}
        name={name}
        className={`form-input -select ${inputClass ? inputClass : ""}`}
        {...rest}
      >
        {children}
      </select>
    </div>
  )
}

export const TxRepeat = () => {
  return (
    <Select name="Repeat">
      <option value="0">never</option>
      <option value="1">every day</option>
      <option value="7">every week</option>
      <option value="30">every month</option>
      <option value="365">every year</option>
    </Select>
  )
}
