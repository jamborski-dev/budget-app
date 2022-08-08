export const Input = ({ inputName, inputClass, labelClass, wrapperClass, ...rest }) => {
  return (
    <div className={`input-group ${wrapperClass ? wrapperClass : ""}`}>
      <label htmlFor={inputName} className={`form-label ${labelClass ? labelClass : ""}`}>
        {inputName}
      </label>
      <input
        id={inputName}
        name={inputName}
        className={`form-input ${inputClass ? inputClass : ""}`}
        {...rest}
      />
    </div>
  )
}
