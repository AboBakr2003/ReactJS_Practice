import React, { useState, useEffect } from 'react'
import { userDetailsStyles } from './user-details-style'
import { useParams } from 'react-router-dom'
import BackButton from '../../../../../components/back-button/back-button'
import avatar from '../avatar/avatar.jpeg'

export default function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  if (!user) return <p>Loading...</p>

  return (
    <div style={userDetailsStyles}>
      <div style={userDetailsStyles.userBox}>
        <img src={avatar} alt={user.name} style={userDetailsStyles.userBox.img} />
        <h2>{user.name}</h2>
        <div style={userDetailsStyles.userBox.info}>
          <p style={userDetailsStyles.userBox.info.p}>
            <span style={userDetailsStyles.userBox.info.p.span}>ID:</span> <span>{user.id}</span>
          </p>
          <p style={userDetailsStyles.userBox.info.p}>
            <span style={userDetailsStyles.userBox.info.p.span}>Address:</span> 
            <span>{user.address?.suite}, {user.address?.street}, {user.address?.city}</span>
          </p>
          <p style={userDetailsStyles.userBox.info.p}>
            <span style={userDetailsStyles.userBox.info.p.span}>Phone:</span> 
            <span>{user.phone}</span>
          </p>
        </div>
        <BackButton navigation={-1}/>
      </div>
    </div>
  )
}