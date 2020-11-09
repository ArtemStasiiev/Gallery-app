import React from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
    </div>
  );
}
