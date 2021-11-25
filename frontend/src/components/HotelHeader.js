import React from "react";

import locationPin from '../images/SVG/location-pin.svg'

const HotelHeader = () => {

    return (
        <div className="hotel-header">
                    <div className="hotel-name">
                        <span>Hotel Las Palmas</span>
                    </div>
                    
                    <div className="hotel-info">
                        <span class="location">
                            <img src={locationPin} alt='location-pin'/>
                            Albufeira, Portugal
                            <div className="red-underline"></div>
                        </span>
                        <div className="hotel-rating">
                            <span className='rating'>8.6</span>
                            <small><span className="votes">439</span> votes</small>
                        </div>
                    </div>
        </div>
    )
    
}


export default HotelHeader;