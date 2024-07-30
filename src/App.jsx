// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BeforeFooter from './components/Before Footer/Before Footer';
import About from './components/About/About';
import Default from './components/Default/Default';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portofilo/Portofilo';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <BeforeFooter />
      <Footer />
    </Router>
  );
};

export default App;
