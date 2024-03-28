import Navbars from './Components/Navbars';
import Footer from './Components/Footer';
//import Button from 'react-bootstrap/Button';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

//Páginas
import Home from "./pages/Home";
import Company from "./pages/Company";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      
          <Navbars />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Company" element={<Company/>}/>
              <Route path="/User" element={<User/>}/>
            </Routes>
          </BrowserRouter> 
          <Footer />
    </div>
  );
}

export default App;
