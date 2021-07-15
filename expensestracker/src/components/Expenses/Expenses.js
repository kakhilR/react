import React,{useState} from 'react';
import ExpensesFliter from "../NewExpenses/ExpensesFliter";
import Card from "../Ui/Card";
import Expenseitem from "./Expenseitem";
import "./Expenses.css";

function Expenses(props) {

    return (
      <Card className="card">
    <div className="expenses">
      <Expenseitem title = {props.items[0].title} amount = {props.items[0].amount} date ={props.items[0].date}/>
      <Expenseitem title = {props.items[1].title} amount = {props.items[1].amount} date={props.items[1].date}/>
      <Expenseitem title = {props.items[2].title} amount = {props.items[2].amount} date={props.items[2].date}/>
      </div>
      </Card>
    );
  }


export default Expenses;