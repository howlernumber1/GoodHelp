import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import HomePage from './components/HomePage/HomePage';
import SearchPage from "./components/SearchPage/SearchPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import UserPage from "./components/UserPage/UserPage";
import ProviderPage from "./components/ProviderProfile/ProviderProfile";
import NoMatch from "./components/NoMatch/NoMatch";
import './App.css';



class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div>
      <header>
        <nav class="navbar navbar-dark bg-dark">
          <Link to={'/'}>Home</Link> |
          <Link to={'/search'}>Search</Link> |
          <Link to={'/services'}>Services</Link>|
          <Link to={'/user'}>Member</Link> |
          <Link to={'/user'}>Provider</Link>


        </nav>
      </header>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/user' component={UserPage} />
        <Route exact path='/provider' component={ProviderPage} />
        <Route component={NoMatch} />
      </Switch>

    </div>
  </BrowserRouter>
);
}
}

export default App;
