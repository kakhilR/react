import React from "react";
import Card from "../Ui/Card";
import "./Expenseitem.css"
import ExpensesDate from "./ExpensesDate";


function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpensesDate date ={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

