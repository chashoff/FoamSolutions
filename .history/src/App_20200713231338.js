import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css'
import { green } from '@material-ui/core/colors';
function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#65c981',
      },
      secondary: green
    }
  })
  return (
    <div style={{overflowX: 'hidden'}} className="App">
      <Router>
        <Routes />
      </Router>
      <img style={{height: '60px', width: 'auto', position: 'abosolute', bottom: '0', left: '0' }} src="/images/lovast_logo.svg" alt="" />
    </div>
  );
}

export default App;