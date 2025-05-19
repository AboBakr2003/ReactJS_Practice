import React, { useState } from 'react'
import { profileStyles } from './style/profile-style';
import { useAuth } from '../../context/auth/auth';
import { buttonStyle as authBtnStyle } from '../../global-styles/custom-button-style/button-style';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  const [isLoginBtnHovering, setIsLoginBtnHovering] = useState(false);
  const authBtn = {...authBtnStyle, ...(isLoginBtnHovering ? authBtnStyle.hover : {})};

  return (
    <div style={profileStyles}>
      <h1>welcome {auth.user}</h1>
      <button style={authBtn} onClick={handleLogout}
      onMouseEnter={() => setIsLoginBtnHovering(true)}
      onMouseLeave={() => setIsLoginBtnHovering(false)}
      >
        Logout
      </button>
    </div>
  )
}
