
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

function App() {

  const [mode,setmode] = useState('dark');
  const [alert,setalert] = useState(null);
  const showAlert = (message , type)=>{
        setalert({
          msg : message,
          type : type
        })
  }


  return (
    <>
   
   <Router> 
<Navbar  title ="mytitle" mode ={mode}/>
 <Alert  alert = {alert}/>
<Routes>
<Route exact path="/about" element={<About />}></Route>
<Route exact path="/" element={ <Textarea showAlert={showAlert} heading="Enter Text to analyze " mode={mode}/>}></Route>
</Routes>
</Router>
    </>
    
  );
}

export default App;
