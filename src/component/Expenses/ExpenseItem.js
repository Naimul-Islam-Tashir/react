import React,{useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem=(value)=>{
    const [newTitle,setNewtitle]=useState("");
    const [title,settitle]=useState(value.title);
    const changefun=()=>{
        settitle(newTitle);   
    }
    const changefunctopn=(e)=>{
        setNewtitle(e.target.value);
    }
    return(
        <Card className="expense_item">
            <ExpenseDate date={value.date}/>
            <div className="expense_item_discription">
              <h2>{title}</h2>
              <div className="expense_item__price">${value.amount}</div>
            </div>
            <input type="text" value={newTitle} onChange={changefunctopn}/>
            <button className='btnfun' onClick={changefun}>PLZ CLICK</button>
        </Card>
    );
}
export default ExpenseItem;