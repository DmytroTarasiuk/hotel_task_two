import Header from "../components/Header"

import ContentRoomsPage from "../components/ContentRoomsPage"
import Navbar from "../components/Navbar"


const ContactScreen = () => {
    
    return (
        <div className="container">
            <Header />
            <div className="main">
                <Navbar />
                <ContentRoomsPage />
            </div>
        </div>
    )
}

export default ContactScreen