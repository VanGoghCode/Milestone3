import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login';
import Signup from './Pages/SignUp/signup';
import './index.css'
import DuoLogin from './Pages/Duo/duoLogin';
import SearchAssets from './Pages/SearchAssets/searchAssets';
import TrackRequest from './Pages/TrackRequest/trackRequest';
import AssetInventory from './Pages/Assetinventory/assetinventory';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tfa" element={<DuoLogin />} />
        <Route path="/searchforassets" element={<SearchAssets />} />
        <Route path="/trackrequest" element={<TrackRequest />} />
        <Route path="/assetinventory" element={<AssetInventory />} />
      </Routes>
    </div>
  );
}

export default App;
