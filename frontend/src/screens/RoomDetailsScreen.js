import React from "react";
import { useParams } from "react-router-dom";

import rooms from "../rooms";

const RoomDetailsScreen = () => {
    const { id } = useParams()
    
    const room = rooms.find((r) => r._id === id)

    return (
        <>
        <a href='/rooms'>Go back</a>
        {room.title}
        {room.size}
        <img src={room.image} alt='room'/>    
        <h2>Hello</h2>
        </>
    )
}


export default RoomDetailsScreen