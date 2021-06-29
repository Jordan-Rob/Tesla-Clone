import React from 'react';
import logo from './logo.svg';
import { carSlice } from './features/car/carSlice';
import Header from './components/Header'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
