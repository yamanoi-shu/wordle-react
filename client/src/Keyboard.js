import React from 'react';
import './style/Keybord.css';

export const Key = (props) => {
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

const EnterKey = (props) => {
  return (
    <button className="key-enter"> Enter </button>
  );
}

const BackspaceKey = (props) => {
  return (
    <button className="key-backspace"> {"<<"} </button>
  );
}

export const Keyboard = (props) => {
  return (
    <div className="keyboard">
      <div className="row">
        <Key type={props.letters.Q} value="Q" />
        <Key type={props.letters.W} value="W" />
        <Key type={props.letters.E} value="E" />
        <Key type={props.letters.R} value="R" />
        <Key type={props.letters.T} value="T" />
        <Key type={props.letters.Y} value="Y" />
        <Key type={props.letters.U} value="U" />
        <Key type={props.letters.I} value="I" />
        <Key type={props.letters.O} value="O" />
        <Key type={props.letters.P} value="P" />
      </div>
      <div className="row">
        <Key type={props.letters.A} value="A" />
        <Key type={props.letters.S} value="S" />
        <Key type={props.letters.D} value="D" />
        <Key type={props.letters.F} value="F" />
        <Key type={props.letters.G} value="G" />
        <Key type={props.letters.H} value="H" />
        <Key type={props.letters.J} value="J" />
        <Key type={props.letters.K} value="K" />
        <Key type={props.letters.L} value="L" />
      </div>
      <div className="row">
        <EnterKey />
        <Key type={props.letters.Z} value="Z" />
        <Key type={props.letters.X} value="X" />
        <Key type={props.letters.C} value="C" />
        <Key type={props.letters.V} value="V" />
        <Key type={props.letters.B} value="B" />
        <Key type={props.letters.N} value="N" />
        <Key type={props.letters.M} value="M" />
        <BackspaceKey />
      </div>
    </div>
  )
}
