import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import { Home } from './pages/home/home';

import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" component={ Home } />
      </Routes>
    </div>
  );
}

export default App;
