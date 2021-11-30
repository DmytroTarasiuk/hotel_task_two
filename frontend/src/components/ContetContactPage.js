import React from "react"
import Form from "./Form"
import ImagesHeader from "./ImagesHeader"
import { NavLink } from "react-router-dom"

const ContentContactPage = () => {

    return (
        <div className="content about">
                <ImagesHeader />

                <div className="hotel-header about">
                    <div className="hotel-name">
                        <span>contact us</span>
                    </div>
                    
                    <NavLink className="header-link" to='/'>Hotel</NavLink>
                </div>

                <div className="main-content about">
                    <div className="content-container">
                        <Form  />
                    </div>
                </div>

               
            </div>
    )
}

export default ContentContactPage