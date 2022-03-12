import React from 'react';
import './style/App.css';
import Keybord from './Keybord';
import Board from './Board';

export default class App extends React.Component {
  constructor(props) {
    const emptyLetters = Array(5).fill('');
    super(props);
    this.state = {
      letters: {
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
      },
      answers: [{
        'letters': Array(5).fill(''),
      }],
      turn: 0,
    }
    for (var i = 0; i < 5; i++) {
      this.state.answers.push({'letters': Array(5).fill('')});
    }

    try {
      const ansList = await axios.get("http://localhost:8080/api/get");
      var cnt = 0;
      ansList.list.forEach((elem) => {
        for (var i = 0; i < 5; i++) {
          const value = elem[i.toString()].value;
          const type = elem[i.toString()].type;

          this.state.answers[cnt].letters[i] = value;
          if (this.state.letters[value] != 'correct') {
            this.state.letters[value] = type;
          }
        }
        cnt++;
      })
    } catch(err => {
      console.log(err);
    })
    this.state.turn = cnt;
  }

  async set
  render() {
    this.state.answers[0].letters[1] = 'A';
    return (
      <div>
        <h1>Wordle-React</h1>
        <Board
          answers={this.state.answers}
          letters={this.state.letters}
        />
        <Keybord
          letters={this.state.letters}
        />
      </div>
    )
  }
}

