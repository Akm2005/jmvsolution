import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
    return (
      <BrowserRouter>
            
           
                <Header />
                <Routes>
                {/* <Route index element={<Home />} /> */}
                <Route path="/" exact element={<Home />} />
                <Route path="/services"element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
                
            
        </BrowserRouter>
    );
}

export default App;
