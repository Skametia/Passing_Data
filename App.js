import React, { useState, useEffect } from "react";
import ExpenseItems from "./ExpenseItems";
import "./App.css"

function App() {
  const item = {
    expenses: "V3Erra-22_California",
  };
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
    <h1>Your data added </h1>
      {expenses.map((person, index) => (
        <ExpenseItems
          key={index}
          name={person.firstName}
          lname={person.lastName}
          Email={person.email}
          age={person.age}
          expenses={item.expenses}
        />
      ))}
    </div>
  );
}

export default App;
