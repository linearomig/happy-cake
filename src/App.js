import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './views/contacto';
import Home from './views/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;