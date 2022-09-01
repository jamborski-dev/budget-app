import { useState, useEffect, FormEvent } from "react"

const UCCalculator = () => {
  const [values, setValues] = useState({
    wage: 0,
    childcareCost: 0
  })

  const [results, setResults] = useState({
    ucAllowance: 0,
    childcareCost: 0,
    ucPaymentTotal: 0
  })

  const CONSTANTS = {
    ucDenominator: 0.55,
    ucDeductable: 335,
    ucLimit: 1442,
    childcareReturnProcentage: 0.85
  }

  const handleRangeChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateUC = () => {
    const { ucDenominator, ucDeductable, ucLimit, childcareReturnProcentage } = CONSTANTS

    const amountDeducted =
      (values.wage <= ucDeductable ? 0 : values.wage - ucDeductable) * ucDenominator

    const ucAllowance = amountDeducted < ucLimit ? ucLimit - amountDeducted : 0
    const childcareCost = values.childcareCost * childcareReturnProcentage
    const ucPaymentTotal = ucAllowance + childcareCost

    setResults(prev => ({
      ...prev,
      ucAllowance: ucAllowance,
      childcareCost: childcareCost,
      ucPaymentTotal: ucPaymentTotal
    }))
  }

  useEffect(() => {
    calculateUC()
  }, [values])

  return (
    <div className="content-box">
      <h2 className="heading">Universal Credit Payment</h2>
      <div className="panel">
        <form className="form">
          <div className="form-group">
            <div className="row spread">
              <label className="form-label" htmlFor="wage">
                Wages Claim
              </label>
              <div className="input__value">£{values.wage}.00</div>
            </div>
            <input
              type="range"
              id="wage"
              name="wage"
              step="10"
              min="0"
              max="3000"
              value={values.wage}
              onChange={handleRangeChange}
            />
          </div>

          <div className="form-group">
            <div className="row spread">
              <label className="form-label" htmlFor="childcareCost">
                Childcare Cost
              </label>
              <div className="input__value">£{values.childcareCost}.00</div>
            </div>
            <input
              type="range"
              id="childcareCost"
              name="childcareCost"
              step="10"
              min="0"
              max="2000"
              value={values.childcareCost}
              onChange={handleRangeChange}
            />
          </div>

          <section className="panel__section">
            <div className="result__box">
              <h3 className="heading result__title">UC Allowance</h3>
              <div className="result__value">£{results.ucAllowance.toFixed(2)}</div>
            </div>
            <div className="result__box">
              <h3 className="heading result__title">Childcare Cost</h3>
              <div className="result__value">£{results.childcareCost.toFixed(2)}</div>
            </div>
            <div className="result__box">
              <h3 className="heading result__title">UC Payment Total</h3>
              <div className="result__value">£{results.ucPaymentTotal.toFixed(2)}</div>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default UCCalculator
