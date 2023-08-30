import React from 'react'

const ExpenseItems = ({name,lname,Email,age,expenses}) => {
  return (
    <div className='item'>
    <p>Name:-{name}</p>
    <p>LastName:- {lname}</p>
    <p>E-mail:- {Email}</p>
    <p>Age:- {age}</p>
    <p>ExpenceItem :- {expenses}</p>




    </div>
  )
}

export default ExpenseItems
