import React from 'react';
import "./ExpensesFilter.css"
const ExpensesFliter = (props)=>{
    const dropdownselection = (e)=>{
        props.onChangeoption(e.target.value)
    }
    
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>filter expenses by '2020'</label>
                <select value={props.selected} onChange={dropdownselection}>
                    <option value={'2019'}>2019</option>
                    <option value={'2020'}>2020</option>
                    <option value={'2021'}>2021</option>
                    <option value={'2022'}>2022</option>
                </select>
            </div>

        </div>
    )
}

export default ExpensesFliter