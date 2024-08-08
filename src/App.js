import { useState, useEffect, useContext } from 'react';
import './styles/App.css';
import {Question} from './components/Question';
import { Home } from './pages/Home';
import { Test } from './pages/Test';
import { QuestionContext, QuestionProvider } from "./contexts/QuestionContext";
import {Progressbar} from "./components/Progressbar"
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
      <QuestionProvider>
        <Progressbar/>
        {/* <button onClick={()=>{setQuestionIndex(questionIndex-1)}}>-</button> */}
        {/* <button onClick={()=>{setQuestionIndex(questionIndex+1)}}>+</button> */}
        
        {isTesting ? <Test set = {setIsTesting}/> : <Home set = {setIsTesting}/> }
      </QuestionProvider>
    </div>
  );
}



export default App;
