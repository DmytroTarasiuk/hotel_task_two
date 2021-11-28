import React, { useState, useRef, useEffect } from "react"
import ImagesHeader from "./ImagesHeader"


import Room from "./Room"
import rooms from '../rooms'

const ContentRoomsPage = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const iframeRef = useRef();
    console.log(iframeRef.current)

    const roomsEl = document.querySelectorAll('.room')
        
    console.log(roomsEl.length)
   

    return (
        <div className="content about">
                <ImagesHeader />

                <div className="hotel-header about">
                    <div className="hotel-name">
                        <span>Our rooms</span>
                    </div>
                    
                    <input className="header-link" type='text' placeholder="Search rooms"  onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}/>
                   
                   
                    
                    
                </div>

                <div className="main-content about">
                    <div className="content-container">
                        <div className="rooms">
                        
                        {rooms.filter((room) => {
                            if(searchTerm === '') {
                                return room
                            } else if (room.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                return room
                            } 
                        }).map(room => (
                        <Room room={room} key={room._id} />
                        ))}
                        {roomsEl.length === 0 && <p>Nothing was found</p>}
                        
                        
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContentRoomsPage