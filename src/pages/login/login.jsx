import React, { useState } from 'react'
import { useAuth } from '../../context/auth/auth'
import { loginStyles } from './style/login-style'
import { buttonStyle as loginBtnStyle } from '../../global-styles/custom-button-style/button-style'
import ReactSvg from '../../global-styles/react-svg/react-svg'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login() {
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.state?.path || "/";
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(name)
    navigate(path, { replace: true })
  }

  const [isLoginBtnHovering, setIsLoginBtnHovering] = useState(false);
  const loginBtn = {...loginBtnStyle, ...(isLoginBtnHovering ? loginBtnStyle.hover : {})};

  return (
    <div style={loginStyles}>
      <form style={loginStyles.form}>
        <div style={loginStyles.form.inputsBox}>
          <div style={loginStyles.form.inputsBox.field}>
            <label
              style={loginStyles.form.inputsBox.field.label}
              htmlFor="name"
            >
              Name:
            </label>
            <input
              style={loginStyles.form.inputsBox.field.input}
              type="text"
              id="name"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={name && handleLogin}
          style={loginBtn}
          onMouseEnter={() => setIsLoginBtnHovering(true)}
          onMouseLeave={() => setIsLoginBtnHovering(false)}
        >
          Login
        </button>
      </form>
    </div>
  );
}
