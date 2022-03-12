import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./FrontPage";
import { QuizPage } from "./QuizPage";
import { fetchJSON } from "./FetchJSON";

export function QuizApplication() {
  const quizApi = {
    getQuestions: async () => await fetchJSON("/api/questions"),
    getReward: async () => await fetchJSON("/api/fullscore"),
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<FrontPage />} />
          <Route path={"/quiz"} element={<QuizPage quizApi={quizApi} />} />
          <Route path={"/login"} element={<div>loginpage</div>} />
          <Route path={"*"} element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
