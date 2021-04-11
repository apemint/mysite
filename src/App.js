import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

// Components / Animations
import Background from './components/Particles/Particle.js'
import Wrapper from './components/Wrapper';
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import Resume from './pages/Resume';
import Contact from './pages/Contact';



// style for background particles
const style1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#404E6B"
};
const style2 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};

function App() {

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      animate: true
    })
  }, []);

  return (
    <Container>
           <div style={style1}>
            <Background />
            <Col style={style2}>
              <Header />
              <About id="About" />
              <ProjectsPage  />
               <Resume id="Resume" />
            <Contact id="Contact" /> 
             </Col>

          </div>  
    </Container>
  );
}

export default App;
