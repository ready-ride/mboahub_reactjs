import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import { Home } from './pages/home/home';

import './styles/styles.css';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='space'></div>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="signin" element={ <SignInSignUp /> } />
          <Route path="dashboard" element={ <Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
