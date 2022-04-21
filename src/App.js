import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import ScrollToTop from "react-scroll-to-top";
import { MdArrowDropUp } from 'react-icons/md';

import { Home } from './pages/home/home';

import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import PropertyDetail from './components/PropertyDetail/PropertyDetail';
import NewListing from './pages/Dashboard/NewListing/NewListing';
import MyListings from './pages/Dashboard/MyListings/MyListings';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="signin" element={<SignInSignUp /> } />
            <Route path="dashboard" element={ <Dashboard /> } >
                <Route path='new_listing' element={ <NewListing /> } />
                <Route path='my_listings' element={<MyListings />} />
            </Route>
            <Route path="my_listings/:house_id" element={ <PropertyDetail />} />
            <Route path="houses/:house_id" element={ <PropertyDetail />} />
        </Routes>
        <ScrollToTop smooth component={<MdArrowDropUp color="#fff" />} style={{"padding": "5px", "background": "#3270FC", "borderRadius": "2px", "boxShadow": "0 4px 2px -2px gray"}}/>
    </div>
  );
}

export default App;
