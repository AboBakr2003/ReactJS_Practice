import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { backButtonStyle } from './back-button-style'

export default function BackButton({navigation}) {
  const [isBtnHovering, setIsBtnHovering] = useState(false);
  const buttonStyle = {...backButtonStyle, ...(isBtnHovering ? backButtonStyle.hover : {})};
  const navigate = useNavigate()
  return (
    <button 
    style={buttonStyle} 
    onClick={() => navigate(navigation)}
    onMouseEnter={() => setIsBtnHovering(true)}
    onMouseLeave={() => setIsBtnHovering(false)}
    >
      Back
    </button>
  )
}
