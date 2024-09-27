import React from 'react';
import Compare from './pages/compare';
import Home from './pages/Home';
import './styles/global.css';

const App = () => {
  return (
    <div className="App">
      <Compare />
      <Home/>
    </div>
  );
};

export default App;