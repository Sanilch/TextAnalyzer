import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

function App() {

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Utils" />
      <div className="container">
        <TextForm heading="Text to Analyse"/>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
