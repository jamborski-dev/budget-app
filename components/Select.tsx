export const Select = ({
  name,
  label = "",
  inputClass = "",
  labelClass = "",
  wrapperClass = "",
  children,
  ...rest
}) => {
  return (
    <div className={`form-group ${wrapperClass ? wrapperClass : ""}`}>
      <label htmlFor={name} className={`form-label ${labelClass ? labelClass : ""}`}>
        {label}
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

export const TxRepeat = ({ label, name, ...rest }) => {
  return (
    <Select label={label} name={name} {...rest}>
      <option value="1">every day</option>
      <option value="7">every week</option>
      <option value="30">every month</option>
      <option value="365">every year</option>
    </Select>
  )
}
