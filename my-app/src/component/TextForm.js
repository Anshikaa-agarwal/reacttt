import React from 'react'
import { useState } from 'react'
import Button from './Button';
import './textForm.css'
import Summary from './Summary';
import About from './About';

export default function TextForm(props) {
  const [text, setText] = useState('')
  console.log(text);

  const handleOnChange = (event) => {
    console.log("handle on change")
    setText(event.target.value)
  }

  const handleUpClick = () => {
    setText(text.toUpperCase());
  }
  const handleDownClick = () => {
    setText(text.toLowerCase());
  }
  const handleClear = () => {
    setText("");
  }
  const myStyle = {
    color: props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : '#373E42'
};
  return (
    <>
      <h4>{props.heading}</h4>
      <div className="mb-3" style={myStyle}>
        <textarea className="form-control" id="textbox" rows="3" placeholder="Enter text here" value={text} onChange={handleOnChange} style={myStyle}></textarea>
      </div>

      <div className="btn-container">
        <Button text="Convert to UpperCase" func ={handleUpClick} color = "blue"></Button>
        <Button text="Convert to LowerCase" func ={handleDownClick} color = "blue"></Button>
        <Button text="Clear" func ={handleClear} color = "red"></Button>
      </div>

      <Summary textinput={text}></Summary>

      <button className="btn btn-primary my-4" onClick={props.toggleMode}>Enable {props.mode==='light' ? "Dark" : "Light"} Mode</button>
    </>
  )
}
