import React from 'react';
import './summary.css'
export default function Summary(props) {

  return (
    <div className='summary'>
      <h4>Text Summary</h4>

      <div className="summary-item">
        <h6>Preview:</h6>
        <span>  {props.textinput}</span>
      </div>

      <div className="summary-item">
        <h6>Count:</h6>
        <span>  Words: {props.textinput.trim().split(/\s+/).filter(Boolean).length}, Characters: {props.textinput.length}</span>
      </div>

      <div className="summary-item">
        <h6>Upper case:</h6>
        <span>  {props.textinput.toUpperCase()}</span>
      </div>

      <div className="summary-item">
        <h6>Lower case:</h6>
        <span>  {props.textinput.toLowerCase()}</span>
      </div>
    </div>
  );
}
