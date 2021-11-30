import React from 'react'

import user from '../images/user.jpg'
import logo from '../images/favicon.png'

const Header = () => {


    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            <div className="user-logged">
                <img src={user} alt='user' />
                <p>Hi <span className="username">John</span></p>
            </div>
        </div>
    )
}


export default Header