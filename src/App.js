import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route}  from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import Chart from './pages/Chart';
import Account from './pages/Account';


function App() {
  return (
      <Router>

        <div className="page-container">

            <Navbar/>
    
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/products" component={Products} />
              <Route path="/chart" component={Chart} />
              <Route path="/account" component={Account } />
            </Switch>

          </div>  
          
      </Router>
   
  );
}

export default App;
