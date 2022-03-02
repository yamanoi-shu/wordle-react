import React from 'react';
import './style/App.css';
import Keybord from './Keybord';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: {
        'q': 'normal',
        'w': 'normal',
        'e': 'normal',
        'r': 'normal',
        't': 'normal',
        'y': 'normal',
        'u': 'normal',
        'i': 'normal',
        'o': 'normal',
        'p': 'normal',
        'a': 'normal',
        's': 'normal',
        'd': 'normal',
        'f': 'normal',
        'g': 'normal',
        'h': 'normal',
        'j': 'normal',
        'k': 'normal',
        'l': 'normal',
        'z': 'normal',
        'x': 'normal',
        'c': 'normal',
        'v': 'normal',
        'b': 'normal',
        'n': 'normal',
        'm': 'normal',
      },
    }
  }
  render() {
    return (
      <Keybord
        letters={this.state.letters}
      />
    )
  }
}

