import React from "react"

export const Test = ({set})=>{
    return(
      <div>
        <h1>
          Test
        </h1>
          {
            testIsFinished ?
            <Results/> : 
            Question(questions[questionIndex], questionIndex,handleNextQuestion, chalanceScore, setChalanceScore)
          }
        <button onClick={()=>{set(false)}}>Return home</button><br></br>
        <button onClick={()=>{setTestIsFinished(true)}}>end test</button>
      </div>
    )
}