import { useState, useContext } from 'react';
import './styles/App.css';
import { Home } from './pages/Home';
import { Test } from './pages/Test';
import { QuestionContext, QuestionProvider } from "./contexts/QuestionContext";
import { Header } from './components/Header';
import Footer from './components/Footer';

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
      <Header/>
      <QuestionProvider>
        {isTesting ? <Test set = {setIsTesting}/> : <Home set = {setIsTesting}/> }
      </QuestionProvider>
      <Footer/>
    </div>
  );
}



export default App;
