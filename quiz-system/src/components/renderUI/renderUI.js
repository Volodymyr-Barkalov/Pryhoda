import React from 'react';
import { ButtonNext } from '../ButtonNext';
import './renderUI.css';

const Quiz = ({ task, answers, id, btn, write }) => {
  return (<div className='main-div'>
    <h3 className="text-center " >
      {task}
    </h3>
    <div >
      <ul
        onClick={(e) => { write(e.target, id) }}
        className="list-group my-group">
        {answers}
      </ul>
    </div >
    <ButtonNext next={btn} />
  </div >)
}

const Result = ({ answered }) => {
  return (<div className='main-div my-result'>
    <h3 className="text-center my-vertical">
      {`Вы набрали ${answered} правильных ответов`}
    </h3>
  </div>)
}

const Warning = () => {
  return (
    <div className='main-div  my-result'>
      <h3 className='text-center my-vertical'>
        Не так быстро! вы пропустили все вопросы
  </h3>
    </div>
  )
}

export {
  Quiz,
  Result,
  Warning
}