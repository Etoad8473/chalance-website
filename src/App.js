import { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';
import { Home } from './pages/Home';
import { Results } from './pages/Results';
import { Test } from './pages/Test';

function App() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isTesting, setIsTesting] = useState(false);
  const [chalanceScore, setChalanceScore] = useState(0);
  const [testIsFinished, setTestIsFinished] = useState(false);




 



  const handleNextQuestion = () => {
    if(questionIndex<questions.length-1){
      setQuestionIndex(questionIndex+1);
    }
    else{
      setTestIsFinished(true);
    }
  }

  return (
    <div className="App">
      <button onClick={()=>{setQuestionIndex(questionIndex-1)}}>-</button>
      <p>{questionIndex}</p>
      <p>Length of test: {questions.length}</p>
      <button onClick={()=>{setQuestionIndex(questionIndex+1)}}>+</button>
      <p>Chalance Score: {chalanceScore}</p>
      
      {isTesting ? <Test set = {setIsTesting}/> : <Home set = {setIsTesting}/> }
    </div>
  );
}



export default App;
