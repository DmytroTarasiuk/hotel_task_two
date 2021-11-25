import React from "react";


import user2 from '../images/user-2.jpg'
import user3 from '../images/user-3.jpg'
import user4 from '../images/user-4.jpg'
import user5 from '../images/user-5.jpg'

const AboutSection = () => {

    return (
        <div className="about-section">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                        </p>
                        <p>
                            Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                        </p>
                        <div className="line"></div>
                        <div className="features">
                            <div className="column-one">
                                <p>Close to the beach</p>
                                <p>Free Airport shuttle</p>
                                <p>Air conditioning and heating</p>
                                <p>We speak all languages</p>
                            </div>
                            <div className="column-two">
                                <p>Breakfest included</p>
                                <p>Free wifi in all rooms</p>
                                <p>Pets allowed</p>
                                <p>Perfect for families</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="recommends">
                            <p>Lucy and 3 other friends recommend this hotel</p>
                            <div className="user-images">
                                <img className="first-image"src={user2} alt="user"/>
                                <img className="second-image" src={user3} alt="user"/>
                                <img className="third-image" src={user4} alt="user"/>
                                <img src={user5} alt="user"/>
                            </div>
                        </div>
                    </div>
    )
}


export default AboutSection