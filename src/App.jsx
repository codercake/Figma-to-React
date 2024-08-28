import React from 'react';
import FrameComponent from './components/FrameComponent'; 
import Header from './components/Header'; 

import './styles/global.css';

function App() {
  const headerTitle = 'Welcome to Your New React App!'; 

  return (
    <div className="App">
      <Header title={headerTitle} /> 
      <FrameComponent /> 
    </div>
  );
}

export default App;