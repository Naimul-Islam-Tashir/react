import React from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem=(value)=>{
    return(
        <Card className="expense_item">
            <ExpenseDate date={value.date}/>
            <div className="expense_item_discription">
              <h2>{value.title}</h2>
              <div className="expense_item__price">${value.amount}</div>
            </div>
           
        </Card>
    );
}
export default ExpenseItem;