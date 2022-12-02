import React from 'react'

const Button = ({...props}) => {
  return (
    <div onClick={props.handleClick} className={props.className}>{props.children}</div>
  )
}

export default Button