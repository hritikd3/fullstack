import React from 'react';  
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router,Switch, Routes, Route } from "react-router-dom";
import Home from './HomePage'
import Products from './ProductsPage'
import SingleProduct from './SingleProductPage'
import About from './AboutPage'
import Cart from './CartPage'
import Error from './ErrorPage'
import Checkout from './CheckoutPage'
import PrivateRoute from './PrivateRoute'

//export { Home, Products, SingleProduct, About, Cart, Error,Checkout,PrivateRoute };
const routing = (  
  <Router>  
      <Switch>  
         <Route path="/" component={Home} />  
         <Route path="/about" component={About} />  
         <Route path="/products" component={Products} />   
         <Route path="/cart" component={Cart} /> 
         <Route path="/checkout" component={Checkout} /> 
         <Route path="/error" component={Error} />   
      </Switch>  
  </Router>  
)  
  
ReactDOM.render(routing, document.getElementById('root'));  
