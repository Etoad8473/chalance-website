import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isTesting, setIsTesting] = useState(false);
  const [chalanceScore, setChalanceScore] = useState(0);

  const questions = [
    {question: 'I often suggest the groups plans',
      chalance: 5,
      casualness: 0
    },
    {question: 'I do things even if I look dumb',
      chalance: 5,
      casualness: 0
    },
    {question: 'I do things others might consider embarrasing',
      chalance: 5,
      casualness: 0
    },
    {question: "Im always down to hang",
      chalance: 5,
      casualness: 0
    },
    {question: 'I will respond in the groupchat even if to let them know I cannot go',
      chalance: 5,
      casualness: 0
    },
    {question: 'seeing someone be bad at something (guitar) is embarrassing',
      chalance: -5,
      casualness: 0
    },
    {question: 'Ive tried learning a new skill in the last 3 months',
      chalance: 5,
      casualness: 0
    },
    {question: 'My friends think Im spontaneous',
      chalance: 5,
      casualness: 0
    },
    {question: 'If youre not good at dancing, get out the circle',
      chalance: -5,
      casualness: 0
    },
    {question: 'People think Im judgemental',
      chalance: -5,
      casualness: 0
    },
    {question: 'People think Im judgemental',
      chalance: -5,
      casualness: 0
    },
    {question: 'Why would I do something Im bad at',
      chalance: -5,
      casualness: 0
    },
    {question: 'Ive been annoyed by people that think theyre better than me',
      chalance: -5,
      casualness: 0
    },
    {question: 'Its more important to be realistic than to be positive',
      chalance: -5,
      casualness: 0
    },
    {question: 'Its more important to be realistic than to be positive',
      chalance: -5,
      casualness: 0
    },
    {question: 'The opposing political party is full of idiots',
      chalance: -5,
      casualness: 0
    }

  ]

  const Home = ({set})=>{
    return(
    <div>  
      <h1>Chalance!</h1>
      <iframe width="400" height="300" src="https://www.youtube.com/embed/UF8m3vNDezY?si=9yK0ieN6xwdXoxXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      <button onClick={()=>{set(true)}}>Begin test</button>
    </div>
    )
  }

  const Testing = ({set})=>{
    return(
      <div>
        <h1>
          Test
        </h1>
        {Question(questions[questionIndex].question, chalanceScore, setChalanceScore)}
        <button onClick={()=>{set(false)}}>Return home</button>
      </div>
    )
  }

  const Question = (title, score, setScore) => {
    return(
      <div>
        <label for="questionInput">{title}</label>
        <input type="range" id="questionInput" name ="sumn" list="values"/>

        <datalist id="values">
          <option value="-5" label="I could never"></option>
          <option value="0"></option>
          <option value="5" label="me asf"></option>
        </datalist>
      </div>
    )
  }

  const Results = () => {
    return (
      <div>

      </div>
    )
  }

  return (
    <div className="App">
      <button onClick={()=>{setQuestionIndex(questionIndex-1)}}>-</button>
      <p>{questionIndex}</p>
      <button onClick={()=>{setQuestionIndex(questionIndex+1)}}>+</button>
      
      {isTesting ? <Testing set = {setIsTesting}/> : <Home set = {setIsTesting}/> }
    </div>
  );
}



export default App;
