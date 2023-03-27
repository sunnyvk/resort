import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='main-header'>
        <nav className='main-nav'>
            <NavLink to='/'  className={({ isActive }) => (isActive ? 'main-nav-active' : '')}><span>Home</span></NavLink>
            <NavLink><span>RESORTS</span></NavLink>
            <NavLink><span>FOR SALE</span></NavLink>
            <NavLink  to='/spa' className={({ isActive }) => (isActive ? 'main-nav-active' : '')}><span>SPA</span></NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'main-nav-active' : '')}><span>ABOUT</span></NavLink>
            <NavLink><span>REVIEWS</span></NavLink>
        </nav>      
    </header>
    <Outlet/>
    </>
  )
}

export default Header
