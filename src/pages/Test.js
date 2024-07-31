import React, { useContext } from "react"
import {Results} from "./Results.js";
import { QuestionContext } from "../contexts/QuestionContext";
import {Question} from "../components/Question.js"

export const Test = ({set})=>{

  const { questions } = useContext(QuestionContext);

  

  return(
    <div>
      <h1>
        Test
      </h1>
        {
          testIsFinished ?
          <Results/> : 
          Question(questions.questionList[questions.currIndex], questionIndex,handleNextQuestion, chalanceScore, setChalanceScore)
        }
      <button onClick={()=>{questions.isTesting = false;}}>Return home</button><br></br>
      {/* <button onClick={()=>{setTestIsFinished(true)}}>end test</button> */}
    </div>
  )
}