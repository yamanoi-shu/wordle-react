import React from 'react';
import './style/Board.css';

function Pannel(props) {
  var value = props.value;
  var type = props.letters[value] || 'normal';
  console.log(type);
  if (type === 'absent') {
    type = 'normal';
  }
  return (
    <div className={'pannel-' + type}>
      <p>{props.value}</p>
    </div>
  );
}

export default class Board extends React.Component {
  lettersList(answer) {
    var list =[];
    for (var p in answer.letters) {
      list.push(<Pannel value={answer.letters[p]} letters={this.props.letters} />)
    }
    return list;
  }
  render() {
    return (
      <div className="board">
      {(() => {
        var list = [];
        this.props.answers.map((answer) => {
          list.push(<div className='row'>{this.lettersList(answer)}</div>)
        });
        return list;
      })()}
      </div>
    );
  }
}
