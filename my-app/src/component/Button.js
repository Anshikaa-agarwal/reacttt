import React from 'react'

export default function Button(props) {

  const buttonColor = props.color === "blue" ? "btn btn-primary" : props.color === "red" ? "btn btn-danger" : "btn";

  return (
    <div>
      <button className={buttonColor} onClick={props.func}>{props.text}</button>
    </div>
  )
}
