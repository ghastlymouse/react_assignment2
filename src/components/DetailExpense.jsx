import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, updateExpense } from '../redux/slices/expense';

const DetailExpense = () => {
    const { expenses } = useSelector(state => state.expenses);
    const [openConfirm, setOpenConfirm] = useState(false);
    const modalBg = useRef();

    const dispatch = useDispatch();
    const location = useLocation();
    const currentId = useRef(location.pathname.slice(8)).current;
    const [prevExpense] = expenses.filter(expense => expense.id === currentId);

    const navigate = useNavigate();
    const handleComeBackHome = () => {
        navigate("/");
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        const id = currentId;
        const formData = new FormData(event.target);
        const date = formData.get("date");
        const item = formData.get("item");
        const amount = formData.get("amount");
        const description = formData.get("description");

        dispatch(updateExpense({ id, date, item, amount, description }));
        handleComeBackHome();
    }

    const handleDelete = (currentId) => {
        dispatch(deleteExpense({ currentId }));
        handleComeBackHome();
    }

    return (
        <StDetailSection>
            <ModalBackground $openConfirm={openConfirm} ref={modalBg} onClick={(e) => {
                if (e.target === modalBg.current) {
                    setOpenConfirm(false);
                }
            }}>
                <Modal>
                    <span>삭제 하시겠습니까?</span>
                    <ModalBtnDiv>
                        <ModalBtn onClick={() => {
                            handleDelete(currentId);
                            setOpenConfirm(false);
                        }}>확인</ModalBtn>
                        <ModalBtn onClick={() => setOpenConfirm(false)} $color="gray">취소</ModalBtn>
                    </ModalBtnDiv>
                </Modal>
            </ModalBackground>
            <StDetailForm onSubmit={handleUpdate}>
                <label htmlFor='date'>날짜</label>
                <StInput defaultValue={prevExpense.date}
                    name="date"
                    type="date"
                />
                <label htmlFor='item'>항목</label>
                <StInput defaultValue={prevExpense.item}
                    name="item"
                    type="text"
                />
                <label htmlFor='amount'>금액</label>
                <StInput defaultValue={prevExpense.amount}
                    name="amount"
                    type="number" />
                <label htmlFor='description'>내용</label>
                <StInput defaultValue={prevExpense.description}
                    name="description"
                    type="text" />
                <StDetailBtn $color="green" type='submit'>수정</StDetailBtn>
            </StDetailForm>
            <StDetailBtn $color="red" onClick={() => setOpenConfirm(true)}>삭제</StDetailBtn>
            <StDetailBtn $color="gray" onClick={handleComeBackHome}>돌아가기</StDetailBtn>
        </StDetailSection>
    )
}

export default DetailExpense

const StDetailBtn = styled.button`
    width: 10%;
    height: 35px;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-family: inherit;
    font-size: inherit;
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
    border: 5px solid black;
    border-radius: 10px;
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
    display: ${props => props.$openConfirm ? "flex" : "none"};
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
    display: flex;
    flex-direction: row;
    right: 10px;
    bottom: 10px;
`;

const ModalBtn = styled.button`
    border: none;
    border-radius: 4px;
    background-color: ${props => props.$color || "blue"};
    padding: 10px 20px;
    width: 80px;
    height: 35px;
    color: white;
    font-family: inherit;
    font-size: 15px;
    cursor: pointer;
    &:hover{
        filter:brightness(0.8);
    }
`;