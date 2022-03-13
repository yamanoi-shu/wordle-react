import React from 'react';
import './style/Keyboard.css';

export const Key = (props) => {
  let isAvailable = props.type === 'absent';
  return (
    <button
      className={'key-'+props.type}
      disabled={isAvailable}
      onClick={e => props.clickFunc(props.value)}
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
        <Key type={props.letters.Q} value="Q" clickFunc={props.onClickKey} />
        <Key type={props.letters.W} value="W" clickFunc={props.onClickKey} />
        <Key type={props.letters.E} value="E" clickFunc={props.onClickKey} />
        <Key type={props.letters.R} value="R" clickFunc={props.onClickKey} />
        <Key type={props.letters.T} value="T" clickFunc={props.onClickKey} />
        <Key type={props.letters.Y} value="Y" clickFunc={props.onClickKey} />
        <Key type={props.letters.U} value="U" clickFunc={props.onClickKey} />
        <Key type={props.letters.I} value="I" clickFunc={props.onClickKey} />
        <Key type={props.letters.O} value="O" clickFunc={props.onClickKey} />
        <Key type={props.letters.P} value="P" clickFunc={props.onClickKey} />
      </div>
      <div className="row">
        <Key type={props.letters.A} value="A" clickFunc={props.onClickKey} />
        <Key type={props.letters.S} value="S" clickFunc={props.onClickKey} />
        <Key type={props.letters.D} value="D" clickFunc={props.onClickKey} />
        <Key type={props.letters.F} value="F" clickFunc={props.onClickKey} />
        <Key type={props.letters.G} value="G" clickFunc={props.onClickKey} />
        <Key type={props.letters.H} value="H" clickFunc={props.onClickKey} />
        <Key type={props.letters.J} value="J" clickFunc={props.onClickKey} />
        <Key type={props.letters.K} value="K" clickFunc={props.onClickKey} />
        <Key type={props.letters.L} value="L" clickFunc={props.onClickKey} />
      </div>
      <div className="row">
        <EnterKey />
        <Key type={props.letters.Z} value="Z" clickFunc={props.onClickKey} />
        <Key type={props.letters.X} value="X" clickFunc={props.onClickKey} />
        <Key type={props.letters.C} value="C" clickFunc={props.onClickKey} />
        <Key type={props.letters.V} value="V" clickFunc={props.onClickKey} />
        <Key type={props.letters.B} value="B" clickFunc={props.onClickKey} />
        <Key type={props.letters.N} value="N" clickFunc={props.onClickKey} />
        <Key type={props.letters.M} value="M" clickFunc={props.onClickKey} />
        <BackspaceKey />
      </div>
    </div>
  )
}
