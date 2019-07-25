import React from 'react';
import {Router} from 'react-router-dom';
import Route from './config/Router'
import "react-bootstrap/dist/react-bootstrap.min.js";
import './app.css';
import history from '../src/config/history';

function App() {
  return (
    <div className="App">
    <Router history={history}>
       <Route/>
    </Router>
    </div>
  );
}

export default App;
