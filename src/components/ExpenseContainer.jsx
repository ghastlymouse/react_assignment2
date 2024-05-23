import React, { useEffect, useState } from 'react'
import ExpenseList from './ExpenseList'
import styled from 'styled-components';

const ExpenseContainer = ({ expenses }) => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const [listMonth, setListMonth] = useState(1);
    useEffect(() => {
        const lastSelcetMonth = +localStorage.getItem("lastSelect");
        setListMonth(lastSelcetMonth);
    }, []);
    const expensesList = expenses.filter(expense => {
        return +expense.date.slice(5, 7) === listMonth;
    })

    const handleSelectMonth = (month) => {
        localStorage.setItem("lastSelect", month);
        setListMonth(month);
    }

    return (
        <>
            <StMonthSection>
                {
                    months.map(month => {
                        return (
                            <StMonthBtn key={month}
                                onClick={() => handleSelectMonth(month)}>
                                {month}월
                            </StMonthBtn>
                        );
                    })
                }
            </StMonthSection>
            <ExpenseList expenses={expensesList} />
        </>
    )
}

export default ExpenseContainer

const StMonthSection = styled.section`
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

const StMonthBtn = styled.button`
    background-color: #c2b8b8;
    color: black;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 60px;
    cursor: pointer;
    &:hover{
        background-color: blue;
        color: white;
    }
`;