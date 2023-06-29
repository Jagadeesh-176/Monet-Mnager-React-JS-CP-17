// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-con">
      <div className="available-money-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="available-money-icon"
        />
        <div className="available-money-details-con">
          <h1 className="heading">Your Balance</h1>
          <h1 className="balance">Rs {balanceAmount}</h1>
        </div>
      </div>
      <div className="income-money-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="income-money-icon"
        />
        <div className="income-money-details-con">
          <h1 className="heading">Your Income</h1>
          <h1 className="balance">Rs {incomeAmount}</h1>
        </div>
      </div>
      <div className="expenses-money-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="expenses-money-icon"
        />
        <div className="expenses-money-details-con">
          <h1 className="heading">Your Expenses</h1>
          <h1 className="balance">Rs {expensesAmount}</h1>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
