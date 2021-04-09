import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Background from './components/Particle'
import Home from './pages/Home';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav'

const style = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};

function App() {
  return (
    <Router>
      <Wrapper>
        <div style={style}>
          <Background />
          <div style={style}>
            <Nav />
            <Home />
          </div>
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
