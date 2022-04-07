import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import { Home } from './pages/home/home';

import './styles/styles.css';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import PropertyDetail from './components/PropertyDetail/PropertyDetail';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="signin" element={ <SignInSignUp /> } />
          <Route path="dashboard" element={ <Dashboard />} />
          <Route path="property_detail" element={ <PropertyDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
