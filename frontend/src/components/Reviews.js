import React from "react";

import Review from "./Review";
import user6 from '../images/user-6.jpg'
import user5 from '../images/user-5.jpg'

const Reviews = () => {
    return (
        <div className="reviews">
            <Review 
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.'
            image={user5}
            name='Nick Smith'
            date='Feb 23rd 2017'
            rating='7.8'/>
            <Review 
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.'
            image={user6}
            name='Mary Thomas'
            date='Feb 23rd 2017'
            rating='9.3'/>
        </div>
    )
}


export default Reviews