import React from 'react'
import AddExpense from '../components/AddExpense';
import ExpenseList from '../components/ExpenseList';
import MonthSelect from '../components/MonthSelect';

const Home = ({ expenses, setExpenses, listMonth, setListMonth }) => {
    const expensesList = expenses.filter(expense => {
        return +expense.date.slice(5, 7) === listMonth;
    })

    return (
        <>
            <AddExpense setExpenses={setExpenses} />
            <MonthSelect listMonth={listMonth} setListMonth={setListMonth} />
            <ExpenseList expenses={expensesList} />
        </>
    )
}

export default Home