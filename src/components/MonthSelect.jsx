import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { changeMonth } from "../redux/slices/listMonth";

const MonthSelect = () => {
    const dispatch = useDispatch();

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    useEffect(() => {
        const loadedLastSelectMonth = +localStorage.getItem("lastSelect");
        if (!loadedLastSelectMonth) {
            dispatch(changeMonth(1));
        } else {
            dispatch(changeMonth(loadedLastSelectMonth));
        }
    }, []);

    const [activeMonth, setActiveMonth] = useState(+localStorage.getItem("lastSelect"));

    const handleSelectMonth = (month) => {
        localStorage.setItem("lastSelect", month);
        setActiveMonth(month);
        dispatch(changeMonth(month));
    };

    return (
        <StMonthSection>
            {
                months.map(month => {
                    return (
                        <StMonthBtn key={month}
                            onClick={() => handleSelectMonth(month)}
                            $active={activeMonth === month}>
                            {month}월
                        </StMonthBtn>
                    );
                })
            }
        </StMonthSection>
    )
}

export default MonthSelect

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
    background-color: ${props => (props.$active ? "blue" : "#c2b8b8;")};
    color: ${props => (props.$active ? "white" : "black")};
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