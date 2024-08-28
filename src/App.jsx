import React from 'react';
import FrameComponent from './components/FrameComponent'; 
import Header from './components/Header'; 
import Navbar from './components/Navbar'; 
import Timer1 from './components/Timer1'; 
import AndroidStatusBars from './components/AndroidStatusBars';
import DesktopIcons from 'components/DesktopIcons';
import QuestionPage from 'components/QuestionPage';

import './styles/global.css';

function App() {
  const headerTitle = 'Welcome to Your New React App!'; 

  return (
    <div className="App">
      <AndroidStatusBars />
       <Navbar />
      <Header title={headerTitle} /> 
      <DesktopIcons />
      <FrameComponent />
      <Timer1 /> 
      
      <QuestionPage />
    </div>
  );
}

export default App;