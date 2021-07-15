import "./Form.css";
import React,{useState}  from "react";

const Form =(props)=>{

    const [title,setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const submitForm = (e)=>{
        e.preventDefault()
        const expenses = {
            title: title,
            amount: amount,
            date : new Date(date),
        }
        props.NewExpensedata(expenses)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitForm}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" value={amount}  onChange={(e)=>setAmount(e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type='date' min='2019-01-01' max ='2022-12-31' value={date} onChange={(e)=>setDate(e.target.value)} />
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="button" onClick={props.onCancel}>cancel</button>
                <button type="submit" className="">Add expense</button>
            </div>
        </form>
    )
}

export default Form;