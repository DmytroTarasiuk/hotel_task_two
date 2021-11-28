import React from "react";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HotelScreen from "./screens/HotelScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import RoomsScreen from './screens/RoomsScreen'
import RoomDetailsScreen from "./screens/RoomDetailsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelScreen />} exact/>
        <Route path="/about" element={<AboutScreen />}/>
        <Route path="/contact" element={<ContactScreen />}/>
        <Route path="/rooms" element={<RoomsScreen />}/>
        <Route path='/rooms/:id' element={<RoomDetailsScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
