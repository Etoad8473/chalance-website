import React, { useContext } from "react";
import { QuestionContext, Questions } from "../contexts/QuestionContext";

export const Results = () => {

    const {questions} = useContext(QuestionContext);

    return (
      <div>
        <h1>Finished!!!</h1>
        <p>Chalance Score: {questions.chalanceScore}</p>
      </div>
    )
  }