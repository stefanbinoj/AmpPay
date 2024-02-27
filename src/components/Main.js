import NavBar from "./NavBar/NavBar"
import Home from "./Home/Home"
import About from "./About/About"
import Team from "./Team/Team"
import Contact from "./Contact/Contact"
import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <div className="main-container">
            
            <NavBar />
          <Home />
        </div>
    )
}
export default Main