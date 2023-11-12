import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideBar from './components/SideBar';
import Home from './components/Home';
import Integrations from './components/Integrations';
import Billing from './components/Billing';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="font-sans">
          <Navbar />

          <div className='bg-[#f6f6f7] h-fit flex'>
            <SideBar />
            <div className='mx-auto'>
              <Routes>
                <Route exact path='/Home' element={<Home />}> </Route>
                <Route exact path='/Integrations' element={<Integrations />}> </Route>
                <Route exact path='/Billing' element={<Billing />}> </Route>
              </Routes>

            </div>

          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
