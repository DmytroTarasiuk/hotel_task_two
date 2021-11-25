import React from "react";

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ImagesHeader from '../components/ImagesHeader'
import HotelHeader from '../components/HotelHeader'
import AboutSection from '../components/AboutSection'
import Reviews from "../components/Reviews";
import BookButton from "../components/BookButton";


const HotelScreen = () => {

    return (
        <div className="container">
            <Header />
            <div className="main">
                <Navbar />
                <div className="content">
                    <ImagesHeader />
                    <HotelHeader />
                    <div className="main-content">
                        <AboutSection />
                        <Reviews />
                        <BookButton />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HotelScreen