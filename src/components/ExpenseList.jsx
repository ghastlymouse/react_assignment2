import React, { useContext } from 'react'
import styled from 'styled-components';
import ExpenseItem from './ExpenseItem'
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseList = () => {
    const { expensesList } = useContext(ExpenseContext);

    return (
        <StSection>
            {
                expensesList.map(expense => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                        />
                    );
                })
            }
        </StSection>
    )
}

export default ExpenseList

const StSection = styled.section`
    width: 100%;
    background-color: white;
    color: black;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
    border: 5px solid black;
    border-radius: 8px;
`;