import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
   <Router>
      <SideBar />
   </Router>
  );
}

export default App;
