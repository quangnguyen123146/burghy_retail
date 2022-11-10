import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import CartIcon from '../cart-icon/cart-icon'

const Header = () => {
  return (
    <nav className='nav-menu container'>
        <div className='logo'>
            <Link to="/">Burghy Retail</Link>
        </div>
        <ul>
            <li>
                <Link to = '/'>
                    Home
                </Link>
            </li>
            <li>
                <Link to = '/shop'>
                    Shop
                </Link>
            </li>
            <li>
                <Link to = '/login'>
                    Login
                </Link>
            </li>
            <li>
                <Link to = '/login'>
                    Sign Up
                </Link>
            </li>
        </ul>
        <CartIcon />
    </nav>
  )
}

export default Header