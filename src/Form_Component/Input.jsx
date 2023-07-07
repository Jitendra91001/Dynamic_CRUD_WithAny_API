import React from 'react'

export const Input = (props) => {
  return (
    <input type={props.type} onChange={props.method} name={props.name} value={props.value} className={props.classname} />
  )
}
