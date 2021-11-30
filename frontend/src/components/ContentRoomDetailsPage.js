import React from "react"
import ImagesHeader from "./ImagesHeader"
import Rating from "./Rating"


import BookButton from './BookButton'

const ContentRoomDetailsPage = (props) => {


    return (
        <div className="content about">
                <ImagesHeader />

                <div className="hotel-header about">
                    <div className="hotel-name">
                        <span>{props.title}</span>
                        <a className="header-link" href='/rooms'>Go back</a>
                    </div>
                   
                </div>

                <div className="main-content about">
                    <div className="content-container">
                        <div className="room-details">
                            <div>
                            
                            <img src={props.image} alt='room' />
                            </div>
                            <div>
                                <h2>{props.title}</h2>
                                <Rating 
                                value={props.rating} 
                                text={`${props.numReviews} reviews`}/>
                                
                                <small>Size: {props.size}</small><br />
                                <span>Price: <span className="price">{props.price} {props.currency} </span>/ per day</span>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                                </p>
                                <BookButton />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContentRoomDetailsPage