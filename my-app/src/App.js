import { useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About'
import { useEffect } from 'react';

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
    <div className='outer-box'>
    <Navbar title="TextUtils" mode={mode}></Navbar>
    <div className="content">
      <TextForm heading="Enter text to analyze:" mode={mode} toggleMode={toggleMode}></TextForm>
      {/* <About mode={mode} toggleMode={toggleMode}></About> */}
    </div>
    </div>
  );
}

export default App;
