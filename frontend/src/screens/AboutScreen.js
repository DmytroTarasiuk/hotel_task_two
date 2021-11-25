import Header from "../components/Header"
import NavbarOne from "../components/NavbarOne"
import ContentAboutPage from "../components/ContentAboutPage"


const AboutScreen = () => {
    
    return (
        <div className="container">
            <Header />
            <div className="main">
                <NavbarOne />
                <ContentAboutPage />
            </div>
        </div>
    )
}

export default AboutScreen

