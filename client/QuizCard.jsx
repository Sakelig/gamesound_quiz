import * as React from "react";

export function QuizCard({ sound, handler, answer, right, inputName }) {
  return (
    <div>
      <h4>What game is this sound from?</h4>
      <audio controls={true}>
        <source src={sound} type="audio/mp3" />
      </audio>
      <br />
      <input name={inputName} onChange={handler} />
      <label> {right ? answer : "wrong"} </label>
    </div>
  );
}
