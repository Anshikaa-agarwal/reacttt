import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Button color='pink'/>
      <Button color='purple'/>
      <Button color='green'/>
    </div>
  );
}

export default App;
