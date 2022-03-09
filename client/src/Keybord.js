import React from 'react';
import './style/Keybord.css';

function Key(props) {
  let isAvailable = props.type === 'absent';
  return (
    <button
      className={'key-'+props.type}
      disabled={isAvailable}
    >
      {props.value}
    </button>
  );
}

function EnterKey(props) {
  return (
    <button className="key-enter"> Enter </button>
  );
}

function BackspaceKey(props) {
  return (
    <button className="key-backspace"> {"<<"} </button>
  );
}

export default class Keyboard extends React.Component {
  render() {
    return (
      <div className="keybord">
        <div className="row">
          <Key type={this.props.letters.Q} value="Q" />
          <Key type={this.props.letters.W} value="W" />
          <Key type={this.props.letters.E} value="E" />
          <Key type={this.props.letters.R} value="R" />
          <Key type={this.props.letters.T} value="T" />
          <Key type={this.props.letters.Y} value="Y" />
          <Key type={this.props.letters.U} value="U" />
          <Key type={this.props.letters.I} value="I" />
          <Key type={this.props.letters.O} value="O" />
          <Key type={this.props.letters.P} value="P" />
        </div>
        <div className="row">
          <Key type={this.props.letters.A} value="A" />
          <Key type={this.props.letters.S} value="S" />
          <Key type={this.props.letters.D} value="D" />
          <Key type={this.props.letters.F} value="F" />
          <Key type={this.props.letters.G} value="G" />
          <Key type={this.props.letters.H} value="H" />
          <Key type={this.props.letters.J} value="J" />
          <Key type={this.props.letters.K} value="K" />
          <Key type={this.props.letters.L} value="L" />
        </div>
        <div className="row">
          <EnterKey />
          <Key type={this.props.letters.Z} value="Z" />
          <Key type={this.props.letters.X} value="X" />
          <Key type={this.props.letters.C} value="C" />
          <Key type={this.props.letters.V} value="V" />
          <Key type={this.props.letters.B} value="B" />
          <Key type={this.props.letters.N} value="N" />
          <Key type={this.props.letters.M} value="M" />
          <BackspaceKey />
        </div>
      </div>
    )
  }
}
