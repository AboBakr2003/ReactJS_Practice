import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buttonStyle } from '../../global-styles/custom-button-style/button-style'
import { homeStyle } from './style/home-style'

export default function Home() {
  const navigate = useNavigate()
  const [isBtnHovering, setIsBtnHovering] = useState(false);
  const orderSummaryBtnStyle = {...buttonStyle, ...(isBtnHovering ? buttonStyle.hover : {})};
  return (
    <div style={homeStyle}>
      <h2>Home Page</h2>
      <button 
      style={orderSummaryBtnStyle}
      onMouseEnter={() => setIsBtnHovering(true)}
      onMouseLeave={() => setIsBtnHovering(false)}
      onClick={() => navigate("/order-summary")}>Order Summary</button>
    </div>
  )
}
