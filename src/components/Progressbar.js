import { useContext } from 'react'
import React from 'react'
import { QuestionContext } from '../contexts/QuestionContext'

export const Progressbar = () => {

  const {questions} = useContext(QuestionContext);
  // const questions = context.questions;

  return (
    <div>
      <p>Question index: {questions.index}</p>
      <p>Length of test: {questions['questionList'].length}</p>
      {console.log(questions)}
      <p>Chalance Score: {questions['chalanceScore']}</p>
    </div>
  )
}