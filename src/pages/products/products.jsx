import React from 'react'
import { productsStyles } from './style/products-style'
import { Link, Outlet } from 'react-router-dom'
import ReactSvg from '../../global-styles/react-svg/react-svg'

export default function Products() {
  return (
    <div style={productsStyles}>
      <h2 style={productsStyles.title}>Products Page</h2>
      <div style={productsStyles.search}>
        <input style={productsStyles.search.input} type="text" placeholder="Enter product name" />
        <button style={productsStyles.search.searchBtn}>Search</button>
      </div>
      <nav style={productsStyles.nav}>
        <Link style={productsStyles.nav.link} to="">
          All
        </Link>
        <Link style={productsStyles.nav.link} to="featured">
          Featured
        </Link>
        <Link style={productsStyles.nav.link} to="new">
          New
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}