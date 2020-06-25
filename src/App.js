import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'

function App() {
  
  return (
    <div className="">
     <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
     </Router>
    </div>
  );
}

export default App;
