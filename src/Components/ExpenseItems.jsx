import React from 'react'

function ExpenseItems({name, amount ,date}) {
  return (
    <div>
      <div>{name}</div>
      <div>{amount}</div>
      <div>{date}</div>
      <br/>
    </div>
  )
}

export default ExpenseItems
