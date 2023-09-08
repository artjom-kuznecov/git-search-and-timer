import React from 'react'
import {BrowserRouter} from "react-router-dom";

import './App.css'
import AppRouter from './AppRouter/AppRouter';
import Navbar from './UI/Navbar/Navbar';



function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>

)}

export default App;
