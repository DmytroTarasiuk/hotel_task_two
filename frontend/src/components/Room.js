import React from "react";

const Room = ({ room }) => {

    return (
        <div className="room">
            <a href={`/rooms/${room._id}`}>
                <img src={room.image} alt='room'/>
            </a>
            <h2>{room.title}</h2>
            <div className="room-info">
                <small>Size: {room.size}</small>
                <small>Price: <span className="price">{room.price} {room.currency}</span></small>
            </div>
            <a className="room-btn" href={`/rooms/${room._id}`}>Find More</a>
        </div>
    )
}

export default Room;