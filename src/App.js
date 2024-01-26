import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="App">
      <div>
      <NavBar />
     <Home />
      </div>
     <div>
     <About />
     </div>
     <div data-aos="fade-in" data-aos-delay="200">
     <Team />
     </div>
     <div>
     <Contact />
     </div>
    </div>
  );
}

export default App;
