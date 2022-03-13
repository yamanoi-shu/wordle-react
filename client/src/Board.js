import React from 'react';
import './style/Board.css';

export const Pannel = (props) => {
  var value = props.value;
  var type = props.letters[value] || 'normal';
  if (type === 'absent') {
    type = 'normal';
  }
  return (
    <div className={'pannel-' + type}>
      <p>{props.value}</p>
    </div>
  );
}

export const Board = (props) => {
  const lettersList = (answer) => {
    var list =[];
    for (var p in answer.letters) {
      list.push(<Pannel value={answer.letters[p]} letters={props.letters} />)
    }
    return list;
  }
  return (
    <div className="board">
    {(() => {
      var list = [];
      var ansNum = props.answers.length;
      props.answers.forEach(answer => {
        list.push(<div className='row'>{lettersList(answer)}</div>);
      });
      list.push(<div className='row'>{lettersList(props.targetAns)}</div>);
      console.log(list);
      for (var i = 0; i < 5 - ansNum; i++) {
        list.push(<div className='row'>{lettersList({'letters': Array(5).fill('')})}</div>);
      }
      console.log(list);
      return list;
    })()}
    </div>
  );

}
