import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    
    <BrowserRouter>
      <NavBar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
