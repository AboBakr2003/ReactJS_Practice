import React, { useState } from 'react';
import logo from './images/react-logo.png';
import { NavLink } from 'react-router-dom';
import { headerStyles } from './style/navbar-style';
import { useAuth } from '../../context/auth/auth';
import { buttonStyle as authBtnStyle } from '../../global-styles/custom-button-style/button-style';

export default function Navbar() {
  const auth = useAuth();
  const [isAuthBtnHovering, setIsAuthBtnHovering] = useState(false);
  const authButton = {...authBtnStyle, ...(isAuthBtnHovering ? authBtnStyle.hover : {})};
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleLinkHover = (linkName) => (e) => {
    if (!e.target.classList.contains("active")) {
      setHoveredLink(linkName);
    }
  };

  const getLinkStyle = (isActive, linkName) => ({
    ...headerStyles.nav.a,
    ...(isActive ? headerStyles.nav.a.active : {}),
    ...(hoveredLink === linkName ? headerStyles.nav.a.hover : {})
  });

  return (
    <div style={headerStyles}>
      <div style={headerStyles.logo}>
        <img src={logo} alt="React logo" style={{ width: '40px' }} />
        <div style={headerStyles.logo.version}>
          <span style={headerStyles.logo.version.span}>v</span>19.1
        </div>
      </div>
      <nav style={headerStyles.nav}>
        <NavLink
          to="/"
          onMouseEnter={handleLinkHover("home")}
          onMouseLeave={() => setHoveredLink(null)}
          style={({ isActive }) => getLinkStyle(isActive, "home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          onMouseEnter={handleLinkHover("products")}
          onMouseLeave={() => setHoveredLink(null)}
          style={({ isActive }) => getLinkStyle(isActive, "products")}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          onMouseEnter={handleLinkHover("about")}
          onMouseLeave={() => setHoveredLink(null)}
          style={({ isActive }) => getLinkStyle(isActive, "about")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onMouseEnter={handleLinkHover("contact")}
          onMouseLeave={() => setHoveredLink(null)}
          style={({ isActive }) => getLinkStyle(isActive, "contact")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/dashboard"
          onMouseEnter={handleLinkHover("dashboard")}
          onMouseLeave={() => setHoveredLink(null)}
          style={({ isActive }) => getLinkStyle(isActive, "dashboard")}
          >
          Dashboard
        </NavLink>
        {auth.user && (
          <NavLink
            to="/profile"
            onMouseEnter={handleLinkHover("profile")}
            onMouseLeave={() => setHoveredLink(null)}
            style={({ isActive }) => getLinkStyle(isActive, "profile")}
          >
            Profile
          </NavLink>
        )}
      </nav>
      {!auth.user && 
        <NavLink
          to="/login"
          style={authButton}
          onMouseEnter={() => setIsAuthBtnHovering(true)}
          onMouseLeave={() => setIsAuthBtnHovering(false)}
        >
          Login
        </NavLink>
      }
    </div>
  );
}
