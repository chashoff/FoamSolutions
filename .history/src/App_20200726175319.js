import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import './App.css'
function App() {
  return (
    <div style={{overflowX: 'hidden', position: 'relative'}} className="App">
      <Router>
        <Routes />
      </Router
    </div>
  );
}

export default App;