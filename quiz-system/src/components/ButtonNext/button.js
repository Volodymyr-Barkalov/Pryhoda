import React from 'react';
import './button.css';

const ButtonNext = ( { next } ) => {

  return (
    <div className="align-right">
  <button
    onClick={next}
    id='btn'
    className="btn btn-lg btn-info my-btn">
    Далее
  </button>
  </div>
)

}



export {
  ButtonNext
}