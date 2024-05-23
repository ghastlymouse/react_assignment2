import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Details from '../pages/Details'

const Router = () => {
    const [expenses, setExpenses] = useState(
        [
            {
                id: "11111111111111111111111111111111111111",
                date: "2024-01-05",
                item: "식비",
                amount: 100000,
                description: "세광양대창",
            },
            {
                id: "22222222222222222222222222222222222222",
                date: "2024-01-10",
                item: "도서",
                amount: 40500,
                description: "모던 자바스크립트",
            },
            {
                id: "333333333333333333333333333333333333333",
                date: "2024-02-02",
                item: "식비",
                amount: 50000,
                description: "회식",
            },
            {
                id: "444444444444444444444444444444444444444",
                date: "2024-02-02",
                item: "간식",
                amount: 500,
                description: "아이스크림",
            },
            {
                id: "555555555555555555555555555555555555555",
                date: "2024-09-02",
                item: "여행",
                amount: 1055000,
                description: "일본여행",
            },
            {
                id: "6666666666666666666666666666666666666666",
                date: "2024-07-02",
                item: "미용",
                amount: 155000,
                description: "미용실",
            },
            {
                id: "77777777777777777777777777777777777",
                date: "2024-05-02",
                item: "도서",
                amount: 75000,
                description: "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
            },
        ]
    );
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<Home
                        expenses={expenses}
                        setExpenses={setExpenses}
                    />} />
                <Route path='/detail/:id'
                    element={<Details
                        expenses={expenses}
                        setExpenses={setExpenses}
                    />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router