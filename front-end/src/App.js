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
import CreateCompany from './pages/CreateCompany';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <div className="App">
      
          <BrowserRouter>
          <Navbars />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Company" element={<Company/>}/>
              <Route path="/Company/Edit/:id" element={<EditCompany/>}/>
              <Route path="/Company/View" element={<ViewCompany/>}/>
              <Route path="/Company/Create" element={<CreateCompany/>}/>
              <Route path="/User" element={<User/>}/>
              <Route path="/User/Edit/:id" element={<EditUser/>}/>
              <Route path="/User/View" element={<ViewUser/>}/>
              <Route path="/User/Create" element={<CreateUser/>}/>
            </Routes>
          </BrowserRouter> 
          <Footer />
    </div>
  );
}

export default App;
