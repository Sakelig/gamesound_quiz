import * as React from "react";
import { Card, Col } from "react-bootstrap";

export function QuizCard({ sound, handler, answer, right, inputName }) {
  return (
    <div>
      <Col sm={{ span: 4, offset: 4 }}>
        <Card className={"m-4"}>
          <h4 className={"m-auto"}>What game is this sound from?</h4>
          <audio controls={true} className={"m-auto mt-3"}>
            <source src={sound} type="audio/mp3" />
          </audio>
          <br />
          <input
            name={inputName}
            onChange={handler}
            placeholder={"Write here.."}
          />
          <label className={"text-center"}> {right ? answer : "wrong"} </label>
        </Card>
      </Col>
    </div>
  );
}
