import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { addExpense } from '../redux/slices/expense';
import { changeMonth } from '../redux/slices/listMonth';

const AddExpense = () => {
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [alertMonth, setAlertMonth] = useState(1);
    const modalBg = useRef();

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
        event.target.reset();
        dispatch(addExpense({
            id: uuidv4(),
            date,
            item,
            amount: +amount,
            description,
        }));
        const selectedMonth = +date.slice(5, 7);
        dispatch(changeMonth(selectedMonth));
        setAlertMonth(selectedMonth);
        setOpenModal(true);
    }

    const thisYearFirstDay = `${new Date().getFullYear()}-01-01`;
    const thisYearLastDay = `${new Date().getFullYear()}-12-31`;

    return (
        <>
            <ModalBackground $openModal={openModal} ref={modalBg} onClick={(e) => {
                if (e.target === modalBg.current) {
                    setOpenModal(false);
                }
            }}>
                <Modal>
                    <span>{alertMonth}월의 지출 내역에 추가되었습니다!</span>
                    <ModalBtnDiv>
                        <ModalBtn onClick={() => setOpenModal(false)}>확인</ModalBtn>
                    </ModalBtnDiv>
                </Modal>
            </ModalBackground>
            <StForm onSubmit={handleSubmitForm}>
                <label htmlFor='date'>날짜</label>
                <StInput
                    name="date"
                    type="date"
                    min={thisYearFirstDay}
                    max={thisYearLastDay}
                    required />
                <label htmlFor='item'>항목</label>
                <StInput
                    name="item"
                    type="text"
                    placeholder='지출 항목'
                    required />
                <label htmlFor='amount'>금액</label>
                <StInput
                    name="amount"
                    type="number"
                    placeholder='지출 금액'
                    required />
                <label htmlFor='description'>내용</label>
                <StInput
                    name="description"
                    type="text"
                    placeholder='지출 내용'
                    required />
                <StSubmitBtn type="submit">추가</StSubmitBtn>
            </StForm>
        </>
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
    margin: 10px;
`;

const StSubmitBtn = styled.button`
    border: none;
    border-radius: 4px;
    background-color: blue;
    padding: 10px 20px;
    width: 7%;
    height: 35px;
    color: white;
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        filter:brightness(0.8);
    }
`;

const StInput = styled.input`
    width: 15%;
    height: 30px;
    background-color: #e2dbdb;
    border: 1px solid black;
    border-radius: 10px;
    font-family: inherit;
    font-size: inherit;
`;

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.$openModal ? "flex" : "none"};
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
    width: 500px;
    height: 150px;
    background-color: white;
    border: 3px solid black;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ModalBtnDiv = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
`;

const ModalBtn = styled.button`
    border: none;
    border-radius: 4px;
    background-color: blue;
    padding: 10px 20px;
    width: 100%;
    height: 35px;
    color: white;
    font-family: inherit;
    font-size: 15px;
    cursor: pointer;
    &:hover{
        filter:brightness(0.8);
    }
`;