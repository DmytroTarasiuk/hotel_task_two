import React from "react"
import Form from "./Form"
import ImagesHeader from "./ImagesHeader"


const ContentContactPage = () => {

    return (
        <div className="content about">
                <ImagesHeader />

                <div className="hotel-header about">
                    <div className="hotel-name">
                        <span>contact us</span>
                    </div>
                    
                    <a className="header-link" href='/'>Hotel</a>
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