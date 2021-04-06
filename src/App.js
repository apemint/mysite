import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import Wrapper from './components/Wrapper'

function App() {
  return (

<Wrapper>

  <Home />

</Wrapper>

  );
}

export default App;
