import { useState, useEffect, useContext } from 'react';
import { QuestionContext, QuestionProvider } from '../contexts/QuestionContext';


function Question () {

  const[inputValue, setInputValue] = useState(null);

  const {questions, nextQuestion} = useContext(QuestionContext);

  const handleRadioChange = (event) =>{
    setInputValue(event.target.value);
  }

  const handleClick = () =>{
    if(inputValue !== null){
      nextQuestion(inputValue * questions.questionList[questions.index].chalance);
      setInputValue(null); //reset for next question
    }
  }

  return(
    <div>

      <form>
        <label htmlFor="statement"> Question {questions.index + 1}: <br></br>
         {questions.questionList[questions.index].sentence}.</label><br></br>
         <br></br>
        
        
        <input type="radio"
          id="sa"
          name="statement"
          onChange={handleRadioChange}
          checked={inputValue==='5'}
          value="5"
        /><label htmlFor="sa">Strongly Agree</label><br></br>
        
        <input type="radio"
          id="a"
          name="statement"
          onChange={handleRadioChange}
          checked={inputValue==='2'}
          value="2"
        /><label htmlFor="a">Agree</label><br></br>
        
        <input type="radio"
          id="d"
          name="statement"
          onChange={handleRadioChange}
          checked={inputValue==='-2'}
          value="-2"
        /><label htmlFor="d">Disagree</label><br></br>
        
        <input type="radio"
          id="sd"
          name="statement"
          onChange={handleRadioChange}
          checked={inputValue==='-5'}
          value="-5"
        /><label htmlFor="sd">Strongly Disagree</label><br></br>

        <button type='button' onClick={handleClick}>Next Question</button>

      </form>

    </div>
  )
}


export default Question;