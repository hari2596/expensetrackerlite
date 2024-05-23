import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expense.css";

function Expense() {
  const [expense, setExpense] = useState([]);

  const addExpense = (expense) => {
    setExpense((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;

    addExpense({ name, amount, date });
    event.target.reset();
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Expense Name"></input>
        <input type="number" name="amount" placeholder="Amount"></input>
        <input type="date" name="date" placeholder="Date"></input>
        <button type="Submit">Add Expense</button>
      </form>

      <div className="form-container">
        {expense.map((expense, index) => (
          <ExpenseItems
            key={index}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Expense;
