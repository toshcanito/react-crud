import './App.css';
import Routes from './Routes';
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <NavBar />
        </div>
      </div>
      <Routes />
    </React.Fragment>
  );
}

export default App;
