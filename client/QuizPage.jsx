import React, { useEffect, useState } from "react";
import { QuizCard } from "./QuizCard";
import sound1 from "url:../soundData/ds-bonefire.mp3";
import sound2 from "url:../soundData/E.M.M.I.Sound_Effects.mp3";
import sound3 from "url:../soundData/pokemon_capture_sound_effect.mp3";
import sound4 from "url:../soundData/BGM_EX4_Event_05.mp3";
import sound5 from "url:../soundData/AmongUs_report_body.mp3";
import sound6 from "url:../soundData/Mario_Yahoo_SoundEffect.mp3";
import sound7 from "url:../soundData/pokemon-red_blue_yellow-item-found-sound-effect.mp3";
import sound8 from "url:../soundData/lol_Welcome_Rift.mp3";

export function QuizPage({ quizApi }) {
  function testForInputNumber(number) {
    switch (number) {
      case 0:
        return inputCollection.input1.toLowerCase();
      case 1:
        return inputCollection.input2.toLowerCase();
      case 2:
        return inputCollection.input3.toLowerCase();
      case 3:
        return inputCollection.input4.toLowerCase();
      case 4:
        return inputCollection.input5.toLowerCase();
      case 5:
        return inputCollection.input6.toLowerCase();
      case 6:
        return inputCollection.input7.toLowerCase();
      case 7:
        return inputCollection.input8.toLowerCase();
    }
  }

  let count = 0;
  const [soundList, setSoundList] = useState([
    sound1,
    sound2,
    sound3,
    sound4,
    sound5,
    sound6,
    sound7,
    sound8,
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
      for (let i = 0; i < listOfQuestions.length; i++) {
        for (let j = 0; j < listOfQuestions[i].answers.length; j++) {
          if (
            testForInputNumber(i) ===
              listOfQuestions[i].answers[j].toLowerCase() &&
            answerCollection[i] === false
          ) {
            console.log("test");
            setAnswerCollection(answerCollection, (answerCollection[i] = true));
            setCount((prevState) => prevState + 1);
          }
        }
      }

      console.log(answerCollection + " pong");
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
