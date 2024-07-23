import { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';

function App() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isTesting, setIsTesting] = useState(false);
  const [chalanceScore, setChalanceScore] = useState(0);

  const questions = [
    {sentence: 'I often suggest the groups plans',
      chalance: 1,
      casualness: 0
    },
    {sentence: 'I often do fun things even if I look dumb',
      chalance: 1,
      casualness: 0
    },
    {sentence: 'I often do things others might consider embarrasing',
      chalance: 1,
      casualness: 0
    },
    {sentence: "I'm always down to hang",
      chalance: 1,
      casualness: 0
    },
    {sentence: 'I will respond in the groupchat even if to let them know I cannot go',
      chalance: 1,
      casualness: 0
    },
    {sentence: 'seeing someone be bad at something (guitar) is embarrassing',
      chalance: -1,
      casualness: 0
    },
    {sentence: 'Ive tried learning a new skill in the last 3 months',
      chalance: 1,
      casualness: 0
    },
    {sentence: 'My friends think Im spontaneous',
      chalance: 1,
      casualness: 0
    },
    {sentence: 'If youre not good at dancing, get out the circle',
      chalance: -1,
      casualness: 0
    },
    {sentence: 'People think Im judgemental',
      chalance: -1,
      casualness: 0
    },
    {sentence: 'People think Im judgemental',
      chalance: -1,
      casualness: 0
    },
    {sentence: 'Why would I do something Im bad at',
      chalance: -1,
      casualness: 0
    },
    {sentence: 'Ive been annoyed by people that think theyre better than me',
      chalance: -1,
      casualness: 0
    },
    {sentence: 'Its more important to be realistic than to be positive',
      chalance: -1,
      casualness: 0
    },
    {sentence: 'Its more important to be realistic than to be positive',
      chalance: -1,
      casualness: 0
    },
    {sentence: 'The opposing political party is full of idiots',
      chalance: -1,
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
        {Question(questions[questionIndex], questionIndex,setQuestionIndex, chalanceScore, setChalanceScore)}
        <button onClick={()=>{set(false)}}>Return home</button>
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
      <p>Chalance Score: {chalanceScore}</p>
      
      {isTesting ? <Testing set = {setIsTesting}/> : <Home set = {setIsTesting}/> }
    </div>
  );
}



export default App;
