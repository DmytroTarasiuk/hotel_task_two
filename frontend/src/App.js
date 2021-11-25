import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HotelScreen from "./screens/HotelScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import RoomsScreen from './screens/RoomsScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelScreen />}/>
        <Route path="/about" element={<AboutScreen />}/>
        <Route path="/contact" element={<ContactScreen />}/>
        <Route path="/rooms" element={<RoomsScreen />}/>
      </Routes>
    </Router>
  );
}

export default App;
