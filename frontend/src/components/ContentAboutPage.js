import ImagesHeader from "./ImagesHeader"
import { NavLink } from "react-router-dom"

const ContentAboutPage = () => {
    return (
        <div className="content about">

                <ImagesHeader />

                <div className="hotel-header about">
                    <div className="hotel-name">
                        <span>About us</span>
                    </div>
                    
                    <NavLink className="header-link" to='/contact'>Contact us</NavLink>
                </div>

                <div className="main-content about">
                    <div className="content-container">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                        </p>
                        <p>

Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                        </p>
                    </div>
                </div> 
            </div>
    )
}


export default ContentAboutPage