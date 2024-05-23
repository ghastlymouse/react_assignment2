import React from 'react'
import DetailExpense from '../components/DetailExpense'

const Details = ({ expenses, setExpenses }) => {
    return (
        <DetailExpense expenses={expenses}
            setExpenses={setExpenses} />
    )
}

export default Details