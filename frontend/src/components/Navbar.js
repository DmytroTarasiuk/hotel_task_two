import React from 'react'



const Navbar = () => {

    const pathname = window.location.pathname

    return (
        <div className="navbar">
                <ul className="navbar-links">
                    <li className={pathname === '/about' ? 'active' : null}><a className='link' href="/about">About Us</a></li>
                    <li className={pathname === '/' ? 'active' : null}><a className='link' href="/">Hotel</a></li>
                    <li className={pathname === '/contact'? 'active' : null}><a className='link' href="/contact">Contact us</a></li>
                    <li className={pathname === '/rooms' ? 'active' : null}><a className='link' href="/rooms">Rooms</a></li>
                </ul>
                <div className="footer">
                    <small>&copy;2021 All rights reserved.</small>
                </div>
        </div>
    )
}


export default Navbar;