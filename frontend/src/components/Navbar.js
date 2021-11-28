import React, { useState, useEffect } from 'react'



const Navbar = () => {

    const [isHotelCliked, setIsHotelClicked] = useState(true)
    const [isAboutCliked, setIsAboutClicked] = useState(false)
    const [isContactClicked, setIsContactClicked] = useState(false)
    const [isRoomsClicked, setIsRoomsClicked] = useState(false)

    useEffect(() => {
        setIsHotelClicked(JSON.parse(window.localStorage.getItem('isHotelClicked')));
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('isHotelClicked', isHotelCliked);
    }, [isHotelCliked]);


    useEffect(() => {
        setIsAboutClicked(JSON.parse(window.localStorage.getItem('isAboutClicked')));
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('isAboutClicked', isAboutCliked);
    }, [isAboutCliked]);



    useEffect(() => {
        setIsContactClicked(JSON.parse(window.localStorage.getItem('isContactClicked')));
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('isContactClicked', isContactClicked);
    }, [isContactClicked]);



    useEffect(() => {
        setIsRoomsClicked(JSON.parse(window.localStorage.getItem('isRoomsClicked')));
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('isRoomsClicked', isRoomsClicked);
    }, [isRoomsClicked]);



    function handleHotelClick() {
        setIsAboutClicked(false)
        setIsHotelClicked(true)
        setIsContactClicked(false)
        setIsRoomsClicked(false)
    }
    function handleAboutClick() {
        setIsHotelClicked(false)
        setIsAboutClicked(true)
        setIsContactClicked(false)
        setIsRoomsClicked(false)
    }

    function handleContactClick() {
        setIsHotelClicked(false)
        setIsAboutClicked(false)
        setIsContactClicked(true)
        setIsRoomsClicked(false)
    }

    function handleRoomsClick() {
        setIsHotelClicked(false)
        setIsAboutClicked(false)
        setIsContactClicked(false)
        setIsRoomsClicked(true)
    }


    return (
        <div className="navbar">
                <ul className="navbar-links">
                    <li onClick={handleAboutClick} className={isAboutCliked ? 'active' : null}><a className='link' href="/about">About Us</a></li>
                    <li onClick={handleHotelClick} className={isHotelCliked ? 'active' : null}><a className='link' href="/">Hotel</a></li>
                    <li onClick={handleContactClick} className={isContactClicked ? 'active' : null}><a className='link' href="/contact">Contact us</a></li>
                    <li onClick={handleRoomsClick} className={isRoomsClicked ? 'active' : null}><a className='link' href="/rooms">Rooms</a></li>
                </ul>
                <div className="footer">
                    <small>&copy;2021 All rights reserved.</small>
                </div>
        </div>
    )
}


export default Navbar;