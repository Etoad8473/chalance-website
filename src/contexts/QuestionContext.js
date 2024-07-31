import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//Initial state
const questions = {
    isTesting: false,
    index: 0,
    chalanceScore: 0,
    questionList: [
        {sentence: 'I often suggest the groups plans',
            chalance: 1,
            casualness: 0
        },
        {sentence: 'I often do fun things even if I look dumb',
            chalance: 1,
            casualness: 0
        },
        // {sentence: 'I often do things others might consider embarrasing',
        //   chalance: 1,
        //   casualness: 0
        // },
        // {sentence: "I'm always down to hang",
        //   chalance: 1,
        //   casualness: 0
        // },
        // {sentence: 'I will respond in the groupchat even if to let them know I cannot go',
        //   chalance: 1,
        //   casualness: 0
        // },
        // {sentence: 'seeing someone be bad at something (guitar) is embarrassing',
        //   chalance: -1,
        //   casualness: 0
        // },
        // {sentence: 'Ive tried learning a new skill in the last 3 months',
        //   chalance: 1,
        //   casualness: 0
        // },
        // {sentence: 'My friends think Im spontaneous',
        //   chalance: 1,
        //   casualness: 0
        // },
        // {sentence: 'If youre not good at dancing, get out the circle',
        //   chalance: -1,
        //   casualness: 0
        // },
        // {sentence: 'People think Im judgemental',
        //   chalance: -1,
        //   casualness: 0
        // },
        // {sentence: 'Why would I do something Im bad at',
        //   chalance: -1,
        //   casualness: 0
        // },
        // {sentence: 'Ive been annoyed by people that think theyre better than me',
        //   chalance: -1,
        //   casualness: 0
        // },
        // {sentence: 'Its more important to be realistic than to be positive',
        //   chalance: -1,
        //   casualness: 0
        // },
        // {sentence: 'The opposing political party is full of idiots',
        //   chalance: -1,
        //   casualness: 0
        // }
    ]    
}


//create context
export const QuestionContext = createContext(questions);

//provider component
export const QuestionProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,questions);

    return(
        <QuestionContext.Provider value={{questions:state.questions}}>
            {children}
        </QuestionContext.Provider>
    );
}