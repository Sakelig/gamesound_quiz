import React, { useEffect, useState } from "react";

export function QuizPage({ quizApi }) {
  useEffect(async () => {
    setListOfQuestions(await quizApi.getQuestions());
  }, []);

  const [listOfQuestions, setListOfQuestions] = useState("");

  if (listOfQuestions) {
    console.log("wow its not false");
    console.log(listOfQuestions);
  } else {
    console.log("something went wrong :c");
  }

  return (
    <div>
      <h1>Allo! Welcome to the quiz game</h1>
    </div>
  );
}
