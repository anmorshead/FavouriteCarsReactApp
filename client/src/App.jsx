import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Dummy from './components/Dummy';
import ProtectedRoutes from './components/ProtectedRoutes';
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
          <Route element={<ProtectedRoutes/>}>
            <Route path="/dummy" element={<Dummy/>}/>
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
