import './HomePage.css'
import NavBar from "./NavBar/NavBar"
import Home from "./MainLayout/MainLayout"
import About from "./About/About"

const HomePage = () => {
    return (
        <div className="main-container">
            
          <NavBar />
          <Home />
          <About />
          
        </div>
    )
}
export default HomePage