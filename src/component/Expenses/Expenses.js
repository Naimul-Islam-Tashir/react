import React from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
const Expenses=(expense)=>{
    return(
        <Card className="expenses">
            <ExpenseItem
                date={expense.item[0].date}
                title={expense.item[0].title}
                amount={expense.item[0].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={expense.item[1].date}
                title={expense.item[1].title}
                amount={expense.item[1].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={expense.item[2].date}
                title={expense.item[2].title}
                amount={expense.item[2].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={expense.item[3].date}
                title={expense.item[3].title}
                amount={expense.item[3].amount}>
            </ExpenseItem>
            <ExpenseItem
                    date={expense.item[4].date}
                    title={expense.item[4].title}
                    amount={expense.item[4].amount}/>
       <ExpenseItem
                    date={expense.item[5].date}
                    title={expense.item[5].title}
                    amount={expense.item[5].amount}/>
           
        </Card>
    );
}
export default Expenses;