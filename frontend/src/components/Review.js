import React from "react";

const Review = (props) => {

    return (
        <div className="review">
            <div className="fas fa-quote-left fa-quote"></div>
                <p>{props.text}</p>
                <div className="review-info">
                    <img src={props.image} alt="user"/>
                    <div className="user-review">
                        <p className="user-review-name">{props.name}</p>
                        <p className="review-date">{props.date}</p>
                    </div>
                    <span className="review-rating">{props.rating}</span>
            </div>
        </div>
    )
}


export default Review