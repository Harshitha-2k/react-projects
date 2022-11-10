import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './Components.js/Header';
import Home from './Components.js/Home';
import  Products  from './Components.js/Products'
import Login from './Components.js/Login';
import { Switch , Route } from 'react-router-dom';
import Cart from './Components.js/Cart';


function App(){
  return (
    <>
    <Header />
    <Switch>
      <Route  path="/Home" component={Home}/>
      <Route  path="/Products"  component={Products}/>
      <Route path="/Login" component={Login}/>
      </Switch>
    </>
)
}

export default App;