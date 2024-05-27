import React from 'react'
import AddExpense from '../components/AddExpense';
import ExpenseList from '../components/ExpenseList';
import MonthSelect from '../components/MonthSelect';

const Home = () => {

    return (
        <>
            <AddExpense />
            <MonthSelect />
            <ExpenseList />
        </>
    )
}

export default Home