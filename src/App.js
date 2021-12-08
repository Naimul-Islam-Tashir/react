import React from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpens from "./component/NewExpense/NewExpens";
 const App=()=>{
 let expense = [
     {
         id:"e1",
         title:"school fee",
         date:new Date(2021,4,22),
         amount:230
     },
     {
        id:"e2",
        title:"class fee",
        date:new Date(2021,5,3),
        amount:330
    },
    {
        id:"e3",
        title:"teison fee",
        date:new Date(2021,11,4),
        amount:330
    },
    {
        id:"e3",
        title:"Bus fee",
        date:new Date(2021,11,4),
        amount:30
    },
    {
        id:"e5",
        title:"food fee",
        date:new Date(2021,3,17),
        amount:400
    },
    {
        id:'e6',
        title:"dis fee",
        date:new Date(2018,9,24),
        amount:30
    }
 ];
 const AddexpenseHandler=(expense)=>{
   console.log(expense);
 }

    return(
        <div>
            <h2>ADD NEW Expense:</h2>
            <NewExpens onAddExpense={AddexpenseHandler} />
            <Expenses item={expense} />
        </div>
    );
}
export default App;