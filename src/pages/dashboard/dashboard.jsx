import React from 'react'
import Users from './components/users/users'
import { dashboardStyles } from './style/dashboard-style'

export default function dashboard() {
  return (
    <div style={dashboardStyles}>
      <Users/>
    </div>
  )
}