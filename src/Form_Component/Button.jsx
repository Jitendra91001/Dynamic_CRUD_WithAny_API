import React, { useDebugValue } from 'react'

export const Button = ({value,method,classname}) => {
  return (
    <button className={classname} onClick={method}>{value}</button>
    )
}
