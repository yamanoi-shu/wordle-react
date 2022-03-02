import React from 'react';
import './style/Keybord.css';

function Key(props) {
  return (
    <button className={'key-'+props.type}>{props.value}</button>
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
          <Key type={this.props.letters.q} value="Q" />
          <Key type={this.props.letters.w} value="W" />
          <Key type={this.props.letters.e} value="E" />
          <Key type={this.props.letters.r} value="R" />
          <Key type={this.props.letters.t} value="T" />
          <Key type={this.props.letters.y} value="Y" />
          <Key type={this.props.letters.u} value="U" />
          <Key type={this.props.letters.i} value="I" />
          <Key type={this.props.letters.o} value="O" />
          <Key type={this.props.letters.p} value="P" />
        </div>
        <div className="row">
          <Key type={this.props.letters.a} value="A" />
          <Key type={this.props.letters.s} value="S" />
          <Key type={this.props.letters.d} value="D" />
          <Key type={this.props.letters.f} value="F" />
          <Key type={this.props.letters.g} value="G" />
          <Key type={this.props.letters.h} value="H" />
          <Key type={this.props.letters.j} value="J" />
          <Key type={this.props.letters.k} value="K" />
          <Key type={this.props.letters.l} value="L" />
        </div>
        <div className="row">
          <EnterKey />
          <Key type={this.props.letters.z} value="Z" />
          <Key type={this.props.letters.x} value="X" />
          <Key type={this.props.letters.c} value="C" />
          <Key type={this.props.letters.v} value="V" />
          <Key type={this.props.letters.b} value="B" />
          <Key type={this.props.letters.n} value="N" />
          <Key type={this.props.letters.m} value="M" />
          <BackspaceKey />
        </div>
      </div>
    )
  }
}
