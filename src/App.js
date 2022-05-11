import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
     
        <Footer /> 
    </Router>
  );
}

export default App
