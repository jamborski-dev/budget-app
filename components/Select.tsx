export const Select = ({
  field,
  form,
  label = "",
  inputClass = "",
  labelClass = "",
  wrapperClass = "",
  children,
  ...rest
}) => {
  return (
    <div className={`form-group ${wrapperClass ? wrapperClass : ""}`}>
      <label htmlFor={field.name} className={`form-label ${labelClass ? labelClass : ""}`}>
        {label}
      </label>
      <select
        id={field.name}
        className={`form-input -select ${inputClass ? inputClass : ""}`}
        {...field}
        {...rest}
      >
        {children}
      </select>
    </div>
  )
}
