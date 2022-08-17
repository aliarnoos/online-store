import React from 'react';
import './App.css'
import Home from './components/Home';
import Shop from './components/Shop';
import ItemINfo from './components/ItemInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Shop" exact element={<Shop />} />
          <Route path="/About" exact element={<Shop />} />
          <Route path="/ItemInfo/:id" exact element={<ItemINfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
