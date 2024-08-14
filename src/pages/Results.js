import React, { useContext } from "react";
import {Header} from '../components/Header';

import { QuestionContext, Questions } from "../contexts/QuestionContext";

export const Results = () => {

    const {questions} = useContext(QuestionContext);

    return (
      <div>
        <Header/>
        <h1>Finished!!!</h1>
        <p>Chalance Score: {questions.chalanceScore}</p>
      </div>
    )
  }