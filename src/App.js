import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components / Animations
import Background from './components/Particles/Particle.js'
import Wrapper from './components/Wrapper';
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage'



//style for background particles
const style = {
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
    <Router>
      <Wrapper >
        <div
          style={style}>
          <Background />
          <div
            style={style}
          >
            <Header/>
            <Home id="Home"/>
            <About id="About"/>
            <ProjectsPage id="Projects" />
            {/* <Resume id="Resume" />
            <Contact id="Contact" /> */}
          </div>

        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
