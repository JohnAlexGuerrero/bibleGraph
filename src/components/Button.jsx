import React, { useState } from 'react'

const Button = ({text, onClick}) => {
    
  return (
    <button onClick={onClick}>
        {text}
    </button>
  )
}

export default Button