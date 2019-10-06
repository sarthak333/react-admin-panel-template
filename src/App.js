import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Router, Link } from "@reach/router"
import Login from './pages/login/Login'

function App() {
  let Dash = () => <div>Dash</div>
  let LoginPage = () => <Login />
  return (
    <Router>
      <Dash path="dashboard" />
      <LoginPage path="/" />
    </Router>
  );
}

export default App;
