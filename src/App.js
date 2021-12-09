import React,{useState} from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpens from "./component/NewExpense/NewExpens";
let Dummy_Expense= [
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
];
 const App=()=>{
     const [expenses,setExpenses]=useState(Dummy_Expense)
 
 const AddexpenseHandler=(expense)=>{
   setExpenses([...expenses,expense]);
 }

    return(
        <div>
            <h2>ADD NEW Expense:</h2>
            <NewExpens onAddExpense={AddexpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
}
export default App;