import React from 'react';
import './App.css';
import Cv from './cv/cv';
import 'bootstrap/dist/css/bootstrap.min.css';
require('typeface-montserrat');

function App() {
  return (
    <div className="container p-2">
      <Cv></Cv>
    </div>
  );
}

export default App;
