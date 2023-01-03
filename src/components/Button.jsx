import React from "react"
import "../index.css"


const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Button
