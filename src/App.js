import { useState, useEffect, useContext } from 'react';
import './styles/App.css';
import {Question} from './components/Question';
import { Home } from './pages/Home';
import { Test } from './pages/Test';
import { QuestionContext } from "./contexts/QuestionContext";

function App() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isTesting, setIsTesting] = useState(false);
  const [chalanceScore, setChalanceScore] = useState(0);
  const [testIsFinished, setTestIsFinished] = useState(false);

  const questions = useContext(QuestionContext);
  // console.log(questions);

 



  const handleNextQuestion = () => {
    if(questions['index'] < questions['questionList'].length-1){
      // setQuestionIndex(questionIndex+1);
    }
    else{
      // setTestIsFinished(true);
    }
  }



  return (
    <div className="App">
      {/* <button onClick={()=>{setQuestionIndex(questionIndex-1)}}>-</button> */}
      <p>{questions['index']}</p>
      <p>Length of test: {questions['questionList'].length}</p>
      {/* <button onClick={()=>{setQuestionIndex(questionIndex+1)}}>+</button> */}
      <p>Chalance Score: {questions['chalanceScore']}</p>
      
      {isTesting ? <Test set = {setIsTesting}/> : <Home set = {setIsTesting}/> }
    </div>
  );
}



export default App;
