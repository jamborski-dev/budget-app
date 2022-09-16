import { useEffect, useState } from "react"
import { CurrencyInput, Input, InputsRow } from "../components/Input"
import { Select } from "../components/Select"
import { TxRepeatGroup } from "../components/TxRepeat"
import { useDataContext } from "../hooks/useDataContext"

import { FiEdit2 } from "react-icons/fi"
import { FaRegSave } from "react-icons/fa"
import { IoMdTrash, IoMdClose } from "react-icons/io"
import { Field, Formik } from "formik"
import { createImportSpecifier } from "typescript"

const SettingsPage = () => {
  return (
    <div className="page-content settings">
      <h2 className="page-heading">Settings Page</h2>
      <h3 className="form-heading">Avarage costs of living</h3>
      <p className="settings-page__text">
        Here you can set avarage values per category. This will be then used to create detailed
        financial forecast.
      </p>
      <AvaragesTable />
    </div>
  )
}

export default SettingsPage

const AvaragesTable = () => {
  const {
    state: { averages }
  } = useDataContext()

  const newAverage = {
    id: undefined,
    title: "",
    value: "",
    repeatPeriodValue: 0,
    categoryId: undefined
  }

  const [edit, setEdit] = useState<null | number>(null)
  const [editRow, setEditRow] = useState(newAverage)
  const [newRow, setNewRow] = useState(null)

  const toggleEdit = (_id: null | number) => {
    if (!_id || edit === _id) return
    if (newRow) setNewRow(null)
    setEdit(_id)
    setEditRow(averages.find(item => item.id === _id))
  }

  const handleRemove = (_id: number) => {}
  const handleCancel = () => setEdit(null)
  const handleAddRow = () => {
    if (newRow) return
    handleCancel()
    setNewRow(newAverage)
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={editRow}
        onSubmit={(values, actions) => console.log(values)}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <fieldset className="fieldset">
              <table className="table">
                <thead>
                  <tr>
                    <td>Title</td>
                    <td>Value</td>
                    <td>Repeat Period</td>
                    <td>Category</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {averages.map((item, i) => {
                      if (edit === item.id) {
                        return <AverageRowEdit data={item} key={i} handleCancel={handleCancel} />
                      }

                      return (
                        <AverageRowData
                          data={item}
                          key={i}
                          toggleEdit={toggleEdit}
                          handleRemove={handleRemove}
                        />
                      )
                    })}

                    {newRow && (
                      <AverageRowEdit data={newRow} key={"12312312"} handleCancel={handleCancel} />
                    )}
                  </>
                </tbody>
              </table>
            </fieldset>
            <div className="btn-group">
              <button className="btn -inline" type="button" onClick={() => handleAddRow()}>
                + Add Category Average
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

const AverageRowData = ({ data, toggleEdit, handleRemove }) => {
  if (!data) return null

  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.value}</td>
      <td>{data.repeatPeriodValue}</td>
      <td>{data.category}</td>
      <td className="table__btns">
        <div className="btn-group">
          <button className="btn -action -inline" onClick={() => toggleEdit(data.id)}>
            <FiEdit2 />
          </button>
          <button className="btn -cancel -inline" onClick={() => handleRemove(data.id)}>
            <IoMdTrash />
          </button>
        </div>
      </td>
    </tr>
  )
}

const AverageRowEdit = ({ data, handleCancel }) => {
  const {
    state: { categories }
  } = useDataContext()

  const handleSave = () => {}

  return (
    <tr className="table__edit-row">
      <td>
        <Field name="title" component={Input} label="Title" />
      </td>
      <td>
        <Field name="value" component={CurrencyInput} label="Value" currency="£" />
      </td>
      <td>
        <Field name="repeatPeriodValue" component={TxRepeatGroup} label="Repeat" />
      </td>
      <td>
        <Field name="categoryId" component={Select} label="Category">
          <option value="0">-</option>
          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category.label}
            </option>
          ))}
        </Field>
      </td>
      <td className="table__btns">
        <div className="btn-group">
          <button className="btn -action -inline" type="submit">
            <FaRegSave />
          </button>
          <button className="btn -cancel -inline" type="button" onClick={() => handleCancel()}>
            <IoMdClose />
          </button>
        </div>
      </td>
    </tr>
  )
}
