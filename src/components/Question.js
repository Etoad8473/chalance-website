import { useState, useEffect, useContext } from 'react';
import { QuestionContext, QuestionProvider } from '../contexts/QuestionContext';


function Question () {

  const {questions, nextQuestion} = useContext(QuestionContext);

  const handleNextQuestion = () =>{
    nextQuestion();
  }

  return(
    <div>

      <form>
        {/* <label htmlFor="statement"> Question {questions.index + 1}: <br></br>
         {questions.questionList[questions.index].sentence}.</label><br></br> */}
         <br></br>
        
        
        <input type="radio"
          id="sa"
          name="statement"
          value="5"
        /><label htmlFor="sa">Strongly Agree</label><br></br>
        
        <input type="radio"
          id="a"
          name="statement"
          value="2"
        /><label htmlFor="a">Agree</label><br></br>
        
        <input type="radio"
          id="d"
          name="statement"
          value="-2"
        /><label htmlFor="d">Disagree</label><br></br>
        
        <input type="radio"
          id="sd"
          name="statement"
          value="-5"
        /><label htmlFor="sd">Strongly Disagree</label><br></br>

        <button type='button' onClick={handleNextQuestion}>Next Question</button>

      </form>

    </div>
  )
}


export default Question;