import React from 'react'


const NavbarOne = () => {

    return (
        <div className="navbar about">
                <ul className="navbar-links">
                    <li className='active'><a className='link' href='/about'>About Us</a></li>
                    <li><a className='link' href='/'>Hotel</a></li>
                    <li><a className='link' href='/contact'>Contact us</a></li>
                </ul>
                <div className="footer">
                    <small>&copy;2021 All rights reserved.</small>
                </div>
        </div>
    )
}


export default NavbarOne;