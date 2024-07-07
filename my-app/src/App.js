import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" bgDark={true}></Navbar>
    <div className="content">
    <TextForm></TextForm>
    </div>
    </>
  );
}

export default App;
