import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const Roteador = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/quiz" element={<Quiz />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Roteador;