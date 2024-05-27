import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom';
import { ExpenseContext } from '../context/ExpenseContext';

const DetailExpense = () => {
    const { expenses, setExpenses } = useContext(ExpenseContext);
    const location = useLocation();
    const id = useRef(location.pathname.slice(8)).current;
    const prevExpense = expenses.filter(expense => expense.id === id)[0];

    const navigate = useNavigate();

    const handleComeBackHome = () => {
        navigate("/");
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const date = formData.get("date");
        const item = formData.get("item");
        const amount = formData.get("amount");
        const description = formData.get("description");

        const updatedExpenses = expenses.map(expense => {
            if (expense.id === id) {
                return {
                    id,
                    date,
                    item,
                    amount,
                    description,
                };
            } else {
                return expense;
            }
        });

        setExpenses(updatedExpenses);
        handleComeBackHome();
    }

    const handleDelete = () => {
        const confirmDelete = confirm("정말로 삭제하시겠습니까?");
        if (confirmDelete) {
            const cleanedExpenses = expenses.filter(expense => expense.id !== id);
            setExpenses(cleanedExpenses);
            return handleComeBackHome();
        }
    }

    return (
        <StDetailSection>
            <StDetailForm onSubmit={handleUpdate}>
                날짜<br />
                <StInput defaultValue={prevExpense.date}
                    name="date"
                    type="date"
                />
                항목<br />
                <StInput defaultValue={prevExpense.item}
                    name="item"
                    type="text"
                />
                금액<br />
                <StInput defaultValue={prevExpense.amount}
                    name="amount"
                    type="number" />
                내용<br />
                <StInput defaultValue={prevExpense.description}
                    name="description"
                    type="text" />
                <StDetailBtn $color="green" type='submit'>수정</StDetailBtn>
            </StDetailForm>
            <StDetailBtn $color="red" onClick={handleDelete}>삭제</StDetailBtn>
            <StDetailBtn $color="gray" onClick={handleComeBackHome}>돌아가기</StDetailBtn>
        </StDetailSection>
    )
}

export default DetailExpense

const StDetailBtn = styled.button`
    width: 10%;
    height: 35px;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.$color || "black"};
    color: white;
    cursor: pointer;
    &:hover{
        filter:brightness(0.8);
    }
`;

const StDetailSection = styled.section`
    background-color: white;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StDetailForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const StInput = styled.input`
    width: 80%;
    height: 50px;
`;