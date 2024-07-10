import { useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About'
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'black';
    document.body.style.color = mode === 'light' ? 'black' : 'white';
  }, [mode]);
  
  return (
    <Router>
    <div className='outer-box'>
    <Navbar title="TextUtils" mode={mode}></Navbar>
    <div className="content">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter text to analyze:" mode={mode} toggleMode={toggleMode}></TextForm>
          </Route>
        </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
