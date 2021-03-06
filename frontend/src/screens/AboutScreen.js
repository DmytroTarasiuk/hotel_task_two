import Header from "../components/Header"

import ContentAboutPage from "../components/ContentAboutPage"
import Navbar from "../components/Navbar"


const AboutScreen = () => {
    
    return (
        <div className="container">
            <Header />
            <div className="main">
                <Navbar />
                <ContentAboutPage />
            </div>
        </div>
    )
}

export default AboutScreen

