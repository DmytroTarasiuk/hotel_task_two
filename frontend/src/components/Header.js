import React from 'react'

import user from '../images/user.jpg'
import logo from '../images/favicon.png'

const Header = () => {

    const pathname = window.location.pathname

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            {pathname === '/rooms' && <input type='text' placeholder="Search rooms" />}
            <div className="user-logged">
                <img src={user} alt='user' />
                <p>Hi <span className="username">John</span></p>
            </div>
        </div>
    )
}


export default Header