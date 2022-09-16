import { add, addDays, addMonths, format } from "date-fns"
import { Formik, Form, Field } from "formik"
import { Input } from "./Input"
import { Select } from "./Select"

/* 
    Project budget for the next timeframe (1 month by default) per single account

    Config:
      start_day: today()
      end_day: +30 days
      dataset: 
        standing_orders
        avarege_income (avg based on income from previous month)
        avarege_expense (avg based on expenses from previous month)

*/

export const ForecastProjection = () => {
  let rows = [1, 1, 1]
  let currentDate = new Date()
  const buildRows = () => {
    let i = 0
    while (i < 30) {
      rows.push(currentDate)
      currentDate = addDays(currentDate, 1)
      i++
    }

    return rows.map((row, i) => {
      return (
        <tr key={i}>
          <td>{format(row, "yyyy-MM-dd")}</td>
          <td>+123</td>
          <td>-10</td>
        </tr>
      )
    })
  }

  return (
    <div className="box full-width">
      <h2>Financial Forecast Projection</h2>
      <div className="panel">
        <div className="panel__tools">
          <Formik
            initialValues={{
              startDate: new Date(),
              endDate: addMonths(new Date(), 1),
              expenseInterval: "week",
              expenseDay: 1, // 1 === 'Monday' || 1 === 01-mm-yyyy,
              expenseBalance: 0 // should come from user global config
            }}
            onSubmit={async values => console.log("Submit")}
          >
            <Form>
              <div className="row wrap">
                <Field label="Start Date" name="startDate">
                  {({ field, form }) => {
                    return (
                      <input
                        type="date"
                        onChange={() => {
                          field.onChange()
                          console.log("change")
                        }}
                      />
                    )
                  }}
                </Field>
                <Input type="date" label="End Date" name="endDate" />
                <Select label="Interval" name="expenseInterval">
                  <option value={"week"}>week</option>
                  <option value={"month"}>month</option>
                  <option value={"year"}>year</option>
                </Select>
                <Input
                  label="Day"
                  customClass="narrow"
                  type="number"
                  min="1"
                  max="7"
                  step="1"
                  name="expenseDay"
                />
                <Input
                  label="Amount"
                  className="input"
                  type="number"
                  min="0.01"
                  step="0.01"
                  name="expenseBalance"
                />
              </div>
              <button type="submit">Save</button>
            </Form>
          </Formik>
        </div>
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Income</td>
              <td>Standing Order</td>
            </tr>
          </thead>
          <tbody>{buildRows()}</tbody>
        </table>
      </div>
    </div>
  )
}

const CustomInput = ({ field, form, children, ...props }) => {
  const { onChange } = field

  const handleChange = e => {
    onChange(e)
    console.log("change")
  }

  if (props.as === "select") {
    return (
      <input
        onChange={e => {
          handleChange(e)
          console.log("change")
        }}
        {...field}
        {...props}
      >
        {children}
      </input>
    )
  }

  return <input {...field} {...props}></input>
}
