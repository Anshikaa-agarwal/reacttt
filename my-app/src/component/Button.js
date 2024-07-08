import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.func}>{props.text}</button>
    </div>
  )
}
