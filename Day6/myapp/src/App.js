import React from 'react';
//import './assets/css/App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;