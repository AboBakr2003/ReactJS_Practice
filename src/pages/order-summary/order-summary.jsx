import React from 'react'
import BackButton from '../../components/back-button/back-button'
import { orderSummaryStyle } from './style/order-summary-style'

export default function OrderSummary() {
  return (
    <div style={orderSummaryStyle}>
      <h1>Order Summary Page</h1>
      <BackButton navigation={-1}/>
    </div>
  )
}
