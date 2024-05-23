import React from 'react'
import AddExpense from '../components/AddExpense'
import ExpenseContainer from '../components/ExpenseContainer';

const Home = ({ expenses, setExpenses }) => {

    return (
        <>
            <AddExpense setExpenses={setExpenses} />
            <ExpenseContainer expenses={expenses} />
        </>
    )
}

export default Home