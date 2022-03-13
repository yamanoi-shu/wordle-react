import React, { useState, useEffect } from 'react'
import './style/App.css';
import { Keyboard } from './Keyboard';
import { Board } from './Board';
import axios from 'axios'

export const App = () => {
  const [letters, setLetters] = useState({
    'Q': 'normal',
    'W': 'normal',
    'E': 'normal',
    'R': 'normal',
    'T': 'normal',
    'Y': 'normal',
    'U': 'normal',
    'I': 'normal',
    'O': 'normal',
    'P': 'normal',
    'A': 'correct',
    'S': 'normal',
    'D': 'normal',
    'F': 'normal',
    'G': 'normal',
    'H': 'normal',
    'J': 'normal',
    'K': 'normal',
    'L': 'normal',
    'Z': 'normal',
    'X': 'normal',
    'C': 'normal',
    'V': 'normal',
    'B': 'normal',
    'N': 'normal',
    'M': 'normal',
  })

  const [answers, setAnswers] = useState([]);

  const [targetAns, setTargetAns] = useState('');

  const [turn, setTurn] = useState(0);

  const answerToLettersList = (str) => {
    var list = str.split('');
    while (list.length < 5) {
      list.push('');
    }
    return list;
  }

  useEffect(() => {
    axios.get("http://localhost:8080/api/get")
    .then((res) => {
      res.list.forEach((elem) => {
        var newAns = {'letters': []}
        for (var i = 0; i < 5; i++) {
          const value = elem[i.toString()].value;
          const type = elem[i.toString()].type;

          var newLetters = letters;

          newAns.push(value);
          if (letters[value] !== 'correct') {
            newLetters[value] = type;
            setLetters(newLetters);
          }
        }
        setAnswers([...answers, newAns]);
        setTurn(res.list.length)
      })
    })
    .catch(err => {
      console.log(err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Wordle-React</h1>
      <Board
        answers={answers}
        targetAns={{'letters': answerToLettersList(targetAns)}}
        turn={turn}
        letters={letters}
      />
      <Keyboard
        letters={letters}
        onClickKey={e => {
            if (targetAns.length != 5) {
              const newTargetAns = targetAns + e;
              setTargetAns(newTargetAns);
            }
          }
        }
      />
    </div>
  )
}

