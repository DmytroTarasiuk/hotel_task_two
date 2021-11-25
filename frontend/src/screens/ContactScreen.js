import Header from "../components/Header"
import NavbarTwo from "../components/NavbarTwo"
import ContentContactPage from "../components/ContetContactPage"


const ContactScreen = () => {
    
    return (
        <div className="container">
            <Header />
            <div className="main">
                <NavbarTwo />
                <ContentContactPage />
            </div>
        </div>
    )
}

export default ContactScreen