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
      history: [],
    }
    for (var i = 0; i < 5; i++) {
      this.state.answers.push({'letters': Array(5).fill('')});
      }
    }
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

