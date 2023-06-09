import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';

const promise = loadStripe(
  'pk_test_51Hi0faEtfix0HF1jAWYMyXICrZDBQdlqc53ADwEPhyDUZ3a3abCTxAqGWjLWRj2kCphi5CxzTP1WGKy4nyAuB9MX002vleKzV0'
);

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The USER is >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router >
      <div className="App">
        <Switch >
          <Route path='/orders' >
            <Header />
            <Orders />
          </Route>
        <Route path='/login' >
            <Login />
          </Route>
          <Route path='/checkout' >
          <Header />
            <Checkout />
          </Route>
          <Route path='/payment' >
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path='/' >
            <Header />
            <Home />
            <Footer />
          </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
