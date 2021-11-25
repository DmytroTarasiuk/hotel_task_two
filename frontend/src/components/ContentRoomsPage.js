import React from "react"
import ImagesHeader from "./ImagesHeader"


import Room from "./Room"
import rooms from '../rooms'

const ContentRoomsPage = () => {



    return (
        <div className="content about">
                <ImagesHeader />

                <div className="hotel-header about">
                    <div className="hotel-name">
                        <span>Our rooms</span>
                    </div>
                    
                    <a className="header-link" href='/'>Hotel</a>
                </div>

                <div className="main-content about">
                    <div className="content-container">
                        <div className="rooms">
                        {rooms.map(room => (
                        <Room room={room} key={room._id} />
                ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContentRoomsPage