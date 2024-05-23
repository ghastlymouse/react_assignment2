import React from 'react'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = ({ setExpenses }) => {
    const handleSubmitForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const date = formData.get("date");
        const item = formData.get("item");
        const amount = formData.get("amount");
        const description = formData.get("description");

        if (!item.trim() || !amount.trim() || !description.trim()) {
            event.target.reset();
            return alert("제대로 입력하세요!");
        }

        const newExpense = {
            id: uuidv4(),
            date,
            item,
            amount,
            description,
        };

        event.target.reset();

        setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    }

    return (
        <StForm onSubmit={handleSubmitForm}>
            날짜 <input
                name="date"
                type="date"
                max="2024-12-31"
                min="2024-01-01"
                required />
            항목 <input
                name="item"
                type="text"
                placeholder='지출 항목'
                required />
            금액 <input
                name="amount"
                type="number"
                placeholder='지출 금액'
                required />
            내용 <input
                name="description"
                type="text"
                placeholder='지출 내용'
                required />
            <StSubmitBtn type="submit">저장</StSubmitBtn>
        </StForm>
    )
}

export default AddExpense

const StForm = styled.form`
    width: 100%;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
`;

const StSubmitBtn = styled.button`
    border: none;
    border-radius: 4px;
    background-color: blue;
    color: white;
    cursor: pointer;
    &:hover{
        filter:brightness(0.8);
    }
`;