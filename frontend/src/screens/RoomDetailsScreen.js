import Header from "../components/Header"

import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import rooms from "../rooms";
import ContentRoomDetailsPage from "../components/ContentRoomDetailsPage";

const RoomDetailsScreen = () => {

    const { id } = useParams()

    const room = rooms.find((r) => r._id === id)
    
    return (
        <div className="container">
            <Header />
            <div className="main">
                <Navbar />
                <ContentRoomDetailsPage
                title={room.title}
                image={room.image}
                rating={room.rating}
                size={room.size}
                currency={room.currency}
                price={room.price}
                numReviews={room.numReviews} 
                />
            </div>
        </div>
    )
}

export default RoomDetailsScreen