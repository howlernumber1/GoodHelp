import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
// import SearchPage from "./components/SearchPage/SearchPage";
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
        <nav className="navbar d-flex justify-content-end">
        <p className="navbar-brand"> GoodHelp</p>
         <a className="links"> <Link to={'/'}>Home</Link> </a> |
          {/* <Link to={'/search'}>Search</Link> | */}
          <a className="links"> <Link to={'/services'}>Services</Link> </a>|
          <a className="links"><Link to={'/user'}>Member</Link> </a>|
          <a className="links"><Link to={'/user'}>Provider</Link> </a>


        </nav>
      </header>

      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/search' component={SearchPage} /> */}
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
