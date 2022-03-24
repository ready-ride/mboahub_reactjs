import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import { Home } from './pages/home/home';

import './styles/styles.css';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="signin" element={ <SignInSignUp /> } />
      </Routes>
    </div>
  );
}

export default App;
