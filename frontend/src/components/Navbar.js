import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const pathname = window.location.pathname

    return (
        <div className="navbar">
                <ul className="navbar-links">
                    <li className={pathname === '/about' ? 'active' : null}><NavLink className='link' to='/about'>About Us</NavLink></li>
                    <li className={pathname === '/' ? 'active' : null}><NavLink className='link' to="/">Hotel</NavLink></li>
                    <li className={pathname === '/contact'? 'active' : null}><NavLink className='link' to="/contact">Contact us</NavLink></li>
                    <li className={pathname === '/rooms' ? 'active' : null}><NavLink className='link' to="/rooms">Rooms</NavLink></li>
                </ul>
                <div className="footer">
                    <small>&copy;2021 All rights reserved.</small>
                </div>
        </div>
    )
}


export default Navbar;