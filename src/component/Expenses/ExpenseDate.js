import React from "react";
import './ExpenseDate.css';
const ExpenseDate=(value)=>{
    const day=value.date.toLocaleString('en-US',{day:'numeric'})
    const month=value.date.toLocaleString('en-US',{month:'long'});
    const year=value.date.getFullYear();

    return(
         <div className="Expense_Date_head">
             <div className="Expense_Date_day">{day}</div>
              <div className="Expense_Date_month">{month}</div>
               <div className="Expense_Date_year">{year}</div>
         </div>
    )
    
}
export default ExpenseDate;