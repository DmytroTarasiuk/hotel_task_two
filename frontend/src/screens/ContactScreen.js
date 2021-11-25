import Header from "../components/Header"

import ContentContactPage from "../components/ContetContactPage"
import Navbar from "../components/Navbar"


const ContactScreen = () => {
    
    return (
        <div className="container">
            <Header />
            <div className="main">
                <Navbar />
                <ContentContactPage />
            </div>
        </div>
    )
}

export default ContactScreen