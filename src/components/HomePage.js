import './HomePage.css'
import NavBar from "./NavBar/NavBar"
import Home from "./MainLayout/MainLayout"
import About from "./About/About"
import React, {useState,useEffect} from 'react'

const HomePage = () => {
    const [loading,setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2850);
      return () => clearTimeout(timer);
    }, []);

    return (
        <div className="main-container">
        {loading ? (
        <div id="loader">
          <h1 className="loading-animation">
            <span>🅰</span><span>🅼</span><span>🅿</span><span>🅿</span><span>🅰</span><span>🆈</span>
          </h1>
        </div>
      ) : (
          <div>
            <NavBar />
            <Home />
            <About />
          </div>
      )}
    </div>
  );
}

export default HomePage