import React, { useEffect, useState } from "react";
import { QuizCard } from "./QuizCard";
import sound1 from "url:../soundData/ds-bonefire.mp3";
import sound2 from "url:../soundData/E.M.M.I.Sound_Effects.mp3";
import sound3 from "url:../soundData/pokemon_capture_sound_effect.mp3";
import sound4 from "url:../soundData/BGM_EX4_Event_05.mp3";
import sound5 from "url:../soundData/AmongUs_report_body.mp3";

export function QuizPage({ quizApi }) {
  let count = 0;
  const [soundList, setSoundList] = useState([
    sound1,
    sound2,
    sound3,
    sound4,
    sound5,
  ]);
  const [inputCollection, setInputCollection] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
  });
  const [answerCollection, setAnswerCollection] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [listOfQuestions, setListOfQuestions] = useState("");
  let questions = "";
  const [Count, setCount] = useState(0);

  //Handles mongoDB call
  useEffect(async () => {
    setListOfQuestions(await quizApi.getQuestions());
  }, []);

  //handles input from user
  useEffect(() => {
    console.log("ping");
    if (listOfQuestions) {
      for (let i = 0; i < listOfQuestions[0].answers.length; i++) {
        if (
          inputCollection.input1.toLowerCase() ===
            listOfQuestions[0].answers[i].toLowerCase() &&
          answerCollection[0] === false
        ) {
          setAnswerCollection(answerCollection, (answerCollection[0] = true));
          setCount((prevState) => prevState + 1);
          console.log("this happend again");
          console.log(answerCollection[0]);
        }
      }

      for (let i = 0; i < listOfQuestions[1].answers.length; i++) {
        if (
          inputCollection.input2.toLowerCase() ===
            listOfQuestions[1].answers[i].toLowerCase() &&
          answerCollection[1] === false
        ) {
          setAnswerCollection(answerCollection, (answerCollection[1] = true));
          setCount((prevState) => prevState + 1);
        }
      }

      for (let i = 0; i < listOfQuestions[2].answers.length; i++) {
        if (
          inputCollection.input3.toLowerCase() ===
            listOfQuestions[2].answers[i].toLowerCase() &&
          answerCollection[2] === false
        ) {
          setAnswerCollection(answerCollection, (answerCollection[2] = true));
          setCount((prevState) => prevState + 1);
        }
      }

      for (let i = 0; i < listOfQuestions[3].answers.length; i++) {
        if (
          inputCollection.input4.toLowerCase() ===
            listOfQuestions[3].answers[i].toLowerCase() &&
          answerCollection[3] === false
        ) {
          setAnswerCollection(answerCollection, (answerCollection[3] = true));
          setCount((prevState) => prevState + 1);
        }
      }

      for (let i = 0; i < listOfQuestions[4].answers.length; i++) {
        if (
          inputCollection.input5.toLowerCase() ===
            listOfQuestions[4].answers[i].toLowerCase() &&
          answerCollection[4] === false
        ) {
          setAnswerCollection(answerCollection, (answerCollection[4] = true));
          setCount((prevState) => prevState + 1);
        }
      }

      console.log(answerCollection + "pong");
    }
  }, [inputCollection]);

  if (listOfQuestions) {
    questions = listOfQuestions.map((question) => {
      count++;
      return (
        <div key={question.id}>
          <QuizCard
            handler={handleInput}
            inputName={"input" + count}
            answer={question.gamename}
            sound={soundList[count - 1]}
            right={answerCollection[count - 1]}
          />
        </div>
      );
    });
  } else {
    console.log("something went wrong :c");
  }

  function handleInput(e) {
    setInputCollection({
      ...inputCollection,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h1>Allo! Welcome to the quiz game</h1>{" "}
      <h2>
        {" "}
        {Count} of {listOfQuestions.length}
      </h2>
      <div>{questions}</div>
    </div>
  );
}
