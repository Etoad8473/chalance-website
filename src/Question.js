import { useState, useEffect } from 'react';
// import './App.css';


function Question (q, qIndex, setQIndex, score, setScore) {
    return(
      <div>

        <form>
          <label for="statement">Question {qIndex}: <br></br> {q.sentence}.</label><br></br><br></br>
          
          
          <input type="radio"
            id="sa"
            name="statement"
            value="5"
          /><label for="sa">Strongly Agree</label><br></br>
          
          <input type="radio"
            id="a"
            name="statement"
            value="2"
          /><label for="a">Agree</label><br></br>
          
          <input type="radio"
            id="n"
            name="statement"
            value="0"
          /><label for="n">Neutral</label><br></br>
          
          <input type="radio"
            id="d"
            name="statement"
            value="-2"
          /><label for="d">Disagree</label><br></br>
          
          <input type="radio"
            id="sd"
            name="statement"
            value="-5"
          /><label for="sd">Strongly Disagree</label><br></br>

          <button onClick={()=>{
            setQIndex(qIndex+1)
            // setScore(score + )
          }}>Next Question</button>

        </form>

      </div>
    )
}


export default Question;