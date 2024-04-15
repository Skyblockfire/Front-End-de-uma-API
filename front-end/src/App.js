import Navbars from './Components/Navbars';
import Footer from './Components/Footer';
//import Button from 'react-bootstrap/Button';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

//Páginas
import Home from "./pages/Home";
import Company from "./pages/Company";
import User from "./pages/User";
import EditCompany from "./pages/EditCompany";
import EditUser from './pages/EditUser';
import ViewCompany from './pages/ViewCompany'
import ViewUser from './pages/ViewUser'
import ExampleCompany from './pages/ExampleCompany';
import ExampleUser from './pages/ExampleUser';

function App() {
  return (
    <div className="App">
      
          <BrowserRouter>
          <Navbars />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Company" element={<Company/>}/>
              <Route path="/Company/Edit" element={<EditCompany/>}/>
              <Route path="/Company/View/1" element={<ViewCompany/>}/>
              <Route path="/Company/Edit/1" element={<ExampleCompany/>}/>
              <Route path="/User" element={<User/>}/>
              <Route path="/User/Edit" element={<EditUser/>}/>
              <Route path="/User/View/1" element={<ViewUser/>}/>
              <Route path="/User/Edit/1" element={<ExampleUser/>}/>
            </Routes>
          </BrowserRouter> 
          <Footer />
    </div>
  );
}

export default App;
