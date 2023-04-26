import { useState } from "react";
import "./index.css"

function App() {

  var question = [
    {
      "question": "What is the scientific name of a butterfly?",
      "answers": [
        "Apis",
        "Coleoptera",
        "Formicidae",
        "Rhopalocera"
      ],
      "correctIndex": 3
    },
    {
      "question": "How hot is the surface of the sun?",
      "answers": [
        "1,233 K",
        "5,778 K",
        "12,130 K",
        "101,300 K"
      ],
      "correctIndex": 1
    },
    {
      "question": "Who are the actors in The Internship?",
      "answers": [
        "Ben Stiller, Jonah Hill",
        "Courteney Cox, Matt LeBlanc",
        "Kaley Cuoco, Jim Parsons",
        "Vince Vaughn, Owen Wilson"
      ],
      "correctIndex": 3
    },
    {
      "question": "What is the capital of Spain?",
      "answers": [
        "Berlin",
        "Buenos Aires",
        "Madrid",
        "San Juan"
      ],
      "correctIndex": 2
    },
    {
      "question": "What are the school colors of the University of Texas at Austin?",
      "answers": [
        "Black, Red",
        "Blue, Orange",
        "White, Burnt Orange",
        "White, Old gold, Gold"
      ],
      "correctIndex": 2
    },
    {
      "question": "What is 70 degrees Fahrenheit in Celsius?",
      "answers": [
        "18.8889",
        "20",
        "21.1111",
        "158"
      ],
      "correctIndex": 2
    },
    {
      "question": "When was Mahatma Gandhi born?",
      "answers": [
        "October 2, 1869",
        "December 15, 1872",
        "July 18, 1918",
        "January 15, 1929"
      ],
      "correctIndex": 0
    },
    {
      "question": "How far is the moon from Earth?",
      "answers": [
        "7,918 miles (12,742 km)",
        "86,881 miles (139,822 km)",
        "238,400 miles (384,400 km)",
        "35,980,000 miles (57,910,000 km)"
      ],
      "correctIndex": 2
    },
    {
      "question": "What is 65 times 52?",
      "answers": [
        "117",
        "3120",
        "3380",
        "3520"
      ],
      "correctIndex": 2
    },
    {
      "question": "How tall is Mount Everest?",
      "answers": [
        "6,683 ft (2,037 m)",
        "7,918 ft (2,413 m)",
        "19,341 ft (5,895 m)",
        "29,029 ft (8,847 m)"
      ],
      "correctIndex": 3
    },
    {
      "question": "When did The Avengers come out?",
      "answers": [
        "May 2, 2008",
        "May 4, 2012",
        "May 3, 2013",
        "April 4, 2014"
      ],
      "correctIndex": 1
    },
    {
      "question": "What is 48,879 in hexidecimal?",
      "answers": [
        "0x18C1",
        "0xBEEF",
        "0xDEAD",
        "0x12D591"
      ],
      "correctIndex": 1
    }
  ]

  const [quest, setQuest] = useState(0)
  const [trueResp, setTrueResp] = useState(0)
  const [falseResp, setFalseResp] = useState(0)
  const [score, setScore] = useState(false)

  const clickRespons = (id) => {

    if (quest + 1 < question.length) {
      var getResp = question[quest].correctIndex
      if (getResp === id) {
        setTrueResp(trueResp + 1)
      } else {
        setFalseResp(falseResp + 1)
      }
      setQuest(quest + 1)
    } else {

      setScore(true)
      setQuest(0)
      // setTrueResp(trueResp = 0)
    }
  }

  const restart = () => {
    setScore(false)
    setQuest(0)
    setTrueResp(0)
    setFalseResp(0)
    setScore(0)
  }
  return (
    <div className="App">
      <h1 className="title">QUIZ</h1>

      {(score) ?

        <div className="main-quiz">
          <h3 className="score">
            Your score is {trueResp}
          </h3>

          <button className="restart" onClick={() => restart()}>Restart</button>
        </div>
        :

        <div className="main-quiz">
          <div className="question">
            {question[quest].question}
          </div>
          <div className="answer">
            {question[quest].answers.map((res, id) => {
              return (
                <button onClick={() => clickRespons(id)}>
                  {res}
                </button>
              )
            })}
          </div>
          <div className="count-answ">
            <div className="ans-true">
              True: {trueResp}
            </div>
            <div className="ans-false">
              False: {falseResp}
            </div>

          </div>
          <div className="count-quest">
            Question: {quest + 1}/{question.length + 1}
          </div>
        </div>

      }

    </div>
  );
}

export default App;
