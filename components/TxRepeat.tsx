import { useEffect, useState } from "react"
import { Input } from "./Input"
import { Select } from "./Select"

/* 
  To implement grouped fields and return single value
  field's onChange handler must be hooked to local state
*/

export const TxRepeatGroup = ({ field, form, name, label }) => {
  const [repeatDay, setRepeatDay] = useState(0)
  const [repeatInterval, setRepeatInterval] = useState("")

  // local state handlers
  const handleDayChange = e => {
    setRepeatDay(e.currentTarget.value)
  }

  const handleIntervalChange = e => {
    setRepeatInterval(e.currentTarget.value)
  }

  // this reports back to main formik field
  const handleLocalChange = (field: string, value: string | number) => {
    console.log(field, value)
  }

  useEffect(() => {
    handleLocalChange("interval", repeatInterval)
  }, [repeatInterval])

  useEffect(() => {
    handleLocalChange("day", repeatDay)
  }, [repeatDay])

  return (
    <div className="form-group__tx-repeat">
      <div className={`form-group`}>
        <label htmlFor="day" className={`form-label`}>
          {label}
        </label>
        <input
          id="day"
          name="day"
          type="number"
          step="1"
          min="1"
          max="366"
          className={`form-input`}
          onChange={handleDayChange}
        />
      </div>
    </div>
  )
}

// TODO: implement component conditionals
const OPTIONS = {
  day: null,
  week: [
    { label: "Monday", value: 1 },
    { label: "Tuesday", value: 2 },
    { label: "Wednesday", value: 3 },
    { label: "Thursday", value: 4 },
    { label: "Friday", value: 5 },
    { label: "Saturday", value: 6 },
    { label: "Sunday", value: 7 }
  ]
  // month: range
  // year: date
}

/* 
  ? period == 0
    -> null

  ? period == 1
    -> null
  
  ? period == 7
    -> week day label select

  ? period == 30
    -> month day number input, max-limit 31

  ? period == 30
    -> month label select
    -> month day number input, max-limit 31 (depending on month selected)
*/
