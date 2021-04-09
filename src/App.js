import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Background from './components/Particle'
import Home from './pages/Home';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectsPage from './pages/ProjectsPage'

const style = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};

const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if false, animation plays everytime element comes on screen
  once: true
}

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
      <Wrapper>
        <div style={style}>
          <Background />
          <div style={style}>
            <Nav />
            <Home />
            <ProjectsPage />
          </div>
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
