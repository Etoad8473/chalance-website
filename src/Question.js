import { useState, useEffect } from 'react';
// import './App.css';


function Question (q, qIndex, nextQuestion, score, setScore) {


  return(
    <div>

      <form>
        <label htmlFor="statement">Question {qIndex}: <br></br>
         {q.sentence}.</label><br></br>
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

        <button onClick={()=>{
            let ansVal = parseInt(document.querySelector('input[name="statement"]:checked').value);
            setScore(score + q.chalance * ansVal);
            nextQuestion();
        }}>Next Question</button>

      </form>

    </div>
  )
}


export default Question;