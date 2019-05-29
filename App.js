import React from 'react';
import './App.css';

import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
   <div>
   <Router>
      <div>
        <nav>
          <ul>
            <li className="button4">
              <Link to="/">Home</Link>
            </li>
            <li className="button4">
              <Link to="/about/">About</Link>
            </li>
            <li className="button4">
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
   </div>
  );
}

export default App;
