import room1 from './images/room1.jpeg'
import room2 from './images/room2.jpeg'
import room3 from './images/room3.jpeg'
import room4 from './images/room4.jpg'
import room5 from './images/room5.jpg'
import room6 from './images/room6.jpg'

const rooms = [
    {
        _id: "0001",
        title: "Single",
        price: "80",
        currency: "usd",
        image: room1,
        size: "11m",
        rating: 5,
        numReviews: 10
    },
    {
        _id: "0002",
        title: "Double",
        price: "100",
        currency: "usd",
        image: room2,
        size: "16m",
        rating: 4.5,
        numReviews: 12
    },
    {
        _id: "0003",
        title: "Triple",
        price: "120",
        currency: "usd",
        image: room3,
        size: "20m",
        rating: 4,
        numReviews: 6
    },
    {
        _id: "0004",
        title: "Quad",
        price: "140",
        currency: "usd",
        image: room4,
        size: "28m",
        rating: 3.5,
        numReviews: 131
    },
    {
        _id: "0005",
        title: "Queen",
        price: "160",
        currency: "usd",
        image: room5,
        size: "28m",
        rating: 3.0,
        numReviews: 1012
    },
    {
        _id: "0006",
        title: "King",
        price: "200",
        currency: "usd",
        image: room6,
        size: "45m",
        rating: 2.5,
        numReviews: 3
    }
]

export default rooms