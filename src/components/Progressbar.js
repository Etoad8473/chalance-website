import { useContext } from 'react'
import React from 'react'
import { QuestionContext } from '../contexts/QuestionContext'

export const Progressbar = () => {

  const {questions} = useContext(QuestionContext);
  const progress = () =>{
    return (questions.index/questions.questionList.length)*100
  }
  console.log(progress());
  const progressBarStyle = {
    
  };

  return (
    <div className='progress-bar'>
      {/* <p>Question index: {questions.index}</p>
      <p>Length of test: {questions['questionList'].length}</p>
      <p>Chalance Score: {questions['chalanceScore']}</p> */}
      <div style={{
        width: `${progress()}%`,
        backgroundColor: '#e43d12',
        transition: 'width 0.3s ease',
        padding:'1px 0'
      }}></div>
    </div>
  )
}