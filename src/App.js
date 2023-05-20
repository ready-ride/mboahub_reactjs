import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import ScrollToTop from "react-scroll-to-top";
import { MdArrowDropUp } from 'react-icons/md';

import { Home } from './pages/home/home';

import SignInSignUp from './pages/Auth/SignInSignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import PropertyDetail from './components/PropertyDetail/PropertyDetail';
import NewListing from './pages/Dashboard/NewListing/NewListing';
import MyListings from './pages/Dashboard/MyListings/MyListings';
import MyProfile from './pages/Dashboard/MyProfile/MyProfile';
import AllMyListings from './pages/Dashboard/MyListings/AllMyListings';
import Listingitem from './pages/Dashboard/MyListings/ListingItem';
import Properties from './pages/Properties/Properties';
import Navbar from './components/layouts/navbar/navbar';
;

function App() {

  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/signin" element={<SignInSignUp /> } />
            <Route path="dashboard" element={ <Dashboard /> } >
                <Route path='' element={  <NewListing /> } />
                <Route path='my_listings' element={<MyListings />} >
                  <Route path='' element={<AllMyListings />} />
                  <Route path=":house_id" element={ <Listingitem />} />
                </Route>
                <Route path='edit_profile' element={<MyProfile />} />
            </Route>
            <Route path="properties" element={ <Properties /> } />
            <Route path="houses/:house_id" element={ <PropertyDetail />} />
        </Routes>
        <ScrollToTop smooth component={<MdArrowDropUp color="#fff" />} style={{"padding": "5px", "background": "#3270FC", "borderRadius": "2px", "boxShadow": "0 4px 2px -2px gray"}}/>
    </div>
  );
}

export default App;
