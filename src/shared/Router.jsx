import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Details from '../pages/Details'
import ExpenseProvider from "../context/ExpenseContext";

const Router = () => {


    return (
        <ExpenseProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detail/:id' element={<Details />} />
                </Routes>
            </BrowserRouter>
        </ExpenseProvider>
    )
}

export default Router