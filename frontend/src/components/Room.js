import React from "react";
import { Link } from "react-router-dom";

const Room = ({ room }) => {

    return (
        <div className="room">
            <Link to={`/rooms/${room._id}`}>
                <img src={room.image} alt='room'/>
            </Link>
            <h2>{room.title}</h2>
            <div className="room-info">
                <small>Size: {room.size}</small>
                <small>Price: <span className="price">{room.price} {room.currency}</span></small>
            </div>
            <Link className="room-btn" to={`/rooms/${room._id}`}>Find More</Link>
        </div>
    )
}

export default Room;