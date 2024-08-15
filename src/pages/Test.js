import React, { useContext } from "react"
import {Results} from "./Results.js";
import { QuestionContext } from "../contexts/QuestionContext";
import Question from "../components/Question.js"
import { Progressbar } from "../components/Progressbar.js";
import {Header} from '../components/Header';

export const Test = ({set})=>{

  const {questions} = useContext(QuestionContext);
  // console.log(questions);
  

  return(
    <div>
      <Header/>
      <Progressbar/>

      <h1>
        Test
      </h1>
        {
          // console.log(questions)
          questions['index'] >= questions.questionList.length ? <Results/> : <Question/>
        }
      {/* <button onClick={()=>{questions.isTesting = false;}}>Return home</button><br></br> */}
      {/* <button onClick={()=>{setTestIsFinished(true)}}>end test</button> */}
    </div>
  )
}