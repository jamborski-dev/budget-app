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
