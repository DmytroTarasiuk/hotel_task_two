import React from 'react'

import hotel1 from '../images/hotel-1.jpg'
import hotel2 from '../images/hotel-2.jpg'
import hotel3 from '../images/hotel-3.jpg'


const ImagesHeader = () => {

    return (
        <div className="images-container">
                    <img src={hotel1} alt='hotel'/>
                    <img src={hotel2} alt='hotel'/>
                    <img src={hotel3} alt='hotel'/>
        </div>
    )
}


export default ImagesHeader