import React, { useState, useEffect } from 'react';
import { usersStyles } from './style/users-style';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import usersDatabase from './users-database/users-database.json';

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams({ status: 'all' });
  const [hoveredLink, setHoveredLink] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      setUsers(usersDatabase);
    } catch (error) {
      console.error('Error setting users:', error);
    }
  }, []);

  const filter = searchParams.get('status');

  const filteredUsers = users.filter(user => {
    if (filter === 'active') return user.status === 'active';
    if (filter === 'inactive') return user.status === 'inactive';
    return true; // 'all'
  });

  return (
    <div style={usersStyles}>
      <h1 style={usersStyles.title}>Users Information</h1>
      <div style={usersStyles.filter}>
        <button style={usersStyles.filter.button} onClick={() => setSearchParams({ status: 'all' })}>All</button>
        <button style={usersStyles.filter.button} onClick={() => setSearchParams({ status: 'active' })}>Active Users</button>
        <button style={usersStyles.filter.button} onClick={() => setSearchParams({ status: 'inactive' })}>Inactive Users</button>
      </div>
      {filteredUsers.map(user => (
        <div style={usersStyles.user} key={user.id}>
          <div style={usersStyles.user.container}>
            <div style={usersStyles.user.container.avatar}>
              <img src={usersStyles.user.container.avatar.img.photo} alt={user.name} style={usersStyles.user.container.avatar.img} />
              {user.status === 'active' && <div style={usersStyles.user.container.avatar.active} />}
            </div>
            <div style={usersStyles.user.container.info}>
              <h3 style={usersStyles.user.container.info.name}>{user.name}</h3>
              <p style={usersStyles.user.container.info.email}>{user.email}</p>
            </div>
          </div>
          <Link
            to={`/dashboard/${user.id}?${searchParams.toString()}`}
            style={{
              ...usersStyles.user.viewLink,
              ...(hoveredLink === user.id ? usersStyles.user.viewLink.hover : {}),
            }}
            onMouseEnter={() => setHoveredLink(user.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            View Details
          </Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
