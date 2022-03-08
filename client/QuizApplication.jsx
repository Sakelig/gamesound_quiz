import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FrontPage} from "./FrontPage";
import {QuizPage} from "./QuizPage";

export function QuizApplication() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<FrontPage/>}/>
                    <Route path={"/quiz"} element={<QuizPage/>}/>
                    <Route path={"/login"} element={<div>loginpage</div>}/>
                    <Route path={"*"} element={<div>not found</div>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
