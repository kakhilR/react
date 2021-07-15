import React,{useState} from "react";
import Form from "./Form";
import "./NewExpenses.css"

const NewExpenses = (props) =>{

    const [toggle,setToggle] = useState(false)

    const onNewExpensedata = (NewExpenseForm) =>{
        const expenses = {
            ...NewExpenseForm,
            id:Math.random().toString(),
        }
        props.onAddNewExpenses(expenses)
    }

    const openFrom = ()=>{
        setToggle(true)
    }

    const closeForm = ()=>{
        setToggle(false)
    }

    return (
        
        <div className="new-expenses">
            {!toggle && (<button onClick = {openFrom}>Add new Expenses</button>)}
            {toggle &&(<Form NewExpensedata={onNewExpensedata} onCancel={closeForm} />)}
            
        </div>
      
    )
}

export default NewExpenses;