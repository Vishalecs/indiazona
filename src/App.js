import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="app-container">
      <Navbar selectedOption={selectedOption} />
      <Sidebar setSelectedOption={setSelectedOption} />
      <div className="main-content">
        <Body selectedOption={selectedOption} />
      </div>
    </div>
  );
}

export default App;
